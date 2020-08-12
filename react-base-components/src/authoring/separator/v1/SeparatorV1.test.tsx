import ReactDOM from "react-dom";

import React from "react";
import SeparatorV1 from "./SeparatorV1";
import {mount} from "enzyme";

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <SeparatorV1 />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Renders as expected', ()=> {
    const element = mount(<SeparatorV1/>);

    const html = "<div class=\"cmp-separator\"><hr class=\"cmp-separator__horizontal-rule\"></div>";
    expect(element.html()).toEqual(html);
})
