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

import {AbstractCoreComponent, CoreComponentModel, CoreComponentState} from './AbstractCoreComponent';

interface TestType extends CoreComponentModel{
    forceEmptyFlag:boolean
}

class ImplementingClass extends AbstractCoreComponent<TestType, CoreComponentState>{

    constructor(props:TestType) {
        super(props, "base-class", "AwesomeComponent");
    }

    isEmpty(): boolean {
        return this.props.forceEmptyFlag;
    }

    renderComponent(): JSX.Element {
        return <div>My awesome component</div>;
    }

}

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ImplementingClass  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={true}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Should show our awesome text if the component is not empty', () => {
    const wrapper = shallow(<ImplementingClass  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={false}/>);
    expect(wrapper.html()).toEqual("<div>My awesome component</div>");
});

it('Should not show anything if wcmmode is disabled and component is empty', () => {
    const wrapper = shallow(<ImplementingClass  hidePlaceHolder={false} isInEditor={false} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("");
});

it('Should show the proper placeholder if wcmmode is edit and component is empty', () => {
    const wrapper = shallow(<ImplementingClass  hidePlaceHolder={false} isInEditor={true} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("<div class=\"cq-placeholder\">AwesomeComponent - Please configure the component</div>");
});

it('Should NOT show the proper placeholder if wcmmode is edit and component is empty, and hidePlaceHolder is set to true.', () => {
    const wrapper = shallow(<ImplementingClass  hidePlaceHolder={true} isInEditor={true} forceEmptyFlag={true}/>);
    expect(wrapper.html()).toEqual("");
});