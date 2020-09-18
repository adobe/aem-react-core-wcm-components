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
package com.adobe.cq.wcm.core.examples.react.components.chunks.impl;

import com.adobe.cq.wcm.core.examples.react.components.chunks.impl.SpaManifest;
import com.adobe.cq.wcm.core.examples.react.components.ssr.SpaPageBindingsProvider;
import com.adobe.cq.wcm.core.examples.react.components.ssr.model.SSRResponse;
import com.adobe.cq.wcm.core.examples.react.components.ssr.model.SSRResponsePayload;
import com.adobe.granite.ui.clientlibs.webpack.WebpackContentProviderService;
import com.adobe.granite.ui.clientlibs.webpack.WebpackManifest;
import com.adobe.granite.ui.clientlibs.webpack.WebpackProviderService;
import com.adobe.granite.ui.clientlibs.webpack.WebpackSSRChunkKeyProvider;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Component(service = {WebpackContentProviderService.class,WebpackSSRChunkKeyProvider.class},   property = {
        Constants.SERVICE_RANKING + ":Integer=" + Integer.MAX_VALUE
})
public class SpaManifestProvider implements WebpackContentProviderService<SpaManifest>, WebpackSSRChunkKeyProvider<SpaManifest> {
    
    @Reference
    private SpaPageBindingsProvider bindingsProvider;
    
    @Override
    public Class<SpaManifest> getManifestClass() {
        return SpaManifest.class;
    }
    
    @Override
    public List<String> getCssEntryPoints(SpaManifest spaManifest, Resource resource) {
        return spaManifest.getEntryPoints().stream()
                .filter((entryPoint) -> entryPoint.endsWith("css"))
                .collect(Collectors.toList());
    }
    
    @Override
    public List<String> getJsEntryPoints(SpaManifest spaManifest, Resource resource) {
        return spaManifest.getEntryPoints().stream()
                .filter((entryPoint) -> entryPoint.endsWith("js"))
                .collect(Collectors.toList());
    }
    
    
    @Override
    public Map<String, String> computeChunkMap(SpaManifest manifest) {
        return manifest;
    }
    
    @Override
    public String getSupportedCategory() {
        return "spa-manifest";
    }
 
    
    @Override
    public List<String> getIncludedChunkKeysForRequest(SlingHttpServletRequest slingHttpServletRequest, SpaManifest spaManifest) {
        if(bindingsProvider.isServerSideRenderingActiveForRequest()){
            final SSRResponse ssrResponse = bindingsProvider.getServerSideRenderedRequestResult();
            final SSRResponsePayload payload = ssrResponse.getPayload();
            return Arrays.asList(payload.getChunkNames());
        }
    
        return new ArrayList<>();
    }
}
