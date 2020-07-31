import {TextV2Model} from "./TextV2";

export function TextV2IsEmptyFn(props:TextV2Model): boolean{
    return props.text == null || props.text.length === 0;
}