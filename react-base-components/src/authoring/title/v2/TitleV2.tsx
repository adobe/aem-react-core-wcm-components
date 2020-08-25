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



class TitleV2Impl extends Component<TitleV2Model> {

    private get bemModifierPrefix(): string{
        return this.props.nested ? '-' : '__';
    }

    generateLink(){
        return (
            <RoutedLink className={this.props.baseCssClass + this.bemModifierPrefix +  'link'} isRouted={this.props.routed} to={this.props.linkURL}>
                {this.props.text}
            </RoutedLink>
        )
    }

    getContents(){

        if( !this.props.linkDisabled){
            return this.generateLink();
        }

        return (
            <>
                {this.props.text}
            </>
        )
    }

    render(){

        const elementType:string = (!!this.props.type) ? this.props.type.toString() : 'h3';
        return (
            <div className={this.props.baseCssClass}>
                {
                    React.createElement(elementType,
                        {
                            className: this.props.baseCssClass + this.bemModifierPrefix + 'text',
                        },
                        this.getContents()
                    )
                }

            </div>
        )
    }
}



const TitleV2 = (props:TitleV2Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(TitleV2Impl, "cmp-title"), TitleV2IsEmptyFn, "TitleV2")
    return <Wrapped {...props}/>
};

export default TitleV2;