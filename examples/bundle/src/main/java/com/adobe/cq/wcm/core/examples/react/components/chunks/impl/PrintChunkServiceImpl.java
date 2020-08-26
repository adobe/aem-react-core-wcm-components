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
import com.adobe.cq.wcm.core.examples.react.components.chunks.PrintChunkService;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.LoginException;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component(service = PrintChunkService.class)
public class PrintChunkServiceImpl implements PrintChunkService {
    
    private static final Logger log = LoggerFactory.getLogger(PrintChunkServiceImpl.class);
    
    private static final String PATH_TO_WEBCOMPONENT_CLIENTLIB = "/etc.clientlibs/core-components-examples/wcm/react/clientlibs/react-webcomponents/resources/";
   
    private static final String SCRIPT_TAG = "\n<script type=\"text/javascript\" src=\"%s\"></script>";
    private static final String CSS_TAG = "\n<link rel=\"stylesheet\" href=\"%s\" type=\"text/css\">";
    
    @Reference
    private AssetManifestService assetManifestService;
    
    @Override
    public void printJsChunkToResponse(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        print(request, response, SCRIPT_TAG, "js");
    }
    
    @Override
    public void printCssChunkToResponse(SlingHttpServletRequest request, SlingHttpServletResponse response) {
        print(request, response, CSS_TAG, "css");
    }
    
    
    private List<String> getEntryPoints(Map<String,String> manifest) {
        
        List<String> entryPoints = new ArrayList<>();
        
        entryPoints.add(manifest.get(  "bootstrap.js"));
        entryPoints.add(manifest.get(  "main.js"));
        entryPoints.add(manifest.get(  "main.css"));
        
        return entryPoints;
    }
    
    private void print(SlingHttpServletRequest request, SlingHttpServletResponse response, String format, String extension){
        try {
            List<String> entryPoints = getEntryPoints(assetManifestService.getManifest(request));
        
            for(String entryPoint : entryPoints){
            
                if(entryPoint.endsWith(extension)){
                    String tag = getTag(format, getPrefix(request) + entryPoint);
                    response.getWriter().println(tag);
                }
            
            }
        
        } catch (IOException | LoginException e) {
            log.error("Error printing css chunk", e);
        }
    }
    
    private String getPrefix(SlingHttpServletRequest request){
        if(request.getResource().getPath().contains("webcomponent")){
            return PATH_TO_WEBCOMPONENT_CLIENTLIB;
        }else return "";
    }
    

    private String getTag(String format, String entryPoint){
        return String.format(format,entryPoint);
    }
}
