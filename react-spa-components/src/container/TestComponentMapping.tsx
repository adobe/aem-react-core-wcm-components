import React, {Component} from "react";


import {EditConfig, MappedComponentProperties, ComponentMapping, MapTo} from "@adobe/cq-react-editable-components";


export interface DummyProperties extends MappedComponentProperties{
    value: string;
}

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