/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
package com.adobe.cq.wcm.core.examples.react.components.ssr.impl;


import com.adobe.cq.wcm.core.examples.react.components.models.HierarchyPage;
import com.adobe.cq.wcm.core.examples.react.components.ssr.SSRRenderingService;
import com.adobe.cq.wcm.core.examples.react.components.ssr.SpaPageBindingsProvider;
import com.adobe.cq.wcm.core.examples.react.components.ssr.model.SSRResponse;
import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.request.RequestPathInfo;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
import java.util.regex.Pattern;

@Component(service = {Filter.class, SpaPageBindingsProvider.class},
        immediate = true,
        property = {
                "sling.filter.scope=INCLUDE",
                Constants.SERVICE_DESCRIPTION + "=SpaPageBindingsProviderImpl - loads up Server Side Rendering and binds it to the SPA context",
                Constants.SERVICE_RANKING + ":Integer=-30",
        })
@SuppressFBWarnings
public class SpaPageBindingsProviderImpl implements SpaPageBindingsProvider, Filter {
    
    
    private static final Logger log = LoggerFactory.getLogger(SpaPageBindingsProviderImpl.class);
    
    static final ThreadLocal<SSRResponse> SSR_RESPONSE = new ThreadLocal<>();

    static final ThreadLocal<Boolean> SSR_ACTIVATED_FLAG = ThreadLocal.withInitial(() -> Boolean.FALSE);
    static final ThreadLocal<Boolean> THREAD_LOCAL_INIT = ThreadLocal.withInitial(() -> Boolean.FALSE);
    static final ThreadLocal<Boolean> CSR_FALLBACK_ACTIVATED_FLAG = ThreadLocal.withInitial(() -> Boolean.FALSE);
    static final Pattern SPA_PATH_CHECK = Pattern.compile("/content/aem-react-core-spacomponents-example(.*)\\.html");
    
    private static final String HEADER_REQUESTED_BY = "requested-by";
    private static final String RT_SPA_CONTENT_PAGE = "core-components-examples/wcm/react/components/page/react-spacomponents-page";
    private static final String RT_SPA_XF_PAGE      = "core-components-examples/wcm/react/components/page/react-spacomponents-page/xf-page";
    
    
    @Reference
    private SSRRenderingService ssrRenderingService;
 
  
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
        
        if (servletRequest instanceof SlingHttpServletRequest) {
            
            SlingHttpServletRequest request = (SlingHttpServletRequest) servletRequest;
            
            if (isSpaPageRequest(request)) {
                try {
                    setPageBindings(request);
                    THREAD_LOCAL_INIT.set(true);
                    chain.doFilter(servletRequest, servletResponse);
                } catch (SSRException e) {
                    throw new ServletException(e);
                } finally {
                    THREAD_LOCAL_INIT.set(false);
                    SSR_ACTIVATED_FLAG.set(false);
                    CSR_FALLBACK_ACTIVATED_FLAG.set(false);
                    SSR_RESPONSE.remove();
                    
                }
                return;
            }
            
        }
        
        chain.doFilter(servletRequest, servletResponse);
    }
  
    @Override
    public boolean isServerSideRenderingActiveForRequest() {
        return SSR_ACTIVATED_FLAG.get();
    }
    
    @Override
    public boolean isFallbackToClientSideRenderingActive() {
        return CSR_FALLBACK_ACTIVATED_FLAG.get();
    }
    
    @Override
    public SSRResponse getServerSideRenderedRequestResult() {
        return SSR_RESPONSE.get();
    }
    
    private void setPageBindings(SlingHttpServletRequest request) throws SSRException, IOException {
        //bindings for server side rendering
    
         HierarchyPage hierarchyPage = request.adaptTo(HierarchyPage.class);
         
        if (hierarchyPage != null) {
            
            if(     ssrRenderingService.isEnabled() && (
                    request.getRequestPathInfo().getSelectorString() == null || (
                    !request.getRequestPathInfo().getSelectorString().contains("model")
            ))){
                SSRResponse ssrResponse = ssrRenderingService.getSSRRenderedResponse(request, hierarchyPage);
    
                SSR_RESPONSE.set(ssrResponse);
                SSR_ACTIVATED_FLAG.set(true);
                
                if (ssrResponse != null && ssrResponse.getStatusCode() >= 400) {
        
                    String error = "Rendering App server-side finished with error code: " + ssrResponse.getStatusCode()
                            + " and message: " +  ((ssrResponse.getPayload() != null)  ? ssrResponse.getPayload().getHtml() : "");
                    if (ssrRenderingService.isFallbackEnabled()) {
                        log.error(error);
                        SSR_ACTIVATED_FLAG.set(false);
                        CSR_FALLBACK_ACTIVATED_FLAG.set(true);
                        
                    } else {
                        throw new IOException(error);
                    }
                }else if(ssrResponse == null){
                    if (ssrRenderingService.isFallbackEnabled()) {
                        SSR_ACTIVATED_FLAG.set(false);
                        CSR_FALLBACK_ACTIVATED_FLAG.set(true);
                    }else{
                        throw new SSRException("failed to compute server side rendered response!");
                    }
                }else{
                    log.info("Successfully computed SSR");
                }
            }
            
        } else {
            log.error("Could not adapt sling request with resource path {} to hierarchyPage!", request.getResource().getPath());
        }
    }
    
    private boolean isSpaPageRequest(SlingHttpServletRequest request) {
    
        final RequestPathInfo requestPathInfo = request.getRequestPathInfo();
        String pathInfo = requestPathInfo.getResourcePath() + "." +  requestPathInfo.getExtension();
        
        return SPA_PATH_CHECK.matcher(pathInfo).matches() &&
                request.getAttribute(HEADER_REQUESTED_BY) == null &&
                (
                        request.getResourceResolver().isResourceType(request.getResource(), RT_SPA_CONTENT_PAGE) ||
                        request.getResourceResolver().isResourceType(request.getResource(), RT_SPA_XF_PAGE)
                ) &&
                !THREAD_LOCAL_INIT.get();
    }
    
  
    
    @Override
    public void destroy() {
    
    }
}
