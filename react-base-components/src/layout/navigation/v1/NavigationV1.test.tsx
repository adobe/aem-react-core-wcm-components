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

import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';

import {items} from "./NavigationV1TestMockItems";
import {NavigationV1, NavigationV1Model} from "./NavigationV1";
import { MemoryRouter } from 'react-router-dom';


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NavigationV1 {...items} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders a basic navigation properly', () => {

    const properties:NavigationV1Model = {
        hidePlaceHolder: false,
        isInEditor: false,
        items: items
    };
    const wrapper = shallow(<NavigationV1  {...properties} />);
    const nav = wrapper.find('nav');

    expect(nav).toHaveLength(1);
});


it('Renders a basic navigation properly even with routing enabled', () => {

    const properties:NavigationV1Model = {
        hidePlaceHolder: false,
        isInEditor: false,
        items: items,
        routed: true
    };
    const wrapper = mount(<MemoryRouter><NavigationV1  {...properties} /></MemoryRouter>);
    const nav = wrapper.find('nav');

    expect(nav).toHaveLength(1);
});
