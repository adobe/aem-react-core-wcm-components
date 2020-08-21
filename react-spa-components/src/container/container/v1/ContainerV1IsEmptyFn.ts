import {ContainerV1Properties} from "./ContainerV1";

export function ContainerV1IsEmptyFn(props:ContainerV1Properties) {
    return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
}
