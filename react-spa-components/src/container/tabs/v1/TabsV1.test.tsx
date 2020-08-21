import * as React from 'react';
import TabsV1, {TabsV1Properties} from "./TabsV1";
import {mount, ReactWrapper} from "enzyme";
import ReactDOM from 'react-dom';

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {ModelManager} from "@adobe/cq-spa-page-model-manager"
import {AllowedComponent, AllowedComponents} from "@adobe/cq-react-editable-components"
import CarouselV1 from "../../carousel/v1/CarouselV1";

const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};


const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};


const defaultProps:TabsV1Properties = {
    accessibilityLabel: 'Tabs',
    title: "The Tabs",
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    isInEditor: false,
    cqPath: "/content/tabs-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};


let AddListenerSpy,RemoveListener,GetDataSpy: jest.SpyInstance;

beforeEach(() => {
    AddListenerSpy = jest.spyOn(ModelManager, 'addListener');
    RemoveListener = jest.spyOn(ModelManager, 'removeListener');
    GetDataSpy = jest.spyOn(ModelManager, 'getData');

    AddListenerSpy.mockReturnValue();
    RemoveListener.mockReturnValue();
    GetDataSpy.mockResolvedValue({});

});

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TabsV1 {...defaultProps} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

const validateComponentPresent = (wrapper:ReactWrapper, text:string) =>{

    wrapper.update();
    const dummyComp = wrapper.find(".dummyCmp");
    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual(text);
};


it('Renders tabs properly and changes on click events', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<TabsV1  {...defaultProps} componentMapping={ComponentMapping}/>);


    const container = wrapper.find(".cmp-tabs");

    expect(container).toHaveLength(1);

    validateComponentPresent(wrapper, "Component1");

    const anchors = wrapper.find(".cmp-tabs__tab");

    expect(anchors).toHaveLength(2);

    const tab1 = anchors.first();
    const tab2 = anchors.last();

    tab2.simulate("click");

    validateComponentPresent(wrapper, "Component2");

    tab1.simulate("click");

    validateComponentPresent(wrapper, "Component1");


});

it('Changes when you switch tabs in author mode', () => {

    const wrapper = mount(<TabsV1  {...defaultProps}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-tabs');

    expect(accordionRoot).toHaveLength(1);

    //@ts-ignore
    window.Granite.author.trigger("/content/tabs-path", 1);

    validateComponentPresent(wrapper,"Component2");
    //@ts-ignore
    window.Granite.author.trigger("/content/tabs-path", 0);
    validateComponentPresent(wrapper,"Component1");
});


const validateAuthorTabVisible = (wrapper:ReactWrapper, component : 'Component1' | 'Component2') =>{

    wrapper.update();

    const tabContents = wrapper.find(".cmp-tabs__author-tab-content");

    expect(tabContents).toHaveLength(2);

    const tabContent1 = tabContents.first();
    const tabContent2 = tabContents.last();

    if(component === 'Component1'){
        expect(tabContent1.prop("style")).toHaveProperty("display", "block");
        expect(tabContent2.prop("style")).toHaveProperty("display", "none");
    }else{
        expect(tabContent1.prop("style")).toHaveProperty("display", "none");
        expect(tabContent2.prop("style")).toHaveProperty("display", "block");
    }
};

it('Renders everything in author mode with display none on hidden tabs ', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<TabsV1  {...defaultProps} isInEditor={true} componentMapping={ComponentMapping}/>);


    const container = wrapper.find(".cmp-tabs");

    expect(container).toHaveLength(1);

    const anchors = wrapper.find(".cmp-tabs__tab");

    expect(anchors).toHaveLength(2);

    const tab1 = anchors.first();
    const tab2 = anchors.last();

    validateAuthorTabVisible(wrapper, 'Component1');

    tab2.simulate("click");

    validateAuthorTabVisible(wrapper, 'Component2');

    tab1.simulate("click");

    validateAuthorTabVisible(wrapper, 'Component1');


});

