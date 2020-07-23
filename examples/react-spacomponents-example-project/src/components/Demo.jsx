import React from 'react';
import {Container} from '@adobe/cq-react-editable-components';


class Demo extends Container{

    /**
     * The properties that will be injected in the root element of the container
     *
     * @returns {Object} - The map of properties to be added
     */
    get containerProps() {
        let attrs = super.containerProps;

        const cssClass = 'cmp-examples-demo__component cmp-examples-demo__component--width' +  (this.props.fullWidth === true ? 'Full': 'Auto');
        attrs['className'] = attrs['className'] + ' ' + cssClass;

        return attrs;
    }

    render(){

        return (
            <div className="cmp-examples-demo" data-cmp-examples-is="demo">
                <div className="cmp-examples-demo__top t-cmp-clean t-cmp-clean--light">
                    {super.render()}
                </div>
            </div>
        )

    }

}

export default Demo;