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