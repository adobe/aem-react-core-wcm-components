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
import {withConditionalPlaceHolder} from "../../../AbstractCoreComponent";
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



class ButtonV1Impl extends React.Component<ButtonV1Model> {

    constructor(props:ButtonV1Model) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event:MouseEvent){
        if(this.props.handleOnClick){
            this.props.handleOnClick(event);
        }
    }
    getContent(){
        return (
            <>
                { this.props.icon && <span className={`${this.props.baseCssClass}__icon ${this.props.baseCssClass}__icon--${this.props.icon}`}></span>  }
                <span className={this.props.baseCssClass + '__text'}>{this.props.text}</span>
            </>
        );
    }

    render(){

        const isLink =  (!!this.props.link);
        let props = this.generateAttributes(isLink);

        if(isLink){
            return <RoutedLink isRouted={this.props.routed} to={this.props.link} {...props} children={this.getContent()} />
        }else{
            return <button {...props}>{this.getContent()}</button>
        }
    }

    generateAttributes(isLink: boolean) {
        let props: any = {
            className: this.props.baseCssClass,
            onClick: this.handleOnClick
        };

        if (isLink) {
            props['aria-label'] = this.props.ariaLabel;
            props['href'] = this.props.link;
        }
        return props;
    }
};


const ButtonV1 = (props:ButtonV1Model) => {
    const Wrapped = withConditionalPlaceHolder(ButtonV1Impl, ButtonV1IsEmptyFn, "cmp-button", "Button V1")
    return <Wrapped {...props}/>
};

export default ButtonV1;