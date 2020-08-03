package com.adobe.cq.wcm.core.examples.react.components.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.day.cq.wcm.foundation.model.responsivegrid.ResponsiveGrid;
import com.day.cq.wcm.foundation.model.responsivegrid.export.ResponsiveGridExporter;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import javax.annotation.Nonnull;

@Model(
        adaptables = {SlingHttpServletRequest.class},
        adapters = {ResponsiveGrid.class, ComponentExporter.class},
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType = {MainResponsiveGrid.RESOURCE_TYPE}
)
@Exporter(name = "jackson", selector = "model", extensions = {"json"})
@JsonSerialize(as = ResponsiveGridExporter.class)
public class MainResponsiveGrid extends ResponsiveGrid {
    
    static final String RESOURCE_TYPE = "core-components-examples/wcm/react/components/main-responsive-grid";
    
    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
