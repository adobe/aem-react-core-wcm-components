import {BreadCrumbV2Model} from "./BreadCrumbV2";

export function BreadCrumbV2IsEmptyFn(props:BreadCrumbV2Model): boolean{
    return props.items == null || props.items.length === 0;
}