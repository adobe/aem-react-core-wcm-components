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

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';


import {CoreComponentModel,withStandardBaseCssClass, withConditionalPlaceHolder} from './AbstractCoreComponent';

interface TestType extends CoreComponentModel{
    forceEmptyFlag:boolean
}

class ImplementingClass extends Component<TestType>{
    
    render(): JSX.Element {
        return <div className={this.props.baseCssClass}>My awesome component</div>;
    }

}

const WrappedClass = withConditionalPlaceHolder(withStandardBaseCssClass(ImplementingClass,"base-class"), (props) => props.forceEmptyFlag, "AwesomeComponent");

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <WrappedClass  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={true}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Should show our awesome text if the component is not empty', () => {
    const wrapper = mount(<WrappedClass  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={false}/>);
    expect(wrapper.html()).toEqual("<div class=\"base-class\">My awesome component</div>");
});

it('Should not show anything if wcmmode is disabled and component is empty', () => {
    const wrapper = mount(<WrappedClass  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toBeNull();
});

it('Should show the proper placeholder with a custom text if wcmmode is edit and component is empty', () => {

    const WrappedOverride = withConditionalPlaceHolder(ImplementingClass, (props) => props.forceEmptyFlag,  "AwesomeComponent", "Custom Configure Text");

    const wrapper = mount(<WrappedOverride  hidePlaceHolder={false} isInEditor={true} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("<div class=\"cq-placeholder\">AwesomeComponent - Custom Configure Text</div>");
});

it('Should NOT show the proper placeholder if wcmmode is edit and component is empty, and hidePlaceHolder is set to true.', () => {
    const wrapper = mount(<WrappedClass  hidePlaceHolder={true} isInEditor={true} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toBeNull();
});

it('Should change the baseClass if we specify it with properties', () => {
    const wrapper = mount(<WrappedClass baseCssClass={"overridden"}  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={false}/>);
    expect(wrapper.html()).toEqual("<div class=\"overridden\">My awesome component</div>");
});