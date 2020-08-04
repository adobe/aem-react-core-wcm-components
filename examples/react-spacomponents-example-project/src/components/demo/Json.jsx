import React, {Component} from 'react';


class Json extends Component{

    render(){

        const prettyJson = JSON.stringify(JSON.parse(this.props.json),null,2);
        return (
            <div>
                <pre className="cmp-react-examples-demo__info-content cmp-react-examples-demo__info-content--json prettyprint linenums">{prettyJson}</pre>
            </div>

        )

    }

}

export default Json;