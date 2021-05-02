/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
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
package com.adobe.cq.wcm.core.examples.react.components.models.impl;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.components.AnalyzeContext;
import com.day.cq.wcm.api.components.Component;
import com.day.cq.wcm.api.components.ComponentContext;
import com.day.cq.wcm.api.components.EditContext;
import com.day.cq.wcm.api.designer.Cell;
import org.apache.sling.api.resource.Resource;

import java.util.Set;

public class HierarchyComponentContextWrapper implements ComponentContext {

    private interface Excludes {
        Page getPage();
    }
    
    private ComponentContext wrappedComponentContext;
    private Page hierarchyPage;

    HierarchyComponentContextWrapper(ComponentContext wrappedComponentContext, Page hierarchyPage) {
        this.wrappedComponentContext = wrappedComponentContext;
        this.hierarchyPage = hierarchyPage;
    }
    
    @Override
    public ComponentContext getParent() {
        return wrappedComponentContext.getParent();
    }
    
    @Override
    public ComponentContext getRoot() {
        return wrappedComponentContext.getRoot();
    }
    
    @Override
    public boolean isRoot() {
        return wrappedComponentContext.isRoot();
    }
    
    @Override
    public Resource getResource() {
        return wrappedComponentContext.getResource();
    }
    
    @Override
    public Cell getCell() {
        return wrappedComponentContext.getCell();
    }
    
    @Override
    public EditContext getEditContext() {
        return wrappedComponentContext.getEditContext();
    }
    
    @Override
    public AnalyzeContext getAnalyzeContext() {
        return wrappedComponentContext.getAnalyzeContext();
    }
    
    @Override
    public Component getComponent() {
        return wrappedComponentContext.getComponent();
    }
    
    @Override
    public Page getPage() {
        return hierarchyPage;
    }
    
    @Override
    public Object getAttribute(String s) {
        return wrappedComponentContext.getAttribute(s);
    }
    
    @Override
    public Object setAttribute(String s, Object o) {
        return wrappedComponentContext.setAttribute(s,o);
    }
    
    @Override
    public Set<String> getCssClassNames() {
        return wrappedComponentContext.getCssClassNames();
    }
    
    @Override
    public boolean hasDecoration() {
        return wrappedComponentContext.hasDecoration();
    }
    
    @Override
    public void setDecorate(boolean b) {
        wrappedComponentContext.setDecorate(b);
    }
    
    @Override
    public String getDecorationTagName() {
        return wrappedComponentContext.getDecorationTagName();
    }
    
    @Override
    public void setDecorationTagName(String s) {
        wrappedComponentContext.setDecorationTagName(s);
    }
    
    @Override
    public String getDefaultDecorationTagName() {
        return wrappedComponentContext.getDefaultDecorationTagName();
    }
    
    @Override
    public void setDefaultDecorationTagName(String s) {
        wrappedComponentContext.setDefaultDecorationTagName(s);
    }
    
}
