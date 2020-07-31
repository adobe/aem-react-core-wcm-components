import {ButtonV1Model} from "./ButtonV1";

export function ButtonV1IsEmptyFn(props:ButtonV1Model): boolean{
    return props.text == null || props.text.length === 0;
}