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
import {HasBaseCssClass, withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {BreadCrumbV2IsEmptyFn} from "./BreadCrumbV2IsEmptyFn";

export interface BreadCrumbV2ItemModel extends RoutedModel, HasBaseCssClass{
    active: boolean
    url: string
    title: string
    index?: number
}

export interface BreadCrumbV2Model extends RoutedCoreComponentModel {
    items: BreadCrumbV2ItemModel[]
    ariaLabelI18n: string
}

export const BreadCrumbV2SSpan = (crumbItem:BreadCrumbV2ItemModel) => {
    return (
        <span itemProp="name">{crumbItem.title}</span>
    )
};

export const BreadCrumbV2Link = (crumbItem:BreadCrumbV2ItemModel) => {
    return (
        <RoutedLink
            to={crumbItem.url}
            isRouted={crumbItem.routed}
            className={`${crumbItem.baseCssClass}__item-link`}
            itemProp="item">
            <BreadCrumbV2SSpan {...crumbItem}/>
        </RoutedLink>
    )
};

export const BreadCrumbV2ListItem = (crumbItem:BreadCrumbV2ItemModel) => {

    const className = `${crumbItem.baseCssClass}__item` + (crumbItem.active ? ` ${crumbItem.baseCssClass}__item--active` : '');
    const contentIndex:string = (crumbItem.index) ? crumbItem.index.toString(2) : 'noindex';

    return (
        <li className={className}
            itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
            {
                !crumbItem.active && <BreadCrumbV2Link {...crumbItem}/>
            }
            {
                crumbItem.active && <BreadCrumbV2SSpan {...crumbItem}/>
            }
            <meta itemProp="position" content={contentIndex}/>
        </li>
    );
};

const BreadCrumbV2Impl = (props:BreadCrumbV2Model) => {
    
    const {ariaLabelI18n = 'BreadCrumbV2'} = props;
    
    return (
        <nav className={props.baseCssClass}
             aria-label={ariaLabelI18n}>
            <ol className={props.baseCssClass + '__list'}
                itemScope itemType="http://schema.org/BreadcrumbList">
                {props.items.map((item, index) => <BreadCrumbV2ListItem {...item} index={index} baseCssClass={props.baseCssClass}   key={'crumbitem-' + index}/> )}
            </ol>
        </nav>
    );

};


const BreadCrumbV2 = (props:BreadCrumbV2Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(BreadCrumbV2Impl, "cmp-breadcrumb"), BreadCrumbV2IsEmptyFn, "Breadcrumb V2");
    return <Wrapped {...props}/>
};

export default BreadCrumbV2;