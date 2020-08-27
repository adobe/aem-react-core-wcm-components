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

import * as React from 'react';
import ContainerV1 , {ContainerV1Properties} from "./ContainerV1";
import {mount} from "enzyme";
import ReactDOM from 'react-dom';

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {ModelManager} from "@adobe/aem-spa-page-model-manager"
import {AllowedComponents, AllowedComponent} from "@adobe/aem-react-editable-components"

const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};

const GRID_CLASS_NAMES = 'grid-class-names';
const COLUMN_1_CLASS_NAMES = 'column-class-names-1';
const COLUMN_2_CLASS_NAMES = 'column-class-names-2';

const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};


const defaultProps:ContainerV1Properties = {
    id: "myid",
    title: "The Container",
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    layout: 'responsiveGrid',
    backgroundStyle: "background-color:red",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    columnClassNames: {
        'test': COLUMN_1_CLASS_NAMES,
        'test2': COLUMN_2_CLASS_NAMES
    },
    gridClassNames: GRID_CLASS_NAMES,
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};



it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ContainerV1 {...defaultProps} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


let AddListenerSpy,RemoveListener,GetDataSpy: jest.SpyInstance;

beforeEach(() => {
    AddListenerSpy = jest.spyOn(ModelManager, 'addListener');
    RemoveListener = jest.spyOn(ModelManager, 'removeListener');
    GetDataSpy = jest.spyOn(ModelManager, 'getData');

    AddListenerSpy.mockReturnValue();
    RemoveListener.mockReturnValue();
    GetDataSpy.mockResolvedValue({});

});

it('Renders a responsive grid properly', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<ContainerV1  {...defaultProps} componentMapping={ComponentMapping}/>);


    const container = wrapper.find(".cmp-container");


    //@ts-ignore
    const containerStyle = wrapper.find(".cmp-container").get(0).ref.current.getAttribute("style");

    expect(containerStyle).toEqual("background-color:red");

    const column1 = container.find("." + COLUMN_1_CLASS_NAMES);
    expect(column1).toHaveLength(1);
    expect(column1.find(".dummyCmp").text()).toEqual("Component1")

    const column2 = container.find("." + COLUMN_2_CLASS_NAMES);
    expect(column2).toHaveLength(1);
    expect(column2.find(".dummyCmp").text()).toEqual("Component2")



});



it('Renders a basic container properly', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<ContainerV1  {...defaultProps}  layout={"simple"} componentMapping={ComponentMapping}/>);

    const container = wrapper.find(".cmp-container");


    //@ts-ignore
    const containerStyle = wrapper.find(".cmp-container").get(0).ref.current.getAttribute("style");

    expect(containerStyle).toEqual("background-color:red");

    const column1 = container.find("." + COLUMN_1_CLASS_NAMES);
    expect(column1).toHaveLength(0);

    const column2 = container.find("." + COLUMN_2_CLASS_NAMES);
    expect(column2).toHaveLength(0);

    expect(container.find(".dummyCmp")).toHaveLength(2);



});