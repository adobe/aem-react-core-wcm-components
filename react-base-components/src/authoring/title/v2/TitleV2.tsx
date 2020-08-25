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
import {TitleV2IsEmptyFn} from "./TitleV2IsEmptyFn";

export interface TitleV2Model extends RoutedCoreComponentModel{
    text: string;
    linkURL?: string;
    linkDisabled: boolean;
    type?: string;
    nested?: boolean
}

const bemModifierPrefix = (props:TitleV2Model) => props.nested ? '-' : '__';

export const TitleV2Link = (props:TitleV2Model) => {
    return (
        <RoutedLink className={props.baseCssClass + bemModifierPrefix(props) +  'link'} isRouted={props.routed} to={props.linkURL}>
            {props.text}
        </RoutedLink>
    );
};

export const TitleV2Contents = (props:TitleV2Model) => {
    if( !props.linkDisabled){
        return <TitleV2Link {...props}/>
    }

    return <>{props.text}</>
};

const TitleV2Impl = (props:TitleV2Model) => {
    const elementType:string = (!!props.type) ? props.type.toString() : 'h3';
    return (
        <div className={props.baseCssClass}>
            {
                React.createElement(elementType,
                    {
                        className: props.baseCssClass + bemModifierPrefix(props) + 'text',
                    },
                    <TitleV2Contents {...props}/>
                )
            }

        </div>
    )
};

const TitleV2 = (props:TitleV2Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(TitleV2Impl, "cmp-title"), TitleV2IsEmptyFn, "TitleV2")
    return <Wrapped {...props}/>
};

export default TitleV2;