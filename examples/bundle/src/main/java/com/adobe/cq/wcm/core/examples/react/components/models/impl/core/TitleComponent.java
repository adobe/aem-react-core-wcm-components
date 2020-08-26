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
import com.adobe.cq.wcm.core.components.models.Title;
import com.adobe.cq.wcm.core.components.models.datalayer.ComponentData;
import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
@Model(
        adaptables = SlingHttpServletRequest.class, adapters = {Title.class, ComponentExporter.class},
        resourceType = TitleComponent.RESOURCE_TYPE
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
@SuppressFBWarnings
public class TitleComponent implements Title {
    
    public static final String RESOURCE_TYPE = "core-components-examples/wcm/react/components/title";
    
    @Override
    public String getText() {
        return null;
    }
    
    @Override
    public String getType() {
        return null;
    }
    
    @Override
    public String getLinkURL() {
        return null;
    }
    
    @Override
    public boolean isLinkDisabled() {
        return false;
    }
    
    @Override
    public String getExportedType() {
        return null;
    }
    
    @Override
    public String getId() {
        return null;
    }
    
    @Override
    public  ComponentData getData() {
        return null;
    }
}
