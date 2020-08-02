package com.adobe.cq.wcm.core.examples.react.components.models.impl.demo;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.factory.ModelFactory;

import javax.annotation.Nonnull;
import javax.annotation.PostConstruct;
import javax.servlet.ServletException;
import java.io.IOException;

/**
 * WHAT IS IT ???
 * <p>
 * WHAT PURPOSE THAT IT HAS ???
 * </p>
 *
 * @author raaijmak@adobe.com
 * @since 2020-08-02
 */
@Model(adaptables = SlingHttpServletRequest.class, resourceType = DemoJsonExporterImpl.RESOURCE_TYPE, adapters = {ComponentExporter.class})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DemoJsonExporterImpl extends AbstractDemoComponent {
    
    static final String RESOURCE_TYPE = "core-components-examples/components/demo/json";
    
    @SlingObject
    private SlingHttpServletResponse response;
    
    @OSGiService
    private ModelFactory modelFactory;
    
    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    private String json;
    
    
    @PostConstruct
    public void init() throws ServletException, IOException {
    
        Resource component = getUnderlyingComponentResource();
        if (component != null) {
            ComponentExporter exporter = modelFactory.getModelFromWrappedRequest(request, component, ComponentExporter.class);
            json = OBJECT_MAPPER.writeValueAsString(exporter);
        }
        
    }
    
    public String getJson() {
        return json;
    }
    
    
    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
