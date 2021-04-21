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
import com.adobe.cq.wcm.core.examples.react.components.ssr.model.SSRResponse;
import com.day.cq.wcm.api.WCMMode;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.osgi.services.HttpClientBuilderFactory;
import org.apache.http.util.EntityUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

@Component(
        service = {SSRRenderingService.class},
        immediate = true
)
@Designate(ocd = SSRRenderingServiceImpl.Configuration.class)
public class SSRRenderingServiceImpl implements SSRRenderingService {
    
    private static final Logger log = LoggerFactory.getLogger(SSRRenderingServiceImpl.class);
    
    private static final String DEFAULT_HOST = "http://localhost:4200/prerender";
    
    @Reference
    private HttpClientBuilderFactory clientBuilderFactory;
    
    
    private boolean fallbackToCSR;
    private String host;
    private boolean isEnabled;
    
    @Activate
    protected void activate(Configuration configuration) {
        host = configuration.host();
        fallbackToCSR = configuration.fallbackToCSR();
        isEnabled = configuration.enabled();
    }
    
    @Override
    public boolean isEnabled() {
        return isEnabled;
    }
    
    @Override
    public boolean isFallbackEnabled() {
        return fallbackToCSR;
    }
    
    @Override
    public SSRResponse getSSRRenderedResponse(SlingHttpServletRequest request, HierarchyPage requestedPage) throws SSRException {

        try {
            // this should come from a config

            CloseableHttpClient client = clientBuilderFactory.newBuilder().build();

            HierarchyPage rootPage = requestedPage.getRootModel();
            HttpPost postMethod = new HttpPost(host);
            
            addMetaDataHeaders(postMethod, request, requestedPage, rootPage);
            
            final String payload = getModelJSON( rootPage);
            StringEntity requestData = new StringEntity(payload, ContentType.APPLICATION_JSON);
            postMethod.setEntity(requestData);

            CloseableHttpResponse preRenderedResponse = client.execute(postMethod);
            return parseOutput(preRenderedResponse);


        } catch (Exception e) {
            log.error("Error while trying to Render App server-side: " + e.getMessage(), e);
            if(fallbackToCSR) {
                return null;
            }else{
                throw new SSRException("Error rendering App Server side", e);
            }
        }
    }
    
    private void addMetaDataHeaders(HttpPost postMethod, SlingHttpServletRequest request, HierarchyPage requestedPage, HierarchyPage rootPage) {
    
        String wcmMode = WCMMode.fromRequest(request).toString();
        
        String pagePath = requestedPage.getExportedPath();
        String modelRootUrl = rootPage.getRootUrl();
        String requestUrl = request.getRequestURI();
        String rootPagePath = rootPage.getExportedPath();
        
        postMethod.addHeader("wcm-mode", wcmMode);
        postMethod.addHeader("page-path", pagePath);
        postMethod.addHeader("model-root-url", modelRootUrl);
        postMethod.addHeader("request-url", requestUrl);
        postMethod.addHeader("root-page-path", rootPagePath);
       
    }
    
    private SSRResponse parseOutput(CloseableHttpResponse preRenderedResponse) throws IOException {
        String responseBody = EntityUtils.toString(preRenderedResponse.getEntity());

        ObjectMapper mapper = new ObjectMapper();
        SSRResponse responseParsed = mapper.readValue(responseBody, SSRResponse.class);

        int statusCode = preRenderedResponse.getStatusLine().getStatusCode();
        responseParsed.setStatusCode(statusCode);

        return responseParsed;
    }
    
    
    private String getModelJSON(HierarchyPage rootPage) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(rootPage);
    }
    
    
    
    @ObjectClassDefinition(name = "Single Page Applications - Server Side Rendering Configuration",
            description = "URLs of the servers responsible for returning the HTML based on the model data send in request")
    @interface Configuration {
        @AttributeDefinition(
                name = "React Node Server URL",
                description = "full URL, i.e. " + DEFAULT_HOST,
                type = AttributeType.STRING
        )
        String host() default DEFAULT_HOST;

        @AttributeDefinition(
                name = "Fall back to client side configuration",
                type = AttributeType.BOOLEAN
        )
        boolean fallbackToCSR() default true;

        @AttributeDefinition(
                name = "Is enabled",
                type = AttributeType.BOOLEAN
        )
        boolean enabled() default true;
    }

}
