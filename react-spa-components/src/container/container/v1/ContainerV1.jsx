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

import React from "react";
import {Container, ResponsiveGrid, ComponentMapping} from '@adobe/cq-react-editable-components';

export function ContainerV1IsEmptyFn(props) {
    return props.cqItems == null || props.cqItems.length === 0;
}

export class ContainerV1 extends Container {

    mainDiv;

    constructor(props) {
        super(props);
        this.baseCssCls = 'cmp-container';
        this.state = {
            componentMapping: this.props.componentMapping || ComponentMapping,
        };
        this.mainDiv = React.createRef();
    }

    componentDidMount() {
        if (this.mainDiv.current) {
            this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
        }

    }

    componentDidUpdate() {
        if (this.mainDiv.current) {
            this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
        }
    }

    get coreContainerProps() {
        return {
            className: 'container responsivegrid'
        };
    }


    render() {
        return (
            <div {...this.coreContainerProps}>
                <div ref={this.mainDiv}
                     id={this.props.id}
                     className={this.baseCssCls}>

                    {(this.props.layout && this.props.layout === 'simple')  &&
                              <Container componentMapping={this.state.componentMapping} {...this.props} />}

                    {(!this.props.layout || this.props.layout !== 'simple') &&
                              <ResponsiveGrid componentMapping={this.state.componentMapping} {...this.props} />}

                </div>
            </div>
        )
    }

}