import React from 'react';
import { Page, withModel, PageProperties, ContainerState} from '@adobe/cq-react-editable-components';

// This component is the application entry point
class App extends Page<PageProperties, ContainerState> {

    render() {
        return (
            <div className="App">
                { this.childComponents }
                { this.childPages }
            </div>
          );
    }
}

export default withModel(App);