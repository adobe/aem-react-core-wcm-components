import {AccordionV1Properties} from "./AccordionV1";

export function AccordionV1IsEmptyFn(props:AccordionV1Properties){
    return props.cqItemsOrder == null || props.cqItemsOrder.length == 0;
}