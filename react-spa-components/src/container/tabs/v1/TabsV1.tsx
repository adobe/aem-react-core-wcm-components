/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from "react";
import {ComponentMapping, Container} from '@adobe/aem-react-editable-components';
import {CoreContainerProperties, CoreContainerState, withAuthorPanelSwitch, withStandardBaseCssClass, CoreContainerItem} from "../../../AbstractCoreContainerComponent";
import {TabsV1IsEmptyFn} from "./TabsV1IsEmptyFn";

export interface TabsV1Properties extends CoreContainerProperties{
    
    accessibilityLabel:string;
    activeItem?: string;
    cqItems: { [key: string]: CoreContainerItem };
}


export interface TabsV1State extends CoreContainerState{
    activeIndex: number;
}


class TabsV1Impl extends Container<TabsV1Properties,TabsV1State> {

    constructor(props:TabsV1Properties) {
        super(props);

        this.state = {
            activeIndex: (!!props.activeItem && props.activeItem.length > 0) ? this.props.cqItemsOrder.indexOf(props.activeItem) : 0,
            componentMapping: this.props.componentMapping || ComponentMapping
        };

        this.handleTabNavClick = this.handleTabNavClick.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<TabsV1Properties>, prevState: Readonly<TabsV1State>, snapshot?: any): void {
        if(this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel){
            this.setState({ activeIndex: this.props.activeIndexFromAuthorPanel } );
        }
    }

      /**
     * Overload childComponents getter to only return the active tab's items.
     * @returns {Object[]} An array with the components instantiated to JSX
     */
    tabbedChildComponents() {

        if(this.props.isInEditor === true){
            //for editing capabilities to work properly, we always need to render each item.
            //we will hide the disabled items instead.
            return (
                <>
                    {
                        this.childComponents.map((item, index) => {
                            const isVisible = (this.state.activeIndex === index);
                            const styles = { display: (!isVisible) ? 'none' : 'block'};
                            return (
                                <div key={"tab-content-" + index} className={this.props.baseCssClass + '__author-tab-content'} style={styles}>{this.childComponents[index]}</div>
                            )
                        })
                    }
                </>
            )
        }else{
            //when the editor is disabled, we can just show the active item only.
            return this.childComponents[this.state.activeIndex];
        }
    }

    handleTabNavClick(index:number){
        if(this.state.activeIndex !== index){
            this.setState({
                activeIndex: index
            });
        }
    }

    tabNavigation(){

        const childComponents:JSX.Element[] = [];

        if (!this.props.cqItems || !this.props.cqItemsOrder) {
            return childComponents;
        }

        return (
            <ol role="tablist"
                className={this.props.baseCssClass + '__tablist'}
                aria-label={this.props.accessibilityLabel}
                aria-multiselectable="false">
                    {
                        this.props.cqItemsOrder.map((item, index) => {
                            const tab = this.props.cqItems[item];
                            const isActive = (index === this.state.activeIndex);
                            return (
                                <li role="tab"
                                    key={"tab-" + index}
                                    onClick={() => this.handleTabNavClick(index)}
                                    className={this.props.baseCssClass + '__tab' + (isActive ? ' ' + this.props.baseCssClass + '__tab--active' : '')}
                                    tabIndex={isActive ? 0 : -1}
                                    data-cmp-hook-tabs="tab">
                                    {tab['cq:panelTitle']}
                                </li>
                            )
                            
                        })
                    }
                
            </ol>
        )

    }

    get tabContainerProps(){
        const attrs = this.containerProps;
        attrs['className'] = attrs.className + ' ' + this.props.baseCssClass;
        attrs['data-cmp-is'] = 'tabs';
        attrs['data-panelcontainer'] = 'tabs';
        return attrs;
    }

    render() {

        const isEmpty = TabsV1IsEmptyFn(this.props);

        return (
            <div {...this.tabContainerProps}>
                { !isEmpty && this.tabNavigation() }
                { !isEmpty && this.tabbedChildComponents() }
                { this.placeholderComponent }
            </div>
        )
    }

}

export default withStandardBaseCssClass(withAuthorPanelSwitch(TabsV1Impl), "cmp-tabs");