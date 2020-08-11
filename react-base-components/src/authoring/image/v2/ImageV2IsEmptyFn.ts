import {ImageV2Model} from "./ImageV2";

export function ImageV2IsEmptyFn(props:ImageV2Model) {
    return (!props.src) || props.src.trim().length === 0;
}
