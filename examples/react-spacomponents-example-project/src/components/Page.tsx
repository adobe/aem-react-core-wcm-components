/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react';
import {Page, withComponentMappingContext, PageProperties, ContainerState } from "@adobe/aem-react-editable-components";
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