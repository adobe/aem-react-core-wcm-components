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

import React, { MouseEvent, Component } from 'react';
import {ButtonV1Model} from "@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1";
// @ts-ignore
import { createCustomElement, DOMModel, byChildContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";
import MetaUtils from '../../utils/MetaUtils';
import withAsyncImport from "../../utils/withAsyncImport";



class ButtonModel extends DOMModel implements ButtonV1Model{
    @byAttrVal text?: string;
    @byAttrVal link?: string;
    @byAttrVal icon?: string;
    isInEditor = MetaUtils.isInEditor();
    hidePlaceHolder = false;
}

class ReactButton extends Component<ButtonModel> {

    handleOnClick(event:MouseEvent){
        console.log("event", event);
    }

    render() {
        const ButtonV1 = withAsyncImport(() => import(/* webpackChunkName: "ButtonV1" */ '@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1'));

        return (

            <ButtonV1 {...this.props}
                handleOnClick={this.handleOnClick}
            />
        )
    }
}
const ButtonCustomElement = createCustomElement(ReactButton, ButtonModel, "element");
// @ts-ignore
window.customElements.define("core-button", ButtonCustomElement);