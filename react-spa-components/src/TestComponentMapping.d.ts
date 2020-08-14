import { MappedComponentProperties, ComponentMapping } from "@adobe/cq-react-editable-components";
import { Model } from "@adobe/cq-spa-page-model-manager";
import { CoreContainerItem } from "./src";
export interface DummyProperties extends MappedComponentProperties {
    value: string;
}
interface DummyItem extends Model, CoreContainerItem, CoreContainerItem {
    value: string;
}
export declare const dummyItems: {
    [key: string]: DummyItem;
};
export default ComponentMapping;
//# sourceMappingURL=TestComponentMapping.d.ts.map