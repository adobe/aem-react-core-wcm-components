package com.adobe.cq.wcm.core.examples.react.components.models.impl.core;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.List;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.experimental.Delegate;
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
    
    
    private interface Excludes{
        boolean linkItems();
        String getExportedType();
        Collection<ListItem> getListItems();
    }
    
    public static final String RESOURCE_TYPE = "core-components-examples/wcm/react/components/list";
    
    @Delegate(types = List.class,excludes = ListImpl.Excludes.class)
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
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
