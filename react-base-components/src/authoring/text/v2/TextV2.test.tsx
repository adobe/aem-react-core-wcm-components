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
import {shallow} from 'enzyme';

import {TextV2, TextV2Model, TextV2IsEmptyFn} from './TextV2';

it('Has a proper isEmpty function', () => {

    const props:TextV2Model = {
        isInEditor: false,
        hidePlaceHolder: false,
        text: 'test',
        richText: true
    };

    expect(TextV2IsEmptyFn(props)).toBe(false);

    const propsEmpty:TextV2Model = {
        isInEditor: false,
        hidePlaceHolder: false,
        richText: true,
        text: ''
    };

    expect(TextV2IsEmptyFn(propsEmpty)).toBe(true);
});

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TextV2  text={"someText"}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders plain text', () => {

    const element = shallow(<TextV2 text={'plain text'}/>);

    const p = element.find('.cmp-text__paragraph');
    expect(p.text()).toEqual("plain text");

});


it('Renders rich text', () => {

    const richText = '<div class="myclass">richtext</div>';
    const expectedHtml = '<div class="cmp-text"><div class="myclass">richtext</div></div>';
    const element = shallow(<TextV2 richText={true} text={richText}/>);

    const actualHtml = element.html();
    expect(actualHtml).toEqual(expectedHtml);

});