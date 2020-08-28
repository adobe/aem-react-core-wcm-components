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
import AccordionV1, {AccordionV1Properties} from "./AccordionV1";
import {mount, ReactWrapper} from "enzyme";
import ReactDOM from 'react-dom';

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {ModelManager} from "@adobe/aem-spa-page-model-manager"
import {AllowedComponents, AllowedComponent, withModel} from "@adobe/aem-react-editable-components"

const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};

const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};
const defaultProps:AccordionV1Properties = {
    expandedItems: ["test"],
    headingElement: "h2",
    singleExpansion: false,
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AccordionV1 {...defaultProps} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


let AddListenerSpy,RemoveListener,GetDataSpy: jest.SpyInstance;

const validateComponentPresent = (wrapper:ReactWrapper, text:string) =>{
    wrapper.update();
    const dummyComp = wrapper.find(".dummyCmp");
    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual(text);
};


beforeEach(() => {
    AddListenerSpy = jest.spyOn(ModelManager, 'addListener');
    RemoveListener = jest.spyOn(ModelManager, 'removeListener');
    GetDataSpy = jest.spyOn(ModelManager, 'getData');

    AddListenerSpy.mockReturnValue();
    RemoveListener.mockReturnValue();
    GetDataSpy.mockResolvedValue({});

});

it('Renders a basic accordion properly', () => {

    const wrapper = mount(<AccordionV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    validateComponentPresent(wrapper,"Component1");

});

it('Renders out all items in author mode with hidden CSS', () => {

    const wrapper = mount(<AccordionV1  {...defaultProps} isInEditor={true}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    const component = accordionRoot.find(".dummyCmp");
    expect(component).toHaveLength(2);

});

it('Changes item when you click - single expansion', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<AccordionV1  {...defaultProps} singleExpansion={true}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    validateComponentPresent(wrapper,"Component1");

    const button2 = wrapper.find(".cmp-accordion__item:last-child .cmp-accordion__button");

    button2.simulate("click");

    wrapper.update();
    button2.update();

    expect(button2.html()).toEqual("<button class=\"cmp-accordion__button cmp-accordion__button--expanded\"><span class=\"cmp-accordion__title\">Item2</span><span class=\"cmp-accordion__icon\"></span></button>");

    validateComponentPresent(wrapper,"Component2");


});

it('Changes when you switch tab in author mode', () => {

    const wrapper = mount(<AccordionV1  {...defaultProps} singleExpansion={true}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    //@ts-ignore
    window.Granite.author.trigger("/content/accordion-path", 1);

    validateComponentPresent(wrapper,"Component2");
    //@ts-ignore
    window.Granite.author.trigger("/content/accordion-path", 0);
    validateComponentPresent(wrapper,"Component1");
});

it('Changes item when you click - multi expansion', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<AccordionV1  {...defaultProps}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    validateComponentPresent(wrapper,"Component1");


    const headingElement = wrapper.find(".cmp-accordion__item:last-child .cmp-accordion__header");
    expect(headingElement.is("h2")).toEqual(true);

    const button2 = wrapper.find(".cmp-accordion__item:last-child .cmp-accordion__button");

    button2.simulate("click");

    wrapper.update();
    button2.update();

    expect(button2.html()).toEqual("<button class=\"cmp-accordion__button cmp-accordion__button--expanded\"><span class=\"cmp-accordion__title\">Item2</span><span class=\"cmp-accordion__icon\"></span></button>");

    const component = wrapper.find(".dummyCmp");

    expect(component).toHaveLength(2);

});