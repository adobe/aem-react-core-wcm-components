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

import ReactDOM from "react-dom";

import React from "react";
import TeaserV1, {TeaserV1Model} from "./TeaserV1";
import {mount} from "enzyme";

const defaultProps:TeaserV1Model = {
    imageAlt: "snowy mountains",
    imagePath: "/some/image.png",
    description: '<p>Paragraph</p>',
    actions: [
        {
            routed: false,
            title: "Link1",
            URL: "/content/link1"
        },
        {
            routed: false,
            title: "Link2",
            URL: "/content/link2"
        }
    ],
    actionsEnabled: true,
    imageLinkHidden: false,
    linkURL: "/some/url.html",
    title: "Some title",
    pretitle: "Custom pretitle",
    titleType: "h2",
    titleLinkHidden: false
}

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TeaserV1  {...defaultProps}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});

it('Renders as expected', ()=> {
    const element = mount(<TeaserV1 {...defaultProps}/>);

    const content = element.find(".cmp-teaser__content");
    expect(content).toHaveLength(1);
    
    //description
    const description = content.find('.cmp-teaser__description');
    expect(description).toHaveLength(1);
    expect(description.html()).toEqual('<div class="cmp-teaser__description">' + defaultProps.description + '</div>');

    //pretitle
    const pretitle = content.find('.cmp-teaser__pretitle');
    expect(pretitle).toHaveLength(1);
    expect(pretitle.html()).toEqual('<div class="cmp-teaser__pretitle">' + defaultProps.pretitle + '</div>');

    //title
    const title = content.find('.cmp-teaser__title');
    expect(title).toHaveLength(1);
    const expectedHtml = `<div class=\"cmp-teaser__title\"><${defaultProps.titleType} class=\"cmp-teaser__title-text\"><a href=\"${defaultProps.linkURL}" class=\"cmp-teaser__title-link\">${defaultProps.title}</a></${defaultProps.titleType}></div>`;
    expect(title.html()).toEqual(expectedHtml);


    //image
    const image = element.find(".cmp-teaser__image");
    expect(image).toHaveLength(1);

    const img = image.find("img");
    expect(img.prop("src")).toEqual(defaultProps.imagePath);
    expect(img.prop("alt")).toEqual(defaultProps.imageAlt)


    //actions
    const actionContainer = element.find(".cmp-teaser__action-container");
    expect(actionContainer).toHaveLength(1);

    const actions = actionContainer.find("a.cmp-teaser__action-link");
    expect(actions).toHaveLength(2);


});
