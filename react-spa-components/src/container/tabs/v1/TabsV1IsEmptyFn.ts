import {CoreContainerProperties} from "../../../AbstractCoreContainerComponent";
import { TabsV1Properties } from "./TabsV1";

export function TabsV1IsEmptyFn(props:TabsV1Properties){
    return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
}