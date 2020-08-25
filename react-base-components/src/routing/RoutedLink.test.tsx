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

import {createMemoryHistory, MemoryHistory} from "history";
import {fireEvent, render} from "@testing-library/react";
import {Route, Router, Switch} from "react-router-dom";
import React from "react";
import {RoutedLink} from "./RoutedLink";
import {RoutedModel} from "./RoutedCoreComponent";

interface DummyModel extends RoutedModel{
    url?: string
}

const RoutedDummyComponent = (props:DummyModel) => {
    return (
        <div className={"routedDummyComponent"}>
            <RoutedLink className={"dummyLink"} to={props.url} isRouted={props.routed}></RoutedLink>
        </div>

    )
};

const createRoutedDummyComponent = (url:string, routed = true) => {
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
                        <RoutedDummyComponent url={url} routed={routed}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
};

it('Renders and routes properly', () => {


    const { container } = createRoutedDummyComponent("/page2");

    const image:HTMLElement|null = container.querySelector('.routedDummyComponent');

    expect(image).toBeDefined();

    const anchor = container.querySelector('a.dummyLink');

    expect(anchor).toBeDefined();

    if(anchor != null){
        fireEvent.click(anchor);
    }

    const h1 = container.querySelector("h1.dummy");
    expect(h1).toBeDefined();

});



it('Does NOT route if the link is empty', () => {


    const { container } = createRoutedDummyComponent("", false);

    const image:HTMLElement|null = container.querySelector('.routedDummyComponent');

    expect(image).toBeDefined();

    const anchor = container.querySelector('a.dummyLink');

    expect(anchor).toBeDefined();

    let found = false;

    if(anchor != null){
        const href:Attr | null = anchor.attributes.getNamedItem("href");

        if(href != null){
            expect(href.value).toEqual("#");
            found = true;
        }
    }

    expect(found).toEqual(true);

    if(anchor != null){
        fireEvent.click(anchor);
    }

    const h1 = container.querySelector("h1.dummy");
    expect(h1).toBeNull();

});


it('Does NOT route if we tell it to', () => {


    const { container } = createRoutedDummyComponent("/page2", false);

    const image:HTMLElement|null = container.querySelector('.routedDummyComponent');

    expect(image).toBeDefined();

    const anchor = container.querySelector('a.dummyLink');

    expect(anchor).toBeDefined();

    if(anchor != null){
        fireEvent.click(anchor);
    }

    const h1 = container.querySelector("h1.dummy");
    expect(h1).toBeNull();

});


it('Will never route external URLs', () => {


    const { container } = createRoutedDummyComponent("https://adobe.com", true);

    const image:HTMLElement|null = container.querySelector('.routedDummyComponent');

    expect(image).toBeDefined();

    const anchor = container.querySelector('a.dummyLink');

    expect(anchor).toBeDefined();

    if(anchor != null){
        fireEvent.click(anchor);
    }

    const h1 = container.querySelector("h1.dummy");
    expect(h1).toBeNull();

});

