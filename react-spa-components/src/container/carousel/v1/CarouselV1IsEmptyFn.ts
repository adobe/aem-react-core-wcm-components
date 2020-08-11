import {CoreContainerProperties} from "../../../AbstractCoreContainerComponent";
import { CarouselV1Properties } from "./CarouselV1";

export function CarouselV1IsEmptyFn(props:CarouselV1Properties){
    return props.cqItems == null || props.cqItems.length === 0;
}