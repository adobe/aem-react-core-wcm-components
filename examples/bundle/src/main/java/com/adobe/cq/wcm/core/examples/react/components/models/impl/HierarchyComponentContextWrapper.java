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
import com.day.cq.wcm.api.components.ComponentContext;
import lombok.experimental.Delegate;

public class HierarchyComponentContextWrapper implements ComponentContext {

    private interface Excludes {
        Page getPage();
    }
    
    @Delegate(excludes =  Excludes.class)
    private ComponentContext wrappedComponentContext;
    private Page hierarchyPage;

    HierarchyComponentContextWrapper(ComponentContext wrappedComponentContext, Page hierarchyPage) {
        this.wrappedComponentContext = wrappedComponentContext;
        this.hierarchyPage = hierarchyPage;
    }
    
    @Override
    public Page getPage() {
        return hierarchyPage;
    }
    
}