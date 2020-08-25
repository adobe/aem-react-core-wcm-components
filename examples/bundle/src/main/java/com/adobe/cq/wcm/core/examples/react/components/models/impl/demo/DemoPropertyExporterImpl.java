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

package com.adobe.cq.wcm.core.examples.react.components.models.impl.demo;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.factory.ModelFactory;

import javax.annotation.Nonnull;
import javax.annotation.PostConstruct;
import javax.servlet.ServletException;
import java.io.IOException;
import java.util.Map;


@Model(adaptables = SlingHttpServletRequest.class, resourceType = DemoPropertyExporterImpl.RESOURCE_TYPE, adapters = {ComponentExporter.class})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DemoPropertyExporterImpl extends AbstractDemoComponent {
    
    static final String RESOURCE_TYPE = "core-components-examples/components/demo/properties";
    
    @SlingObject
    private SlingHttpServletResponse response;
    
    @OSGiService
    private ModelFactory modelFactory;
    
    private Map<String, Object> properties;
    
    @PostConstruct
    public void init() throws ServletException, IOException {
        //go to "component" node under demo and grab the first node available.
        
        Resource component = getUnderlyingComponentResource();
        if (component != null) {
            properties = component.getValueMap();
        }
        
    }
    
    public Map<String,Object> getProperties() {
        return properties;
    }
    
    
    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
