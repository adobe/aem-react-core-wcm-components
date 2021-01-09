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
import {ComponentType} from 'react';

import {EditorPlaceHolder} from "./common/placeholder";

export interface HasBaseCssClass {
    baseCssClass?: string
}

export interface CoreComponentModel extends HasBaseCssClass{
    hidePlaceHolder?: boolean
    isInEditor?:boolean
    dataLayer?: {[key: string]: {[key: string]: string}}
    id?: string
}

export interface CoreComponentState {

}

export const generateContainerAttributes =  <M extends CoreComponentModel> (props:M, attributes = {}):any => {
    return {
        className: props.baseCssClass,
        id: props.id,
        "data-cmp-data-layer": generateDataLayerAttribute(props),
        ...attributes
    };
};

export const generateDataLayerAttribute = <M extends CoreComponentModel> (props:M):string|null => {
    if(!!props.dataLayer){
        return JSON.stringify(props.dataLayer);
    }
    return null;
};

export const withStandardBaseCssClass = <M extends CoreComponentModel>
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

export const withConditionalPlaceHolder = <M extends CoreComponentModel>
            (
                Component:ComponentType<M>, 
                isEmpty:(props:M) => boolean,
                componentTitle?:string, emptyText?:string
            ):React.ComponentType<M>  => {
    return (props:M) => {

        const isEmptyResult:boolean = isEmpty(props);
        const {hidePlaceHolder = false, isInEditor = false} = props;

        return (
            <>
                { !isEmptyResult &&
                <Component {...props} />
                }
                {
                    (isEmptyResult && isInEditor && !hidePlaceHolder) &&
                    <EditorPlaceHolder
                        emptyTextAppend={emptyText}
                        componentTitle={componentTitle}
                    />
                }
            </>
        );
    }
};