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

import React, {MouseEvent} from 'react';
import {withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {RoutedCoreComponentModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {ButtonV1IsEmptyFn} from "./ButtonV1IsEmptyFn";


export interface ButtonV1Model extends RoutedCoreComponentModel{
    text?: string;
    link?: string;
    icon?: string;
    ariaLabel?: string;
    handleOnClick?(event: MouseEvent): void
}

export const ButtonV1Content = (props:ButtonV1Model) => {
    return (
        <>
            { props.icon && <span className={`${props.baseCssClass}__icon ${props.baseCssClass}__icon--${props.icon}`}></span>  }
            <span className={props.baseCssClass + '__text'}>{props.text}</span>
        </>
    );
};

const ButtonV1Impl = (props:ButtonV1Model) => {

    const handleOnClick = (event:MouseEvent) =>{
        if(props.handleOnClick){
            props.handleOnClick(event);
        }
    };

    const generateAttributes = (isLink: boolean) => {
        const computedAttrs: any = {
            className: props.baseCssClass,
            onClick: handleOnClick
        };

        if (isLink) {
            computedAttrs['aria-label'] = props.ariaLabel;
            computedAttrs['href'] = props.link;
        }
        return computedAttrs;
    };

    const isLink =  (!!props.link);
    const attrs = generateAttributes(isLink);

    if(isLink){
        return <RoutedLink isRouted={attrs.routed} to={attrs.link} {...attrs}><ButtonV1Content {...props}/></RoutedLink>
    }else{
        return <button {...attrs}><ButtonV1Content {...props}/></button>
    }
};

const ButtonV1 = (props:ButtonV1Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(ButtonV1Impl,"cmp-button"), ButtonV1IsEmptyFn, "Button V1");
    return <Wrapped {...props}/>
};

export default ButtonV1;