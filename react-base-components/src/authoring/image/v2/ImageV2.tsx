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

import React, {Component} from 'react';
import {withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {RoutedCoreComponentModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {ImageV2IsEmptyFn} from "./ImageV2IsEmptyFn";


export interface ImageV2Model extends RoutedCoreComponentModel{
    src: string
    alt: string
    displayPopupTitle?: boolean
    title?: string
    link?: string
}

const ImageV2InnerContents = (props:ImageV2Model) => {
    return (
        <>
            <img src={props.src}
                 className={props.baseCssClass + '__image'}
                 alt={props.alt}/>
            {
                !!(props.title) && <span className={props.baseCssClass + '__title'} itemProp="caption">{props.title}</span>
            }
            {
                props.displayPopupTitle && (!!props.title) && <meta itemProp="caption" content={props.title}/>
            }
        </>
    );
};

const ImageV2Contents = (props:ImageV2Model) => {
    if( props.link && props.link.trim().length > 0){
        return (
            <RoutedLink className={props.baseCssClass + '__link'} isRouted={props.routed} to={props.link}>
                <ImageV2InnerContents {...props}/>
            </RoutedLink>
        )
    }
    return <ImageV2InnerContents {...props}/>
};

const ImageV2Impl = (props:ImageV2Model) => {

    const {isInEditor = false} = props;
    const cssClassName = (isInEditor) ? props.baseCssClass + ' cq-dd-image' : props.baseCssClass;

     return (
         <div className={cssClassName}>
             <ImageV2Contents {...props}/>
         </div>
     )

};

const ImageV2 = (props:ImageV2Model) => {

    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(ImageV2Impl, "cmp-image"), ImageV2IsEmptyFn, "Image V2");
    return <Wrapped {...props}/>
};

export default ImageV2;