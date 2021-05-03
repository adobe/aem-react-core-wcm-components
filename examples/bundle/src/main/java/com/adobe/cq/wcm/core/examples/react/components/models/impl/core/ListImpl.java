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
import com.adobe.cq.wcm.core.components.models.List;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.adobe.cq.wcm.core.components.models.datalayer.ComponentData;
import com.day.cq.wcm.api.Page;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import java.util.Collection;
import java.util.stream.Collectors;

import static com.adobe.cq.wcm.core.examples.react.components.models.impl.core.ListImpl.RESOURCE_TYPE;

@Model(
        adaptables = SlingHttpServletRequest.class, adapters = {List.class, ComponentExporter.class},
        resourceType = RESOURCE_TYPE
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ListImpl implements List {
    
    public static final String RESOURCE_TYPE = "core-components-examples/wcm-react/components/list";
    
    @Self
    @Via(type = ResourceSuperType.class)
    List delegate;
    
    @JsonProperty("items")
    public Collection<ListItem> getListItems(){
        return delegate.getListItems().stream().map(RoutedListItem::new).collect(Collectors.toList());
    }
    
    @JsonProperty("linkItems")
    public boolean linkItems() {
        return delegate.linkItems();
    }
    
    @Override
    @Deprecated
    public Collection<Page> getItems() {
        return delegate.getItems();
    }
    
    @Override
    public boolean showDescription() {
        return delegate.showDescription();
    }
    
    @Override
    public boolean showModificationDate() {
        return delegate.showModificationDate();
    }
    
    @Override
    public String getDateFormatString() {
        return delegate.getDateFormatString();
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
    
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
