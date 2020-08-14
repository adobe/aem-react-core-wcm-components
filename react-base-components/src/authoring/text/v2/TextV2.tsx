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
import {CoreComponentModel, withConditionalPlaceHolder} from "../../../AbstractCoreComponent";
import {TextV2IsEmptyFn} from "./TextV2IsEmptyFn";

export interface TextV2Model extends CoreComponentModel{
    text?: string;
    richText?: boolean
}


class TextV2Impl extends Component<TextV2Model> {

    public static defaultProps = {
        richText: false
    };

    renderRichText(){
        const text:string = this.props.text as string;
        return (
            <div className={this.props.baseCssClass} dangerouslySetInnerHTML={{__html: text}}></div>
        )
    }

    renderPlainText(){
        return (
            <div className={this.props.baseCssClass}>
                <p className="cmp-text__paragraph">{this.props.text}</p>
            </div>
        )
    }
    render(): JSX.Element {
        return (this.props.richText) ? this.renderRichText() : this.renderPlainText();
    }

}



const TextV2 = (props:TextV2Model) => {
    const Wrapped = withConditionalPlaceHolder(TextV2Impl, TextV2IsEmptyFn, "cmp-text", "Text V2")
    return <Wrapped {...props}/>
};

export default TextV2;