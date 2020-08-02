package com.adobe.cq.wcm.core.examples.react.components.models.impl.demo;

import com.adobe.acs.commons.synth.Synthesizer;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.examples.react.components.models.impl.HierarchyPageImpl;
import com.day.cq.commons.feed.StringResponseWrapper;
import com.day.cq.wcm.api.components.IncludeOptions;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestDispatcherOptions;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceWrapper;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.factory.ModelFactory;

import javax.annotation.Nonnull;
import javax.annotation.PostConstruct;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import java.io.IOException;


@Model(adaptables = SlingHttpServletRequest.class, resourceType = DemoMarkupExporterImpl.RESOURCE_TYPE, adapters = {ComponentExporter.class})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DemoMarkupExporterImpl extends AbstractDemoComponent{
    
    static final String RESOURCE_TYPE = "core-components-examples/components/demo/markup";
    
    @SlingObject
    private SlingHttpServletResponse response;
    
    @OSGiService
    private ModelFactory modelFactory;
    
    private String markup;
    private static String NOT_SUPPORTED = "Container markup not supported due to technical limitations.";
    
    @PostConstruct
    public void init() throws ServletException, IOException {
        //go to "component" node under demo and grab the first node available.
    
        String flagPath = getFlagPath();
        
        if(request.getAttribute(flagPath) == null){
            Resource component = getUnderlyingComponentResource();
            if (component != null) {
    
                ContainerExporter exporter = modelFactory.getModelFromWrappedRequest(request, component, ContainerExporter.class);
    
                if(exporter == null || exporter.getExportedType().equals(HierarchyPageImpl.RESOURCE_TYPE)){
                    request.setAttribute(getFlagPath(), true);
                    markup = Synthesizer.render(component, request, response);
                }else{
                    markup = NOT_SUPPORTED;
                }
           
            }
        }
    }
    
    private String getFlagPath() {
        return "DemoMarkupExporterImplFLAG-" + request.getResource().getPath();
    }
    
    public String getMarkup(){
        return markup;
    }
    
    
    @Nonnull
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
