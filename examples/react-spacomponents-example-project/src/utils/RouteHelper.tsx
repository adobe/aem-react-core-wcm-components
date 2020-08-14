import React, {Component, ComponentType} from 'react';
import {Route} from 'react-router-dom';
import { MappedComponentProperties } from '@adobe/cq-react-editable-components';

/**
 * Helper that facilitate the use of the {@link Route} component
 */

/**
 * Returns a composite component where a {@link Route} component wraps the provided component
 *
 * @param {React.Component} WrappedComponent    - React component to be wrapped
 * @param {string} [extension=html]             - extension used to identify a route amongst the tree of resource URLs
 * @returns {CompositeRoute}
 */
const withRoute = <P extends MappedComponentProperties>(WrappedComponent:ComponentType<P>, extension?:string) => {
    return class CompositeRoute extends Component<P> {
        render() {
            let routePath = this.props.cqPath;
            if (!routePath) {
                return <WrappedComponent {...this.props}/>;
            }

            extension = extension || 'html';

            // Context path + route path + extension
            return <Route key={ routePath } path={ '(.*)' + routePath + '.' + extension } render={ (routeProps:unknown) => {
                return <WrappedComponent {...this.props} {...routeProps}/>;
            } } />
        }
    }
};


export default withRoute;