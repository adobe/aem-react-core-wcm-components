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
