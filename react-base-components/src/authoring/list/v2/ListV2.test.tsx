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
import {mount} from 'enzyme';

import {dummyProps, dummyPropsWithDefaultRouting, dummyPropsWithRoutedItems} from "./ListV2TestMockItems";
import ListV2 from "./ListV2";
import {MemoryRouter} from 'react-router-dom';


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ListV2 {...dummyProps} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders a basic list properly', () => {

    const wrapper = mount(<ListV2  {...dummyProps} />);
    const ul = wrapper.find('ul');
    expect(ul).toHaveLength(1);
    const li = wrapper.find('li');
    expect(li).toHaveLength(13);

    const date = ul.find('li:first-child .cmp-list__item-date');
    expect(date).toHaveLength(1);

    const a = ul.find("a");
    expect(a).toHaveLength(13);


});



it('Renders with routing from the items', () => {

    const wrapper = mount(<MemoryRouter><ListV2  {...dummyPropsWithRoutedItems} /></MemoryRouter>);
    const ul = wrapper.find('ul');
    expect(ul).toHaveLength(1);
    const li = wrapper.find('li');
    expect(li).toHaveLength(13);

    const date = ul.find('li:first-child .cmp-list__item-date');
    expect(date).toHaveLength(1);

    const a = ul.find("a");
    expect(a).toHaveLength(13);


});


it('Renders with routing enabled on default', () => {

    const wrapper = mount(<MemoryRouter><ListV2  {...dummyPropsWithDefaultRouting} /></MemoryRouter>);
    const ul = wrapper.find('ul');
    expect(ul).toHaveLength(1);
    const li = wrapper.find('li');
    expect(li).toHaveLength(13);

    const date = ul.find('li:first-child .cmp-list__item-date');
    expect(date).toHaveLength(1);

    const a = ul.find("a");
    expect(a).toHaveLength(13);


});