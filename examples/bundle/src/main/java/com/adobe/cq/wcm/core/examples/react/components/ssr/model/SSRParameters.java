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
package com.adobe.cq.wcm.core.examples.react.components.ssr.model;


import com.fasterxml.jackson.annotation.JsonInclude;

public class SSRParameters {
    
    private final String wcmMode;
    private final String pagePath;
    private final String modelRootUrl;
    private final String requestUrl;
    
    public SSRParameters(String wcmMode, String requestUrl, String pagePath, String modelRootUrl) {
        this.wcmMode = wcmMode;
        this.requestUrl = requestUrl;
        this.pagePath = pagePath;
        this.modelRootUrl = modelRootUrl;
    }
    
    @JsonInclude
    public String getWcmMode() {
        return wcmMode;
    }
    
    @JsonInclude
    public String getPagePath() {
        return pagePath;
    }
    
    @JsonInclude
    public String getModelRootUrl() {
        return modelRootUrl;
    }
    
    @JsonInclude
    public String getRequestUrl() {
        return requestUrl;
    }
    
    @JsonInclude
    public String getRequestPath() {
        return requestUrl;
    }
}