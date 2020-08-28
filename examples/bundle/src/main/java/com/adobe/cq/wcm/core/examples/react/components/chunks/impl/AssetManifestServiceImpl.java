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
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.tika.io.IOUtils;
import org.osgi.service.component.annotations.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;


@Component(service = AssetManifestService.class)
public class AssetManifestServiceImpl implements AssetManifestService {
    

    private static final String PATH_TO_WEBCOMPONENT_MANIFEST = "/apps/core-components-examples/wcm/react/clientlibs/react-webcomponents/resources/asset-manifest.json";
    private static final String PATH_TO_SPA_MANIFEST          = "/apps/core-components-examples/wcm/react/clientlibs/react-spacomponents/resources/asset-manifest.json";
    
    @Override
    public Map<String,String> getManifest(SlingHttpServletRequest request) throws IOException {
    
        final Resource assetManifestResource = getManifestResource(request);
    
        if(assetManifestResource != null){
            InputStream file = assetManifestResource.adaptTo(InputStream.class);
            String fileString = IOUtils.toString(file);
            ObjectMapper objectMapper = new ObjectMapper();
            Map<String,Object> objectMap =objectMapper.readValue(fileString, new TypeReference<Map<String, Object>>() {});
            
            Map<String,Object> targetMap = objectMap.containsKey("files") ? (Map<String,Object>) objectMap.get("files") : objectMap;
            Map<String,String> resultMap = new HashMap<>();
            targetMap.entrySet().forEach((entry) -> resultMap.put(entry.getKey(), entry.getValue().toString()));
            return resultMap;
        }else{
            throw new IOException("Could not load manifest file!");
        }
        
    }
    
    private Resource getManifestResource(SlingHttpServletRequest request) {
        
        if(request.getResource().getPath().contains("webcomponent")){
            return request.getResourceResolver().getResource(PATH_TO_WEBCOMPONENT_MANIFEST);
        }else{
            return request.getResourceResolver().getResource(PATH_TO_SPA_MANIFEST);
        }
       
    }
    
    
}
