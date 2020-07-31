import {LanguageNavigationV1Model} from "./LanguageNavigationV1";

export function LanguageNavigationV1IsEmptyFn(props:LanguageNavigationV1Model): boolean{
    return props.items == null || props.items.length === 0;
}
