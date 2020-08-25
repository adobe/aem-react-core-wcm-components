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
import {withConditionalPlaceHolder, withStandardBaseCssClass} from "../../../AbstractCoreComponent";
import {determineIsActive, NavigationV1Group, NavigationV1Item, NavigationV1Model} from "../../navigation/v1/NavigationV1";
import {RoutedLink} from "../../../routing/RoutedLink";
import {LanguageNavigationV1IsEmptyFn} from "./LanguageNavigationV1IsEmptyFn";

export interface LanguageNavigationV1Item extends NavigationV1Item {
    level: number,
    active: boolean,
    title: string,
    url: string,
    lastModified: number,
    description?: string,
    path: string,
    locale: string,
    country: string,
    language: string,
    children?: LanguageNavigationV1Item[]
}

export interface LanguageNavigationV1Model extends NavigationV1Model{
    items:LanguageNavigationV1Item[]
    accessibilityLabel?: string
}

export const LanguageNavigationV1Link = (props:LanguageNavigationV1Item) => {
    if(props.level > 0){
        return (
            <RoutedLink
                isRouted={props.routed}
                className={props.baseCssClass + '__item-link'}
                to={props.url}
                hrefLang={props.language}
                lang={props.language}
                rel="alternate"
                title={props.title}>{props.title}</RoutedLink>
        )
    }else{
        return (
            <span className={ props.baseCssClass + '__item-title'} lang={props.language}>{props.title}</span>
        )
    }
};

export const LanguageNavigationV1Group = (item:LanguageNavigationV1Item) => {
    return (
        <>
            {!!item.children && item.children.length > 0 &&  (
                <ul className={item.baseCssClass + '__group'}>
                    {item.children.map(
                        (item,index) => <LanguageNavigationV1Item {...item} key={item.baseCssClass + '__item-' + index} index={index}/>
                    )}
                </ul>
            )}
        </>
    )
};

export const LanguageNavigationV1Item = (item:LanguageNavigationV1Item) => {

    const isActive = determineIsActive(item);
    const cssClass = item.baseCssClass + '__item ' +
                    item.baseCssClass + '__item--level-' + item.level + ' ' + 
                    `${item.baseCssClass}__item--countrycode-${item.country} ${item.baseCssClass}__item--langcode-${item.language}` + 
                     + (isActive ? ' ' + item.baseCssClass + '__item--active' : '');
    return (
        <li className={cssClass}>
                <LanguageNavigationV1Link {...item}/>
                {
                    !!item.children && item.children.length > 0 && <NavigationV1Group {...item}/>
                }
        </li>
    )

};

const LanguageNavigationV1Impl = (props:LanguageNavigationV1Model) => {
    const selfClone:LanguageNavigationV1Item = {
        active: false,
        lastModified: 0,
        level: 0,
        path: "",
        title: "",
        url: "",
        language: "",
        country: "",
        locale: "",
        children: props.items
    };

    return (
        <nav className={props.baseCssClass}
             role="navigation"
             itemScope itemType="http://schema.org/SiteNavigationElement"
             aria-label={props.accessibilityLabel}>
            <LanguageNavigationV1Group {...selfClone}/>
        </nav>
    )
};

const LanguageNavigation = (props:LanguageNavigationV1Model) => {
    const Wrapped = withConditionalPlaceHolder(withStandardBaseCssClass(LanguageNavigationV1Impl, "cmp-languagenavigation"), LanguageNavigationV1IsEmptyFn, "LanguageNavigation V1")
    return <Wrapped {...props}/>
};

export default LanguageNavigation;