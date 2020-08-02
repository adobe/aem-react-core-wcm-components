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
