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
import TitleV2, {TitleV2Model} from "./TitleV2";

it('Renders without crashing', () => {
    const div = document.createElement('div');

    const props:TitleV2Model = {
        hidePlaceHolder: false,
        isInEditor: false,
        linkDisabled: false,
        text: 'Hello World'
    };

    ReactDOM.render(
        <TitleV2 {...props} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders without link', () => {

    const props:TitleV2Model = {
        hidePlaceHolder: false,
        isInEditor: false,
        linkDisabled: false,
        text: 'My awesome title'
    };

    const element = mount(<TitleV2 {...props}/>);

    const heading = element.find("h3");

    expect(heading).toHaveLength(1);

});

it('Renders a custom type without link', () => {

    const props:TitleV2Model = {
        hidePlaceHolder: false,
        isInEditor: false,
        linkDisabled: false,
        type: 'h2',
        text: 'My awesome title'
    };

    const element = mount(<TitleV2 {...props}/>);

    const heading = element.find("h2");

    expect(heading).toHaveLength(1);

});


it('Renders a custom type with a link', () => {

    const props:TitleV2Model = {
        hidePlaceHolder: false,
        isInEditor: false,
        linkDisabled: false,
        type: 'h2',
        text: 'My awesome title',
        linkURL: '/content/some/page.html'
    };

    const element = mount(<TitleV2 {...props}/>);

    const heading = element.find("h2");

    expect(heading).toHaveLength(1);

    const anchor = element.find("a.cmp-title__link");

    expect(anchor).toHaveLength(1);

});

