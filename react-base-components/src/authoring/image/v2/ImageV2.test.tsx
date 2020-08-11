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
import { createMemoryHistory, MemoryHistory } from 'history';

import ImageV2, { ImageV2Model} from "./ImageV2";
import { Router , Switch, Route } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react'


it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ImageV2 src={"/content/dam/image.jpg"} alt={"Some Image"} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

const createRoutedImageV2 = (props:ImageV2Model) => {
    const history:MemoryHistory = createMemoryHistory({
        initialEntries: ['/page1'],
        initialIndex: 0
    });
    return {
        ...render(
            <Router history={history}>
                <Switch>
                    <Route exact={true} path={"/page2"}>
                        <div><h1 className={"dummy"}>Hello World</h1></div>
                    </Route>
                    <Route exact={true} path={"/page1"}>
                        <ImageV2 {...props}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
};

it('Renders without link', () => {

    //let captured = false;
    const props:ImageV2Model = {
        src: "/content/dam/image.jpg",
        alt: "Some Image",
        hidePlaceHolder: false,
        isInEditor: false
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
        title: "Awesome Title!",
        hidePlaceHolder: false,
        isInEditor: false
    };

    const image = mount(<ImageV2 {...props}/>);

    const title = image.find(".cmp-image__title");

    expect(title).toHaveLength(1);
    expect(title.text()).toEqual(props.title);


});


it('Renders and routes properly', () => {

    //let captured = false;
    const props:ImageV2Model = {
        src: "/content/dam/image.jpg",
        link: "/page2",
        alt: "Some Image",
        hidePlaceHolder: false,
        isInEditor: false,
        routed: true
    };

    const { container } = createRoutedImageV2(props);

    const image:HTMLElement|null = container.querySelector('.cmp-image');

    expect(image).toBeDefined();

    const anchor = container.querySelector('a.cmp-image__link');

    expect(anchor).toBeDefined();

    if(anchor != null){
        fireEvent.click(anchor);
    }

    const h1 = container.querySelector("h1.dummy");
    expect(h1).toBeDefined();



});
