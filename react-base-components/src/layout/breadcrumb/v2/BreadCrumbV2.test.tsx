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

import {BreadCrumbV2, BreadCrumbV2ItemModel} from './BreadCrumbV2';
import { MemoryRouter } from 'react-router-dom';




it('Renders without crashing', () => {
    const div = document.createElement('div');
    let items:BreadCrumbV2ItemModel[] = [];
    ReactDOM.render(
        <BreadCrumbV2 items={items}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders breadcrumb items if provided', () => {
    let items:BreadCrumbV2ItemModel[] = [
        {active:false,url:'/content/some/url.html',title:'Item1'},
        {active:false,url:'/content/some/url.html',title:'Item2'},
        {active:true,url:'/content/some/url.html',title:'Item3'}
    ];


    const wrapper = shallow(<BreadCrumbV2  hidePlaceHolder={false} items={items}/>);
    expect(wrapper.find("li")).toHaveLength(3);

    expect(wrapper.find(".cmp-breadcrumb__item--active").text()).toEqual("Item3");
});




it('Renders routed breadcrumb items if provided', () => {
    let items:BreadCrumbV2ItemModel[] = [
        {active:false,url:'/content/some/url.html',title:'Item1', routed: true},
        {active:false,url:'/content/some/url.html',title:'Item2', routed: true},
        {active:true,url:'/content/some/url.html',title:'Item3', routed: true}
    ];


    const wrapper = mount(<MemoryRouter><BreadCrumbV2  hidePlaceHolder={false} items={items}/></MemoryRouter>);
    expect(wrapper.find("li")).toHaveLength(3);

    expect(wrapper.find(".cmp-breadcrumb__item--active").text()).toEqual("Item3");
});