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

import React, {Component} from 'react';
import {withConditionalPlaceHolder} from "../../../AbstractCoreComponent";
import {isItemRouted, RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {BreadCrumbV2IsEmptyFn} from "./BreadCrumbV2IsEmptyFn";

export interface BreadCrumbV2ItemModel extends RoutedModel{
    active: boolean
    url: string
    title: string
}

export interface BreadCrumbV2Model extends RoutedCoreComponentModel {
    items: BreadCrumbV2ItemModel[]
    ariaLabelI18n: string
}


class BreadCrumbV2Impl extends Component<BreadCrumbV2Model> {

    public static defaultProps = {
        ariaLabelI18n: "BreadCrumbV2",
    };

    renderBreadCrumbListItem(crumbItem:BreadCrumbV2ItemModel,index:number): JSX.Element{

        const className = `${this.props.baseCssClass}__item` + (crumbItem.active ? ` ${this.props.baseCssClass}__item--active` : '');
        const contentIndex:string = index.toString(2);

        return (
            <li className={className}
                key={'crumbitem-' + index}
                itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                {
                    !crumbItem.active && this.renderBreadCrumbLink(crumbItem,index)
                }
                {
                    crumbItem.active && this.renderBreadCrumbSpan(crumbItem,index)
                }
                <meta itemProp="position" content={contentIndex}/>
            </li>
        );
    }

    renderBreadCrumbLink(crumbItem:BreadCrumbV2ItemModel,index:number){
        return (
            <RoutedLink
                        to={crumbItem.url}
                        isRouted={isItemRouted(this.props,crumbItem)}
                        className={`${this.props.baseCssClass}__item-link`}
                        itemProp="item">
                {this.renderBreadCrumbSpan(crumbItem, index)}
            </RoutedLink>
        )
    }

    renderBreadCrumbSpan(crumbItem:BreadCrumbV2ItemModel,index:number){
        return <span itemProp="name">{crumbItem.title}</span>
    }

    render(){
        return (
            <nav className={this.props.baseCssClass}
                 aria-label={this.props.ariaLabelI18n}>
                <ol className={this.props.baseCssClass + '__list'}
                    itemScope itemType="http://schema.org/BreadcrumbList">
                    {this.props.items.map((item, index) => {
                        return this.renderBreadCrumbListItem(item, index)
                    })}
                </ol>
            </nav>
        )
    }

}


const BreadCrumbV2 = (props:BreadCrumbV2Model) => {
    const Wrapped = withConditionalPlaceHolder(BreadCrumbV2Impl, BreadCrumbV2IsEmptyFn, "cmp-breadcrumb", "Breadcrumb V2")
    return <Wrapped {...props}/>
};

export default BreadCrumbV2;