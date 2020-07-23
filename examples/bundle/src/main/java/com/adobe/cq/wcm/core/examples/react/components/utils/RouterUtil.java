package com.adobe.cq.wcm.core.examples.react.components.utils;

import org.apache.commons.lang3.StringUtils;


public class RouterUtil {
    
    private RouterUtil() {
    }
    
    public static boolean isUrlRouted(String url){
        return StringUtils.isNotBlank(url) && url.startsWith("/content/aem-react-core-spacomponents-example");
    }
}
