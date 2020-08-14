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
import {ComponentMapping} from '@adobe/cq-react-editable-components';
import {AbstractCoreContainerComponent,CoreContainerProperties,CoreContainerState} from "../../../AbstractCoreContainerComponent";
import {TabsV1IsEmptyFn} from "./TabsV1IsEmptyFn";

export interface TabsV1Properties extends CoreContainerProperties{
    
    accessibilityLabel:string;
    activeItem: string
}


export interface TabsV1Sstate extends CoreContainerState{
    activeIndex: number;
}


export default class TabsV1<P extends TabsV1Properties, S extends TabsV1Sstate> extends AbstractCoreContainerComponent<P,S> {

    constructor(props:P) {
        super(props, 'cmp-tabs');
        //@ts-ignore
        this.state = {
            activeIndex: (!!props.activeItem && props.activeItem.length > 0) ? this.props.cqItemsOrder.indexOf(props.activeItem) : 0,
            componentMapping: this.props.componentMapping || ComponentMapping
        };

        this.handleTabNavClick = this.handleTabNavClick.bind(this);
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
                <div>
                    {
                        this.childComponents.map((item, index) => {
                            const isVisible = (this.state.activeIndex === index);
                            const styles = { display: (!isVisible) ? 'none' : 'block'};
                            return (
                                <div style={styles}>{this.childComponents[index]}</div>
                            )
                        })
                    }
                </div>
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

        let childComponents:JSX.Element[] = [];

        if (!this.props.cqItems || !this.props.cqItemsOrder) {
            return childComponents;
        }

        return (
            <ol role="tablist"
                className={this.baseCssCls + '__tablist'}
                aria-label={this.props.accessibilityLabel}
                aria-multiselectable="false">
                    {
                        this.props.cqItemsOrder.map((item, index) => {
                            const tab = this.props.cqItems[item];
                            const isActive = (index === this.state.activeIndex);
                            return (
                                <li role="tab"
                                    onClick={() => this.handleTabNavClick(index)}
                                    className={this.baseCssCls + '__tab' + (isActive ? ' ' + this.baseCssCls + '__tab--active' : '')}
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
        let attrs = this.containerProps;
        attrs['className'] = attrs.className + ' ' + this.baseCssCls;
        attrs['data-cmp-is'] = 'tabs';
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