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


import React from 'react';
import {HasBaseCssClass, withConditionalPlaceHolder,withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import { RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {ListV2IsEmptyFn} from "./ListV2IsEmptyFn";


export interface ListV2Item extends RoutedModel,HasBaseCssClass{
    index?: number
    url?:string
    lastModified?:number
    lastModifiedFormatted?:string
    description?:string
    path:string
    title:string,
    showModificationDate?: boolean
}


export interface ListV2Model extends RoutedCoreComponentModel{
    items:ListV2Item[]
    dateFormatString: string
    showDescription: boolean
    showModificationDate: boolean
    linkItems: boolean
}

export const ListV2ItemModificationDate = (item:ListV2Item) => {
    const dateStringToDisplay = item.lastModifiedFormatted ? item.lastModifiedFormatted : "";
    return (
        <span className={item.baseCssClass + '__item-date'}>{dateStringToDisplay}</span>
    )
};

export const ListV2ItemContent = (item:ListV2Item) => {
    return (
        <>
            <span className={item.baseCssClass + '__item-title'}>{item.title}</span>
            {item.showModificationDate && <ListV2ItemModificationDate {...item }/>}
        </>
    )
};

export const ListV2Anchor = (item:ListV2Item) => {

    return (
        <RoutedLink isRouted={item.routed} className={item.baseCssClass + '__item-link'} to={item.url}>
            <ListV2ItemContent {...item}/>
        </RoutedLink>
    )
};

export const ListV2ItemDescription = (item: ListV2Item) => {
    return (
        <span className={item.baseCssClass + '__item-description'}>${item.description}</span>
    )
};

export const ListV2Impl = (props:ListV2Model) => {

    const ListV2Item = (item:ListV2Item) => {
        return (
            <li className={props.baseCssClass + '__item'} >
                <article>
                    {props.linkItems && !!item.url && <ListV2Anchor {...item}/>}
                    {!props.linkItems && <ListV2ItemContent {...item} index={item.index} />}
                    {props.showDescription && <ListV2ItemDescription {...item}/>}
                </article>
            </li>
        )
    };

    return (
        <ul className={props.baseCssClass}>
            {props.items.map((item, index) => <ListV2Item {...item} key={"cmp-list-" + index} baseCssClass={props.baseCssClass} routed={item.routed} index={index}  />)}
        </ul>
    )
};


const ListV2 = (props:ListV2Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(ListV2Impl, "cmp-list"), ListV2IsEmptyFn, "List V2")
    return <Wrapped {...props}/>
};

export default ListV2;