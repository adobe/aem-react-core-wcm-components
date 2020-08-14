import React from 'react';
import { MappedComponentProperties } from '@adobe/cq-react-editable-components';


export interface MarkupProperties extends MappedComponentProperties{
    markup: string;
}

const Markup = (props:MarkupProperties) => {

    return (
        <div>
            {props.markup}
        </div>

    )
};

export default Markup;