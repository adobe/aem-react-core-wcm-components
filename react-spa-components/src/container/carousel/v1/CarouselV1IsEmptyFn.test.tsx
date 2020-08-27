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
import  {CarouselV1Properties} from "./CarouselV1";

import ComponentMapping, {dummyItems} from "../../../TestComponentMapping";
import {CarouselV1IsEmptyFn} from "./CarouselV1IsEmptyFn";
import { AllowedComponents, AllowedComponent } from '@adobe/aem-react-editable-components';

const allowedComponent:AllowedComponent = {
    path: "/apps/core/components/dummy",
    title: "Some Component"
};

const allowedComponents:AllowedComponents = {
    applicable: true,
    components: [allowedComponent]
};
const filledProps:CarouselV1Properties = {
    accessibilityLabel: 'Carousel',
    accessibility: {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide %{0}',
        indicators: 'Choose a slide to display'
    },
    autopauseDisabled: false,
    autoplay: true,
    delay: 100,
    cqItems: dummyItems,
    cqItemsOrder: ["test", "test2"],
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};

const emptyProps1:CarouselV1Properties = {
    accessibilityLabel: 'Carousel',
    accessibility: {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide %{0}',
        indicators: 'Choose a slide to display'
    },
    autopauseDisabled: false,
    autoplay: true,
    delay: 100,
    cqItems: {},
    cqItemsOrder: [],
    title: "Accordion",
    isInEditor: false,
    cqPath: "/content/accordion-path",
    allowedComponents: allowedComponents,
    componentMapping: ComponentMapping
};

const emptyProps2:CarouselV1Properties = {
    accessibilityLabel: 'Carousel',
    accessibility: {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous',
        slide: 'Slide {0} of {1}',
        indicator: 'Slide %{0}',
        indicators: 'Choose a slide to display'
    },
    autopauseDisabled: false,
    autoplay: true,
    delay: 100,
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
    const isEmpty = CarouselV1IsEmptyFn(filledProps);

    expect(isEmpty).toEqual(false);
});

it('Is empty 1', () => {
    const isEmpty = CarouselV1IsEmptyFn(emptyProps1);

    expect(isEmpty).toEqual(true);
});


it('Is empty 2', () => {
    const isEmpty = CarouselV1IsEmptyFn(emptyProps2);

    expect(isEmpty).toEqual(true);
});