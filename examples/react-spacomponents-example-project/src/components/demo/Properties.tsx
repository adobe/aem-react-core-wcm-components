import React from 'react';
import {MappedComponentProperties} from '@adobe/cq-react-editable-components';

export interface PropertiesModel extends MappedComponentProperties{
    properties: { [key: string]: string; }
}

const Properties = (props:PropertiesModel) => {
    const keys = Object.keys(props.properties);
    return (
        <div>
            <ol className="cmp-react-examples-demo__properties">
                {
                    keys.map((key) => {

                        return (
                            <li key={key} className="cmp-react-examples-demo__property">
                                <span className="cmp-react-examples-demo__property-title">{key}<span
                                    className="cmp-react-examples-demo__property-separator">:</span></span>
                                <span className="cmp-react-examples-demo__property-value">{props.properties[key]}</span>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
};

export default Properties;