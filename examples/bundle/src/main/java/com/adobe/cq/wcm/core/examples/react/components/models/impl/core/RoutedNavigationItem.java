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
package com.adobe.cq.wcm.core.examples.react.components.models.impl.core;

import com.adobe.cq.wcm.core.components.models.NavigationItem;
import com.adobe.cq.wcm.core.components.models.datalayer.ComponentData;
import com.adobe.cq.wcm.core.examples.react.components.models.RoutedModel;
import com.adobe.cq.wcm.core.examples.react.components.utils.RouterUtil;
import com.day.cq.wcm.api.Page;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Calendar;
import java.util.List;


public class RoutedNavigationItem implements NavigationItem, RoutedModel {

    private interface Overrides{
        Page getPage();
        String getExportedType();
    }
    
    private NavigationItem delegate;

    public RoutedNavigationItem(NavigationItem delegate){
        this.delegate = delegate;
    }

    @Override
    public boolean isRouted() {

        boolean isRouted = false;

        if(delegate != null){
           isRouted = RouterUtil.isUrlRouted(delegate.getPath());
        }

        return isRouted;
    }
    
    @Override
    public boolean isActive() {
        return delegate.isActive();
    }
    
    @Override
    public List<NavigationItem> getChildren() {
        return delegate.getChildren();
    }
    
    @Override
    public int getLevel() {
        return delegate.getLevel();
    }
    
    
    @Override
    @Deprecated

    public String getURL() {
        return delegate.getURL();
    }
    
    @Override

    public String getTitle() {
        return delegate.getTitle();
    }
    
    @Override

    public String getDescription() {
        return delegate.getDescription();
    }
    
    @Override
    public Calendar getLastModified() {
        return delegate.getLastModified();
    }
    
    @Override

    public String getPath() {
        return delegate.getPath();
    }
    
    @Override

    public String getName() {
        return delegate.getName();
    }
    
    @Override

    public String getId() {
        return delegate.getId();
    }
    
    @Override
    @JsonProperty("dataLayer")
    public ComponentData getData() {
        return delegate.getData();
    }
    
    @JsonIgnore
    public Page getPage(){
        return delegate.getPage();
    }

    @Override @JsonIgnore
    public String getExportedType() {
        return delegate.getExportedType();
    }
}
