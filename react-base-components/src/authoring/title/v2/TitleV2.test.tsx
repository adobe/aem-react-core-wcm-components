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
    }

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

