//@ts-nocheck
import {ComponentType, default as React} from "react";
import {CoreContainerProperties, CoreContainerState} from "./AbstractCoreContainerComponent";


interface AuthorPanelSwitchState {
    activeIndexFromAuthorPanel?: number
}

const withAuthorPanelSwitch = <M extends CoreContainerProperties>(
    Component:ComponentType<M>
):React.ComponentType<M> => {

    return class extends React.Component<M, AuthorPanelSwitchState> {

        messageChannel;

        constructor(props:M) {
            super(props);
            this.state = {}

            if (window && window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
                this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window);
                this.callback = this.callback.bind(this);
            }
        }

        callback(message:any){
            if (message.data && message.data.id === this.props.cqPath) {
                if (message.data.operation === "navigate") {
                    const index = message.data.index as number;
                    this.setState({
                        activeIndexFromAuthorPanel: index
                    })
                }
            }
        }

        componentDidMount(): void {
            if(this.messageChannel){
                this.messageChannel.subscribeRequestMessage("cmp.panelcontainer", this.callback);
            }
        }

        componentWillUnmount(): void {
            if(this.messageChannel){
                this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer", this.callback);
            }
        }


        render(){
            return <Component {...this.props} activeIndexFromAuthorPanel={this.state.activeIndexFromAuthorPanel} />;
        }
    }

};

export default withAuthorPanelSwitch;