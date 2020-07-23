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

import {AbstractCoreContainerComponent} from "../../../AbstractCoreContainerComponent";
import {ComponentMapping} from '@adobe/cq-react-editable-components';


export function AccordionV1IsEmptyFn(props){
    return props.cqItems == null || props.cqItems.length === 0;
}

export class AccordionV1 extends AbstractCoreContainerComponent {

    constructor(props) {
        super(props, "cmp-accordion");
        this.state = {
            componentMapping: this.props.componentMapping || ComponentMapping,
            expandedItems: this.props.expandedItems
        };

        this.handleAccordionNavClick = this.handleAccordionNavClick.bind(this);
    }

    handleAccordionNavClick(itemKey){

        const isActive = this.state.expandedItems.indexOf(itemKey) > -1;
        const isSingleExpansion = this.props.singleExpansion;

        let expandedItems = this.state.expandedItems;
        if(isSingleExpansion){
            expandedItems = (isActive) ? [] : [itemKey];
        }else{
            if(isActive){
                const index =  this.state.expandedItems.indexOf(itemKey);
                expandedItems.splice( index );
            }else{
                expandedItems.push(itemKey);
            }
        }
        this.setState({
            expandedItems: expandedItems
        });
    }

    isItemExpanded(key){
        return this.state.expandedItems.indexOf(key) > -1;
    }

    get accordionContainerProps(){
        let attrs = this.containerProps;
        attrs['className'] = attrs.className + ' ' + this.baseCssCls;
        attrs['data-cmp-is'] = 'accordion';
    }


    displayItem(key,isExpanded) {

        const indexToShow = this.props.cqItemsOrder.indexOf(key);

        if(this.props.isInEditor === true || isExpanded){
            const cssClass = isExpanded ? `${this.baseCssCls}__panel ${this.baseCssCls}__panel--expanded`: `${this.baseCssCls}__panel ${this.baseCssCls}__panel--hidden`;

            return (
                <div className={cssClass}
                     role="region">
                    {this.childComponents[indexToShow]}
                </div>
            )
        }

        return null;
    }

    renderHeadingButton(key, item,buttonCssClass){
        return (
            <button className={buttonCssClass} onClick={() => { this.handleAccordionNavClick(key) }}>
                <span className={this.baseCssCls + '__title'}>{item["cq:panelTitle"]}</span>
                <span className={this.baseCssCls + '__icon'}></span>
            </button>
        )
    }

    get accordionContent(){
        return (

            this.props.cqItemsOrder.map((key, index) => {
                const item = this.props.cqItems[key];
                const isExpanded = this.isItemExpanded(key);
                const buttonCssClass = (isExpanded) ? `${this.baseCssCls}__button ${this.baseCssCls}__button--expanded` : `${this.baseCssCls}__button`;
                return (
                    <div
                        className={this.baseCssCls + '__item'}
                        data-cmp-index={index}
                        data-cmp-expanded={isExpanded}>
                        {
                            React.createElement(
                                `${this.props.headingElement || 'h3'}`,
                                {
                                    className: this.baseCssCls + '__header',
                                },
                                this.renderHeadingButton(key,item,buttonCssClass)
                            )
                        }
                        {this.displayItem(key, isExpanded)}

                    </div>
                )
            })
        );
    }

    render() {

        const isEmpty = AccordionV1IsEmptyFn(this.props);

        return (
            <div {...this.accordionContainerProps}>
                { !isEmpty && this.accordionContent }
                { this.placeholderComponent }
            </div>
        )
    }

}