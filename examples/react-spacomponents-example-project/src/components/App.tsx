import React from 'react';
import { Page, withModel} from '@adobe/cq-react-editable-components';

// This component is the application entry point
class App extends Page {

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