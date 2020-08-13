
import * as React from 'react';
import CarouselV1 , {CarouselV1Properties} from "./CarouselV1";
import {mount} from "enzyme";
import ReactDOM from 'react-dom';

import ComponentMapping, {dummyItems} from "../../TestComponentMapping";
import {ModelManager} from "@adobe/cq-spa-page-model-manager"
import {AllowedComponents, AllowedComponent } from "@adobe/cq-react-editable-components"

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
    cqPath: "/content/accordion-path",
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

it('Renders a basic carousel properly and reacts on clicks', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    let dummyComp;

    dummyComp = wrapper.find(".dummyCmp");

    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual("Some Text");
    expect(wrapper.find(".cmp-carousel__item--active").text()).toEqual("Some Text");
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
    wrapper.update();


    dummyComp = wrapper.find(".dummyCmp");

    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual("Some Other Text");

    prevButton.simulate("click");

    dummyComp = wrapper.find(".dummyCmp");

    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual("Some Text");



});




it('Automatically slides forward', (done) => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    setTimeout(()=> {
        wrapper.update();
        const dummyComp = wrapper.find(".dummyCmp");
        expect(dummyComp).toHaveLength(1);
        expect(dummyComp.text()).toEqual("Some Other Text");
        done();
    },1000);

});

it('Does NOT Automatically slide forward if we turn it off', (done) => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} autoplay={false} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    const pauseButton = wrapper.find(".cmp-carousel__action--pause");

    expect(pauseButton).toHaveLength(0);

    setTimeout(()=> {
        wrapper.update();
        const dummyComp = wrapper.find(".dummyCmp");
        expect(dummyComp).toHaveLength(1);
        expect(dummyComp.text()).toEqual("Some Text");
        done();
    },1000);

});

it('Does NOT Automatically slide forward if we click pause, and resumes if we click resume', (done) => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    const pauseButton = wrapper.find(".cmp-carousel__action--pause");

    pauseButton.simulate("click");

    setTimeout(()=> {
        wrapper.update();
        let dummyComp = wrapper.find(".dummyCmp");
        expect(dummyComp).toHaveLength(1);
        expect(dummyComp.text()).toEqual("Some Text");

        const resumeButton = wrapper.find(".cmp-carousel__action--play");

        resumeButton.simulate("click");
        setTimeout( ()=> {
            wrapper.update();
            dummyComp = wrapper.find(".dummyCmp");
            expect(dummyComp).toHaveLength(1);
            expect(dummyComp.text()).toEqual("Some Other Text");
            done();
        }, 500);


    },500);

});


it('Temporary stops sliding if we hover over it, and resume once we hover out.', (done) => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    //trigger hover in
    content.simulate('mouseenter');

    setTimeout(()=> {
        wrapper.update();
        let dummyComp = wrapper.find(".dummyCmp");
        expect(dummyComp).toHaveLength(1);
        expect(dummyComp.text()).toEqual("Some Text");

        //trigger hover out
        content.simulate('mouseleave');

        setTimeout(() => {

            wrapper.update();
            dummyComp = wrapper.find(".dummyCmp");
            expect(dummyComp.text()).toEqual("Some Other Text");
            done();
        }, 1000);

    },1000);

});


it('Does not temporarily stop sliding if I hover over it, if we disabled autopause', (done) => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} autopauseDisabled={true}  componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    //trigger hover in
    content.simulate('mouseenter');

    setTimeout(()=> {
        wrapper.update();
        let dummyComp = wrapper.find(".dummyCmp");
        expect(dummyComp).toHaveLength(1);
        expect(dummyComp.text()).toEqual("Some Other Text");

        done();

    },1000);

});


it('Renders a basic carousel without autoplay', () => {

    // const Wrapped = withComponentMappingContext(AccordionV1);
    const wrapper = mount(<CarouselV1  {...defaultProps} autoplay={false} componentMapping={ComponentMapping}/>);
    const content = wrapper.find('.cmp-carousel__content');

    expect(content).toHaveLength(1);

    const dummyComp = wrapper.find(".dummyCmp");

    expect(dummyComp).toHaveLength(1);
    expect(dummyComp.text()).toEqual("Some Text");
    expect(wrapper.find(".cmp-carousel__item--active").text()).toEqual("Some Text");
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