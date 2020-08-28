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
import CarouselV1 , {CarouselV1Properties} from "./CarouselV1";
import {mount, ReactWrapper} from "enzyme";
import ReactDOM from 'react-dom';

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {ModelManager} from "@adobe/aem-spa-page-model-manager"
import {AllowedComponents, AllowedComponent } from "@adobe/aem-react-editable-components"

const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};


const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};
const defaultProps:CarouselV1Properties = {
    accessibilityLabel: 'Carousel',
    accessibility: {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide %{0}',
        indicators: 'Choose a slide to display'
    },
    autopauseDisabled: false,
    autoplay: true,
    delay: 100,
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/carousel-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <CarouselV1 {...defaultProps} />,
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

const validateComponentPresent = (wrapper:ReactWrapper, text:string) =>{

    wrapper.update();
    const dummyComp = wrapper.find(".dummyCmp");
    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual(text);
};


it('Renders a basic carousel properly and reacts on clicks', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    validateComponentPresent(wrapper, "Component1");

    expect(wrapper.find(".cmp-carousel__item--active").text()).toEqual("Component1");
    expect(wrapper.find(".cmp-carousel__item").first().prop("aria-label")).toEqual("Slide 1 of 2");
    expect(wrapper.find(".cmp-carousel__item").last().prop("aria-label")).toEqual("Slide 2 of 2");

    expect(wrapper.find(".cmp-carousel__action")).toHaveLength(4);

    const pauseButton = wrapper.find(".cmp-carousel__action--pause");
    expect(pauseButton.prop("aria-label")).toEqual("Pause");

    const playButton = wrapper.find(".cmp-carousel__action--play");
    expect(playButton.prop("aria-label")).toEqual("Play");

    const prevButton = wrapper.find(".cmp-carousel__action--previous");
    const nextButton = wrapper.find(".cmp-carousel__action--next");
    expect(nextButton).toHaveLength(1);
    nextButton.simulate('click');

    validateComponentPresent(wrapper, "Component2");

    prevButton.simulate("click");

    validateComponentPresent(wrapper, "Component1");

    const indicator1 = wrapper.find(".cmp-carousel__indicators li").first();
    const indicator2 = wrapper.find(".cmp-carousel__indicators li").last();

    indicator2.simulate('click');

    validateComponentPresent(wrapper, "Component2");

    indicator1.simulate('click');

    validateComponentPresent(wrapper, "Component1");

});


it('Changes when you switch slide in author mode', () => {

    const wrapper = mount(<CarouselV1  {...defaultProps}  componentMapping={ComponentMapping}/>);
    const accordionRoot = wrapper.find('.cmp-carousel');

    expect(accordionRoot).toHaveLength(1);

    //@ts-ignore
    window.Granite.author.trigger("/content/carousel-path", 1);

    validateComponentPresent(wrapper,"Component2");
    //@ts-ignore
    window.Granite.author.trigger("/content/carousel-path", 0);
    validateComponentPresent(wrapper,"Component1");
});


it('Automatically slides forward', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);
    validateComponentPresent(wrapper, "Component1");

    jest.advanceTimersByTime(150);

    validateComponentPresent(wrapper, "Component2");

});

it('Does NOT Automatically slide forward if we turn it off', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} autoplay={false} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    const pauseButton = wrapper.find(".cmp-carousel__action--pause");

    expect(pauseButton).toHaveLength(0);

    jest.advanceTimersByTime(150);

    validateComponentPresent(wrapper, "Component1");

});

it('Does NOT Automatically slide forward if we click pause, and resumes if we click resume', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    const pauseButton = wrapper.find(".cmp-carousel__action--pause");

    pauseButton.simulate("click");

    validateComponentPresent(wrapper, "Component1");

    jest.advanceTimersByTime(150);

    validateComponentPresent(wrapper, "Component1");

    const resumeButton = wrapper.find(".cmp-carousel__action--play");

    resumeButton.simulate("click");
    jest.advanceTimersByTime(150);
    resumeButton.simulate("click");

});


it('Temporary stops sliding if we hover over it, and resume once we hover out.', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    //trigger hover in
    content.simulate('mouseenter');

    jest.advanceTimersByTime(150);

    validateComponentPresent(wrapper, "Component1");

    //trigger hover out
    content.simulate('mouseleave');
    jest.advanceTimersByTime(150);

    validateComponentPresent(wrapper, "Component2");


});


it('Does not temporarily stop sliding if I hover over it, if we disabled autopause', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} autopauseDisabled={true} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    //trigger hover in
    content.simulate('mouseenter');

    validateComponentPresent(wrapper, "Component1");

    jest.advanceTimersByTime(150);

    validateComponentPresent(wrapper, "Component2");

});


it('Renders a basic carousel without autoplay', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} autoplay={false} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    validateComponentPresent(wrapper, "Component1");

    expect(wrapper.find(".cmp-carousel__item--active").text()).toEqual("Component1");
    expect(wrapper.find(".cmp-carousel__item").first().prop("aria-label")).toEqual("Slide 1 of 2");
    expect(wrapper.find(".cmp-carousel__item").last().prop("aria-label")).toEqual("Slide 2 of 2");

    expect(wrapper.find(".cmp-carousel__action")).toHaveLength(2);


});

it('Renders out all slides in author mode with hidden CSS', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} isInEditor={true} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    const dummyComp = wrapper.find(".dummyCmp");

    expect(dummyComp).toHaveLength(2);

});
