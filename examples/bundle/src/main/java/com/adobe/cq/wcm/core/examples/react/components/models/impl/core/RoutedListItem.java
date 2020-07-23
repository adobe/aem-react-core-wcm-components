package com.adobe.cq.wcm.core.examples.react.components.models.impl.core;

import com.adobe.cq.wcm.core.components.models.ListItem;
import com.adobe.cq.wcm.core.examples.react.components.models.RoutedModel;
import com.adobe.cq.wcm.core.examples.react.components.utils.RouterUtil;
import lombok.experimental.Delegate;


public class RoutedListItem implements ListItem, RoutedModel {
    
    @Delegate(types = ListItem.class)
    private final ListItem delegate;
    
    public RoutedListItem(ListItem delegate){
        this.delegate = delegate;
    }
    
    @Override
    public boolean isRouted() {
       return RouterUtil.isUrlRouted(delegate.getPath());
    }
}
