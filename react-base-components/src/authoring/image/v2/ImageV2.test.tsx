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

import ImageV2, {ImageV2Model} from "./ImageV2";
import {ImageV2IsEmptyFn} from "./ImageV2IsEmptyFn";

it('Has a proper isEmpty function', () => {

    const props1:ImageV2Model = {
        src: "/content/dam/image.jpg",
        alt: "Some Image"
    };

    expect(ImageV2IsEmptyFn(props1)).toEqual(false);

    const props2:ImageV2Model = {
        src: " ",
        alt: "Some Image"
    };

    expect(ImageV2IsEmptyFn(props2)).toEqual(true);

});

it('Renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <ImageV2 src={"/content/dam/image.jpg"} alt={"Some Image"} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Renders with a cq-dd-image in edit mode', () => {

    //let captured = false;
    const props:ImageV2Model = {
        src: "/content/dam/image.jpg",
        alt: "Some Image",
        isInEditor: true
    };

    const image = mount(<ImageV2 {...props}/>);

    expect(image.find(".cq-dd-image")).toHaveLength(1);

    expect(image).toBeDefined();
});


it('Renders without link', () => {

    //let captured = false;
    const props:ImageV2Model = {
        src: "/content/dam/image.jpg",
        alt: "Some Image"
    };

    const image = mount(<ImageV2 {...props}/>);

    expect(image).toBeDefined();

    const anchor = image.find("a");

    expect(anchor).toHaveLength(0);

    const title = image.find(".cmp-image__title");

    expect(title).toHaveLength(0);

    const img = image.find("img");


    expect(img.prop("alt")).toEqual(props.alt);
    expect(img.prop("src")).toEqual(props.src);


});

it('Renders with title', () => {

    //let captured = false;
    const props:ImageV2Model = {
        src: "/content/dam/image.jpg",
        alt: "Some Image",
        title: "Awesome Title!"
    };

    const image = mount(<ImageV2 {...props}/>);

    const title = image.find(".cmp-image__title");

    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(props.title);


});


