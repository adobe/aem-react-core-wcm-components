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
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.injectorspecific.Self;

import java.util.Iterator;

public abstract class AbstractDemoComponent implements ComponentExporter {
    
    
    @Self
    protected SlingHttpServletRequest request;
    
    protected Resource getUnderlyingComponentResource(){
        //go to "component" node under demo and grab the first node available.
        final Resource info = request.getResource().getParent();
    
        if(info != null){
            final Resource demo = info.getParent();
        
            if(demo != null){
                final Resource component = demo.getChild("component");
                
                if(component != null){
                    final Iterator<Resource> resourceIterator = component.listChildren();
                    
                    if(resourceIterator.hasNext()){
                        return resourceIterator.next();
                    }
               
                }
            }
        }
        return null;
    }
}
