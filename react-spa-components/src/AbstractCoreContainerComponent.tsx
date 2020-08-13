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

import * as React from 'react';

import {AllowedComponentsContainer, ContainerState, AllowedComponentsProperties} from '@adobe/cq-react-editable-components';
import {ComponentType} from "react";

export interface CoreContainerProperties extends AllowedComponentsProperties{
    baseCssClass?:string;
}

export interface CoreContainerItem {
    'cq:panelTitle': string
}

export interface CoreContainerState extends ContainerState {

}


export const withStandardBaseCssClass = <M extends CoreContainerProperties>
(
    Component:ComponentType<M>,
    defaultBaseCssClass:string
):React.ComponentType<M>  => {
    return (props:M) => {

        const baseCssClass = props.baseCssClass;
        const toBeUsedCssClass = baseCssClass && baseCssClass.trim().length > 0 ? baseCssClass : defaultBaseCssClass;

        const mergedProps: M= {
            ...props,
            baseCssClass: toBeUsedCssClass
        };

        return <Component {...mergedProps} />;
    }
};

export abstract class AbstractCoreContainerComponent<P extends CoreContainerProperties, S extends CoreContainerState> extends AllowedComponentsContainer<P,S>{

    baseCssCls:string;

    protected constructor(props:P, baseCssCls:string) {
        super(props);
        this.baseCssCls = baseCssCls;
    }

    get placeholderComponent() {

        if(!this.props.cqItemsOrder || this.props.cqItemsOrder.length === 0){
            return super.placeholderComponent;
        }else{
            return null;
        }
    }
}