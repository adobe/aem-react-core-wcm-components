import {CoreContainerProperties} from "../../../AbstractCoreContainerComponent";
import { TabsV1Properties } from "./TabsV1";

export function TabsV1IsEmptyFn(props:TabsV1Properties){
    return props.cqItems == null || props.cqItems.length === 0;
}