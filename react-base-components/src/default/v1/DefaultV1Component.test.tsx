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

import DefaultV1Component, {DefaultV1Model} from "./DefaultV1Component";
import {DefaultV1IsEmptyFn} from "./DefaultV1ComponentIsEmptyFn";

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DefaultV1Component html={"<h1>test</h1>"} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Has a proper isEmpty function', () => {

    const props1:DefaultV1Model = {
        html:"<h1>some content</h1>",
        isInEditor: false,
        hidePlaceHolder: false
    };

    expect(DefaultV1IsEmptyFn(props1)).toEqual(false);

    const props2:DefaultV1Model = {
        html:" ",
        isInEditor: false,
        hidePlaceHolder: false
    };

    expect(DefaultV1IsEmptyFn(props2)).toEqual(true);

});

it('Renders some proper HTML', () => {

    const props1:DefaultV1Model = {
        html:"<h1>some content</h1>",
        isInEditor: false,
        hidePlaceHolder: false
    };
    const element = mount(<DefaultV1Component {...props1} />);
    expect(element.html()).toEqual("<div class=\"cmp-default-wrapper\"><h1>some content</h1></div>");

});
