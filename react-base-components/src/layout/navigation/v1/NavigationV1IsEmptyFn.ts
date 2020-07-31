import {NavigationV1Model} from "./NavigationV1";

export function NavigationV1IsEmptyFn(props:NavigationV1Model): boolean{
    return props.items == null || props.items.length === 0;
}