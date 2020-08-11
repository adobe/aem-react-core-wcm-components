import {CoreContainerProperties} from "../../../AbstractCoreContainerComponent";
import { AccordionV1V1Properties } from "./AccordionV1";

export function AccordionV1IsEmptyFn(props:AccordionV1V1Properties){
    return props.cqItems == null || props.cqItems.length === 0;
}