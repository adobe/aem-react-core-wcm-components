import React, { MouseEvent, Component } from 'react';
import {ButtonV1, ButtonV1Model} from "@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1";
// @ts-ignore
import { createCustomElement, DOMModel, byChildContentVal, byAttrVal, registerEvent } from "@adobe/react-webcomponent";
import MetaUtils from '../../utils/MetaUtils';



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
        return (
            <ButtonV1 {...this.props}
                handleOnClick={this.handleOnClick}
            />
        )
    }
}
const ButtonCustomElement = createCustomElement(ReactButton, ButtonModel, "element");
window.customElements.define("core-button", ButtonCustomElement);