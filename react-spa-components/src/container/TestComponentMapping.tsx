import React, {Component} from "react";


import {EditConfig, MappedComponentProperties, ComponentMapping, MapTo} from "@adobe/cq-react-editable-components";
import {Model} from "@adobe/cq-spa-page-model-manager";


export interface DummyProperties extends MappedComponentProperties{
    value: string;
}

export const dummyItems:{ [key: string]: Model } = {
    "test": {
        ":type": "core/components/dummy",
        "cq:panelTitle": "Item1",
        "value": "Component1",

    },
    "test2": {
        ":type": "core/components/dummy",
        "cq:panelTitle": "Item2",
        "value": "Component2"
    }
};

class DummyCoreComponent extends Component<DummyProperties> {
    render(){
        return <div className={"dummyCmp"}>{this.props.value}</div>
    }
}

const editConfig:EditConfig<DummyProperties> = {
    isEmpty: (props: DummyProperties) => !!props.value && props.value.trim().length > 0
};

MapTo<DummyProperties>("core/components/dummy")(DummyCoreComponent, editConfig);

export default ComponentMapping;