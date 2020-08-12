import {TitleV2Model} from "./TitleV2";

export function TitleV2IsEmptyFn(props:TitleV2Model): boolean{
    return props.text == null || props.text.trim().length === 0;
}