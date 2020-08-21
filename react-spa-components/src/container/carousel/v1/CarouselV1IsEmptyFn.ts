import {CoreContainerProperties} from "../../../AbstractCoreContainerComponent";
import { CarouselV1Properties } from "./CarouselV1";

export function CarouselV1IsEmptyFn(props:CarouselV1Properties){
    return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
}