
import * as React from 'react';
import AccordionV1, {AccordionV1Properties} from "./AccordionV1";
import {ReactDOM} from "react";
import {mount} from "enzyme";

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <AccordionV1 items={items} {...items} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders a basic navigation properly', () => {

    const properties:AccordionVcoo 1Properties = {

    };
    const wrapper = mount(<AccordionV1  {...properties} />);
    const nav = wrapper.find('nav');

    expect(nav).toHaveLength(1);
});