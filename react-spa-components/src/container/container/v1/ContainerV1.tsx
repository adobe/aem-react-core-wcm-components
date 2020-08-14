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

import React, {RefObject} from "react";

import { AllowedComponents, ResponsiveGrid,ResponsiveGridProperties, ComponentMapping, Container} from '@adobe/cq-react-editable-components';
import { CoreContainerProperties, CoreContainerState } from '../../../AbstractCoreContainerComponent';

export interface ContainerV1Properties extends CoreContainerProperties,ResponsiveGridProperties{
    backgroundStyle:string;
    id:string;
    layout?: 'responsiveGrid' | 'simple';
}


export default class ContainerV1<P extends ContainerV1Properties, S extends CoreContainerState> extends ResponsiveGrid<P,S> {

    mainDiv:RefObject<HTMLDivElement>;
    baseCssCls: string = 'cmp-container';

    constructor(props:P) {
        super(props);

        //@ts-ignore
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
         const {componentMapping,allowedComponents,children,cqPath,cqItems,cqItemsOrder,isInEditor, ...otherProps} = this.props;

         const gridProps:ResponsiveGridProperties = {
            allowedComponents: this.props.allowedComponents,
            gridClassNames: this.props.gridClassNames,
            columnClassNames:this.props.columnClassNames,
            cqItems:this.props.cqItems,
            cqItemsOrder:this.props.cqItemsOrder,
            title:"",
            cqPath: this.props.cqPath,
            isInEditor:false
         }
        return (
            <div {...this.coreContainerProps}>
                <div ref={this.mainDiv}
                     id={this.props.id}
                     className={this.baseCssCls}>

                    {(this.props.layout && this.props.layout === 'simple')  &&
                              <Container 
                                componentMapping={this.state.componentMapping}    
                                cqForceReload={this.props.cqForceReload}
                                cqPath={this.props.cqPath}
                                cqItems={this.props.cqItems}
                                cqItemsOrder={this.props.cqItemsOrder}
                                isInEditor={false}>
                                    {this.childComponents}
                                </Container>}

                    {(!this.props.layout || this.props.layout !== 'simple') &&
                                <ResponsiveGrid {...gridProps}></ResponsiveGrid>

                              }

                </div>
            </div>
        )
    }

}