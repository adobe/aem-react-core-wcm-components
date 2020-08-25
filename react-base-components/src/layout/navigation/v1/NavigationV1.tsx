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
import {HasBaseCssClass, withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {RoutedCoreComponentModel, RoutedModel} from "../../../routing/RoutedCoreComponent";
import {RoutedLink} from "../../../routing/RoutedLink";
import {NavigationV1IsEmptyFn} from "./NavigationV1IsEmptyFn";

export interface NavigationV1Item extends RoutedModel,HasBaseCssClass{
    level: number,
    index?: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    children?: NavigationV1Item[]
}

export interface NavigationV1Model extends RoutedCoreComponentModel{
    items:NavigationV1Item[]
    accessibilityLabel?: string
}

export const determineIsActive = (item:NavigationV1Item) => {
    return item.active;
};

export const NavigationV1Group = (item:NavigationV1Item) => {
    return (
        <>
            {!!item.children && item.children.length > 0 &&  (
                <ul  className={item.baseCssClass + '__group'}>
                    {item.children.map(
                        (item,index) => <NavigationV1Item key={item.baseCssClass + '__item-' + index} {...item} index={index}/>
                    )}
                </ul>
            )}
        </>
    )
};

export const NavigationV1Item = (item:NavigationV1Item) => {

    const isActive = determineIsActive(item);
    const cssClass = item.baseCssClass + '__item ' +
                    item.baseCssClass + '__item--level-' + item.level + ' '
                     + (isActive ? ' ' + item.baseCssClass + '__item--active' : '');
    return (
        <li className={cssClass}>
                <RoutedLink isRouted={item.routed} to={item.url} title={item.title} aria-current={isActive && 'page'}
                    className={item.baseCssClass + '__item-link'}>{item.title
               }</RoutedLink>
                {
                    !!item.children && item.children.length > 0 && <NavigationV1Group {...item}/>
                }
        </li>
    )

};

export const NavigationV1Impl = (props:NavigationV1Model) => {

    const selfClone:NavigationV1Item = {
        active: false,
        lastModified: 0,
        level: 0,
        path: "",
        title: "",
        url: "",
        children: props.items
    };

    return (
        <nav className={props.baseCssClass}
             role="navigation"
             itemScope itemType="http://schema.org/SiteNavigationElement"
             aria-label={props.accessibilityLabel}>
            <NavigationV1Group {...selfClone}/>
        </nav>
    )

}



export const NavigationV1 = (props:NavigationV1Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(NavigationV1Impl, "cmp-navigation"), NavigationV1IsEmptyFn, "Navigation V1")
    return <Wrapped {...props}/>
};

export default NavigationV1;