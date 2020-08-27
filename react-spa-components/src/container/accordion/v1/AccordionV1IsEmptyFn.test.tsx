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

import * as React from 'react';
import  {AccordionV1Properties} from "./AccordionV1";

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {AccordionV1IsEmptyFn} from "./AccordionV1IsEmptyFn";
import { AllowedComponents, AllowedComponent } from '@adobe/aem-react-editable-components';

const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};

const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};
const filledProps:AccordionV1Properties = {
    expandedItems: ["test"],
    headingElement: "h2",
    singleExpansion: false,
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};

const emptyProps1:AccordionV1Properties = {
    expandedItems: ["test"],
    headingElement: "h2",
    singleExpansion: false,
    cqItems: {},
    cqItemsOrder: [],
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};

const emptyProps2:AccordionV1Properties = {
    expandedItems: ["test"],
    headingElement: "h2",
    singleExpansion: false,
    cqItems: {},
    //@ts-ignore
    cqItemsOrder: null,
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};


it('Is not empty', () => {
    const isEmpty = AccordionV1IsEmptyFn(filledProps);

    expect(isEmpty).toEqual(false);
});

it('Is empty 1', () => {
    const isEmpty = AccordionV1IsEmptyFn(emptyProps1);

    expect(isEmpty).toEqual(true);
});


it('Is empty 2', () => {
    const isEmpty = AccordionV1IsEmptyFn(emptyProps2);

    expect(isEmpty).toEqual(true);
});