import React from 'react';
import {Container,ContainerProperties,ContainerState} from '@adobe/cq-react-editable-components';

export interface DemoContainerProperties extends ContainerProperties{
    fullWidth: boolean
}

class Demo extends Container<DemoContainerProperties,ContainerState> {

    /**
     * The properties that will be injected in the root element of the container
     *
     * @returns {Object} - The map of properties to be added
     */
    get containerProps() {
        let attrs = super.containerProps;

        const cssClass = 'cmp-react-examples-demo__component cmp-react-examples-demo__component--width' +  (this.props.fullWidth ? 'Full': 'Auto');
        attrs['className'] = attrs['className'] + ' ' + cssClass;

        return attrs;
    }

    render(){

        return (
            <div className="cmp-react-examples-demo" data-cmp-react-examples-is="demo">
                <div className="cmp-react-examples-demo__top t-cmp-clean t-cmp-clean--light cmp-react-examples-demo__info--open">
                    {super.render()}
                </div>
            </div>
        )

    }

}

export default Demo;