
import * as React from 'react';
import AccordionV1, {AccordionV1Properties} from "./AccordionV1";
import {mount} from "enzyme";
import ReactDOM from 'react-dom';

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {ModelManager} from "@adobe/cq-spa-page-model-manager"
import {AllowedComponents, AllowedComponent} from "@adobe/cq-react-editable-components"

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

beforeEach(() => {
    AddListenerSpy = jest.spyOn(ModelManager, 'addListener');
    RemoveListener = jest.spyOn(ModelManager, 'removeListener');
    GetDataSpy = jest.spyOn(ModelManager, 'getData');

    AddListenerSpy.mockReturnValue();
    RemoveListener.mockReturnValue();
    GetDataSpy.mockResolvedValue({});

});

it('Renders a basic accordion properly', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<AccordionV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    const component = accordionRoot.find(".dummyCmp");
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Component1")

});

it('Renders out all items in author mode with hidden CSS', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
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

    let component = wrapper.find(".dummyCmp");
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Component1");

    const button2 = wrapper.find(".cmp-accordion__item:last-child .cmp-accordion__button");

    button2.simulate("click");

    wrapper.update();
    button2.update();

    expect(button2.html()).toEqual("<button class=\"cmp-accordion__button cmp-accordion__button--expanded\"><span class=\"cmp-accordion__title\">Item2</span><span class=\"cmp-accordion__icon\"></span></button>");

    component = wrapper.find(".dummyCmp");

    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Component2");

});


it('Changes item when you click - multi expansion', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<AccordionV1  {...defaultProps}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-accordion');

    expect(accordionRoot).toHaveLength(1);

    let component = wrapper.find(".dummyCmp");
    expect(component).toHaveLength(1);
    expect(component.text()).toEqual("Component1");

    const headingElement = wrapper.find(".cmp-accordion__item:last-child .cmp-accordion__header");
    expect(headingElement.is("h2")).toEqual(true);

    const button2 = wrapper.find(".cmp-accordion__item:last-child .cmp-accordion__button");

    button2.simulate("click");

    wrapper.update();
    button2.update();

    expect(button2.html()).toEqual("<button class=\"cmp-accordion__button cmp-accordion__button--expanded\"><span class=\"cmp-accordion__title\">Item2</span><span class=\"cmp-accordion__icon\"></span></button>");

    component = wrapper.find(".dummyCmp");

    expect(component).toHaveLength(2);

});