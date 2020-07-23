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

import {ButtonV1, ButtonV1Model} from './ButtonV1';
import { MemoryRouter } from 'react-router-dom';


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
       <ButtonV1 />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders a proper button with link', () => {

    let captured:boolean = false;

    const properties:ButtonV1Model = {
        isInEditor: false,
        ariaLabel: "ThisIsAButton",
        hidePlaceHolder: false,
        icon: "iconCSSCls",
        link: "/content/some/link.html",
        text: "SomeText",
        routed:true,
        handleOnClick(event): void {
            captured = true;
        }
    };

    const wrapper = mount(<MemoryRouter><ButtonV1  {...properties} /></MemoryRouter>);

    const button = wrapper.find('a.cmp-button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(captured).toEqual(true);

    const anchor = button.find("a");
    expect(anchor).toHaveLength(1);
    expect(anchor.prop("aria-label")).toEqual("ThisIsAButton");
    expect(anchor.prop("href")).toEqual("/content/some/link.html");

    const iconSpan = anchor.find("span.cmp-button__icon.cmp-button__icon--iconCSSCls");
    expect(iconSpan).toHaveLength(1);

    const textSpan = anchor.find("span.cmp-button__text");
    expect(textSpan.text()).toEqual("SomeText");
});


it('Renders a proper button with link', () => {

    let captured:boolean = false;

    const properties:ButtonV1Model = {
        isInEditor: false,
        ariaLabel: "ThisIsAButton",
        hidePlaceHolder: false,
        icon: "iconCSSCls",
        text: "SomeText",
        handleOnClick(event): void {
            captured = true;
        }
    };

    const wrapper = mount(<ButtonV1  {...properties} />);

    const button = wrapper.find('.cmp-button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(captured).toEqual(true);

    const anchor = button.find("a");
    expect(anchor).toHaveLength(0);


    const iconSpan = button.find("span.cmp-button__icon.cmp-button__icon--iconCSSCls");
    expect(iconSpan).toHaveLength(1);

    const textSpan = button.find("span.cmp-button__text");
    expect(textSpan.text()).toEqual("SomeText");
});