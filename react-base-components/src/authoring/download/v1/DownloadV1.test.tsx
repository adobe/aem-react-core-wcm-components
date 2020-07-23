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


import {DownloadV1, DownloadV1Model} from "./DownloadV1";




it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <DownloadV1 title={"Download me"} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
    expect(1).toBe(1);
});


it('Renders out properly', () => {

    let captured = false;
    const props:DownloadV1Model = {
        actionText: "Download now!!!",
        description: "<p>Asset uploaded directly from a local file system</p>\\r\\n",
        displayFilename: true,
        displayFormat: true,
        displaySize: true,
        extension: "jpg",
        filename: "lava-into-ocean.jpg",
        format: "image/jpeg",
        hidePlaceHolder: false,
        isInEditor: false,
        size: "81 KB",
        title: "Uploaded Asset",
        titleType: "h2",
        handleOnClick: ()=> {
            captured = true;
        },
        url: "/content/core-components-examples/library/page-authoring/download/jcr:content/root/responsivegrid/demo_68071479/component/download/file.coredownload.jpeg/lava-into-ocean.jpg"
    };

    const wrapper = shallow(<DownloadV1  {...props} />);

    const properties = wrapper.find('.cmp-download__property');

    expect(properties).toHaveLength(3);

    const button = wrapper.find('.cmp-download__action');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(captured).toEqual(true);

});
