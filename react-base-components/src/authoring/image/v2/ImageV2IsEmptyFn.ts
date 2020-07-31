import {TempImageComponentModel} from "./ImageV2";

export function ImageV2IsEmptyFn(props:TempImageComponentModel) {
    return (!props.src) || props.src.length === 0;
}
