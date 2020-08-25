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
import {MappedComponentProperties} from '@adobe/cq-react-editable-components';

export interface JsonProperties extends MappedComponentProperties{
    json: string;
}

const Json = (props:JsonProperties) => {

    const prettyJson = JSON.stringify(JSON.parse(props.json),null,2);

    return (
        <div>
            <pre className="cmp-react-examples-demo__info-content cmp-react-examples-demo__info-content--json prettyprint linenums">{prettyJson}</pre>
        </div>

    )
};

export default Json;