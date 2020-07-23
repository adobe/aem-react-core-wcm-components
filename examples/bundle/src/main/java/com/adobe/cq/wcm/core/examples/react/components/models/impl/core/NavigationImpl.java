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


import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Navigation;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import lombok.experimental.Delegate;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.via.ForcedResourceType;

import java.util.List;
import java.util.stream.Collectors;



@Model(
        adaptables = SlingHttpServletRequest.class, adapters = {Navigation.class, ComponentExporter.class},
        resourceType = "core-components-examples/wcm/react/components/navigation"
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class NavigationImpl implements Navigation {
    
    private interface Overrides{
        List<NavigationItem> getItems();
        String getExportedType();
    }
    
    @Delegate(excludes = Overrides.class)
    @Self
    @Via(type = ForcedResourceType.class, value = "core/wcm/components/navigation/v1/navigation")
    Navigation delegate;
    
    @SlingObject
    private Resource resource;
    
    public List<NavigationItem> getItems(){
        List<NavigationItem> items = delegate.getItems();
        return items.stream().map(RoutedNavigationItem::new).collect(Collectors.toList());
    }
    
    public String getExportedType(){
        return resource.getResourceType();
    }
    
}
