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

import fs from 'fs';
import path from 'path';

const loadFormattedHtml = (relativePath:string) => {
    const expectedRoutedList = fs.readFileSync(path.resolve(__dirname, relativePath), 'utf8');
    return expectedRoutedList.replace(/(\r\n|\n|\r)/gm,"").replace(/>\s+|\s+</g, function(m) {
        return m.trim();
    });

}

const expectedRoutedList = loadFormattedHtml('expected-routed-list.html');
const expectedList = loadFormattedHtml('expected-list.html');



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
    expect(wrapper.html()).toEqual(expectedList);

});



it('Renders with routing from the items', () => {

    const wrapper = mount(<MemoryRouter><ListV2  {...dummyPropsWithRoutedItems} /></MemoryRouter>);
    expect(wrapper.html()).toEqual(expectedRoutedList);

});
