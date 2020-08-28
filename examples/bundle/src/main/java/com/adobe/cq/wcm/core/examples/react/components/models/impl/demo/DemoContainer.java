/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2019 Adobe
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
package com.adobe.cq.wcm.core.examples.react.components.models.impl.demo;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.examples.react.components.models.DemoContainerExporter;
import com.day.cq.wcm.foundation.model.responsivegrid.ResponsiveGrid;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.Nonnull;


@Model(adaptables = SlingHttpServletRequest.class, resourceType = DemoContainer.RESOURCE_TYPE, adapters = {ContainerExporter.class,ComponentExporter.class})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
@JsonSerialize(as = DemoContainerExporter.class)
public class DemoContainer extends ResponsiveGrid implements DemoContainerExporter {
    
    static final String RESOURCE_TYPE = "core-components-examples/wcm/react/components/demo";
    
    @ValueMapValue @Optional @Default(booleanValues = true)
    private boolean fullWidth;
    
    @Override
    @JsonIgnore
    public Resource getParent() {
        return super.getParent();
    }
    
    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
    

    public boolean isFullWidth() {
        return fullWidth;
    }
}
