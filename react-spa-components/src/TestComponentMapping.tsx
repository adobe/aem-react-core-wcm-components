/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React, {Component} from "react";


import {EditConfig, MappedComponentProperties, ComponentMapping, MapTo} from "@adobe/aem-react-editable-components";

import {CoreContainerItem} from "./AbstractCoreContainerComponent";


export interface DummyProperties extends MappedComponentProperties{
    value: string;
}


export const dummyItems:{ [key: string]: CoreContainerItem } = {
    "test": {
        ":type": "core/components/dummy",
        "cq:panelTitle": "Item1",
        //@ts-ignore
        "value": "Component1",
    },
    "test2": {
        ":type": "core/components/dummy",
        "cq:panelTitle": "Item2",
        //@ts-ignore
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