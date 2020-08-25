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
import {Container,ContainerProperties,ContainerState} from '@adobe/cq-react-editable-components';

export interface DemoContainerProperties extends ContainerProperties{
    fullWidth: boolean
}

class Demo extends Container<DemoContainerProperties,ContainerState> {

    /**
     * The properties that will be injected in the root element of the container
     *
     * @returns {Object} - The map of properties to be added
     */
    get containerProps() {
        let attrs = super.containerProps;

        const cssClass = 'cmp-react-examples-demo__component cmp-react-examples-demo__component--width' +  (this.props.fullWidth ? 'Full': 'Auto');
        attrs['className'] = attrs['className'] + ' ' + cssClass;

        return attrs;
    }

    render(){

        return (
            <div className="cmp-react-examples-demo" data-cmp-react-examples-is="demo">
                <div className="cmp-react-examples-demo__top t-cmp-clean t-cmp-clean--light cmp-react-examples-demo__info--open">
                    {super.render()}
                </div>
            </div>
        )

    }

}

export default Demo;