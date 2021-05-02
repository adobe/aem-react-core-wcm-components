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

import com.adobe.cq.wcm.core.examples.react.components.chunks.AssetManifestService;
import com.adobe.cq.wcm.core.examples.react.components.chunks.Manifest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.tika.io.IOUtils;
import org.osgi.service.component.annotations.Component;

import java.io.IOException;
import java.io.InputStream;


@Component(service = AssetManifestService.class)
public class AssetManifestServiceImpl implements AssetManifestService {
    

    private static final String PATH_TO_WEBCOMPONENT_MANIFEST = "/apps/core-components-examples/wcm-react/clientlibs/react-webcomponents/resources/asset-manifest.json";
    private static final String PATH_TO_SPA_MANIFEST          = "/apps/core-components-examples/wcm-react/clientlibs/react-spacomponents/resources/asset-manifest.json";
    
    @Override
    public Manifest getManifest(SlingHttpServletRequest request) throws IOException {
    
        final Resource assetManifestResource = getManifestResource(request);
    
        if(assetManifestResource != null){
            InputStream file = assetManifestResource.adaptTo(InputStream.class);
            String fileString = IOUtils.toString(file);
            ObjectMapper objectMapper = new ObjectMapper();
            
            if(isWebcomponent(request)){
                return objectMapper.readValue(fileString, WebManifest.class);
            }else{
                return objectMapper.readValue(fileString, SpaManifest.class);
            }
        }else{
            throw new IOException("Could not load manifest file!");
        }
        
    }
    
    private Resource getManifestResource(SlingHttpServletRequest request) {
        
        if(isWebcomponent(request)){
            return request.getResourceResolver().getResource(PATH_TO_WEBCOMPONENT_MANIFEST);
        }else{
            return request.getResourceResolver().getResource(PATH_TO_SPA_MANIFEST);
        }
       
    }
    
    private boolean isWebcomponent(SlingHttpServletRequest request) {
        return request.getResource().getPath().contains("webcomponent");
    }
    
    
}
