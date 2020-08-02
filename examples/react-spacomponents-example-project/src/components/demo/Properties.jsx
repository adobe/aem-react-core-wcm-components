import React, {Component} from 'react';


class Properties extends Component {

    render() {

        const keys = Object.keys(this.props.properties);
        return (
            <div>
                <ol className="cmp-examples-demo__properties">
                    {
                        keys.map((key) => {

                            return (
                                <li key={key} className="cmp-examples-demo__property">
                                <span className="cmp-examples-demo__property-title">{key}<span
                                    className="cmp-examples-demo__property-separator">:</span></span>
                                    <span className="cmp-examples-demo__property-value">{this.props.properties[key]}</span>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>

        )

    }

}

export default Properties;