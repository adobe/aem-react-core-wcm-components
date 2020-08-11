import {CoreContainerProperties} from "../../../AbstractCoreContainerComponent";
import { ContainerV1Properties } from "./ContainerV1";

export function ContainerV1IsEmptyFn(props:ContainerV1Properties) {
    return props.cqItems == null || props.cqItems.length === 0;
}
