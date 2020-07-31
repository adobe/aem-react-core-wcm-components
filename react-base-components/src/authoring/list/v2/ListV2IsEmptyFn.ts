import {ListV2Model} from "./ListV2";

export function ListV2IsEmptyFn(props:ListV2Model): boolean{
    return props.items == null || props.items.length === 0;
}