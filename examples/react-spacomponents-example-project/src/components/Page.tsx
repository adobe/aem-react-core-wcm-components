import React from 'react';
import {Page, withComponentMappingContext, PageProperties, ContainerState } from "@adobe/cq-react-editable-components";
import withRoute from '../utils/RouteHelper';

import './Page.css';
// This component is a variant of a React Page component mapped to the "structure/page" resource type
// No functionality is changed other than to add an app specific CSS class
class ContribPage extends Page<PageProperties, ContainerState> {

    get containerProps() {
        // @ts-ignore
        let attrs = super.containerProps;
          // @ts-ignore
        attrs.className = (attrs.className || '') + ' ContribPage ' + (this.props.cssClassNames || '');
        return attrs
    }

}

export default withComponentMappingContext(withRoute(ContribPage));