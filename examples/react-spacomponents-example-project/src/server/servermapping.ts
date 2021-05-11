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

import {MapTo, Container, MappedComponentProperties, ContainerProperties, PageProperties} from '@adobe/aem-react-editable-components';

import {TitleV2IsEmptyFn, ListV2IsEmptyFn, BreadCrumbV2IsEmptyFn, TextV2IsEmptyFn, ButtonV1IsEmptyFn, ImageV2IsEmptyFn, TeaserV1IsEmptyFn, DownloadV1IsEmptyFn, SeparatorV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/isEmptyFunctions";
import {
    AccordionV1IsEmptyFn,
    CarouselV1IsEmptyFn,
    ContainerV1IsEmptyFn,
    TabsV1IsEmptyFn
} from "@adobe/aem-core-components-react-spa/dist/isEmptyFunctions";

import withRoute from '../utils/RouteHelper';
import ContribPage from '../components/Page';
import Demo, {DemoContainerProperties} from '../components/demo/Demo';
import Json, {JsonProperties} from '../components/demo/Json';
import Markup, {MarkupProperties} from "../components/demo/Markup";
import Properties, {PropertiesModel} from "../components/demo/Properties";

import {
    TabsV1, CarouselV1, AccordionV1, ContainerV1
} from '@adobe/aem-core-components-react-spa';
import {
    DownloadV1Model,
    ListV2Model,
    CoreComponentModel,
    TextV2Model,
    BreadCrumbV2Model,
    ButtonV1Model,
    TeaserV1Model,
    ImageV2Model,
    TitleV2Model,
    TitleV2,
    BreadCrumbV2,
    TextV2,
    NavigationV1,
    ButtonV1,
    ImageV2,
    LanguageNavigationV1,
    TeaserV1,
    DownloadV1,
    SeparatorV1,
    ListV2
} from '@adobe/aem-core-components-react-base';

import {TabsV1Properties, AccordionV1Properties, CarouselV1Properties, ContainerV1Properties} from '@adobe/aem-core-components-react-spa';

type p = MappedComponentProperties;



MapTo<ContainerProperties & p>('core-components-examples/wcm-react/components/experience-fragment')(Container, {isEmpty: ( props ) => props.cqItemsOrder && props.cqItemsOrder.length > 0});
MapTo<DownloadV1Model & p>('core-components-examples/wcm-react/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo<ListV2Model & p>('core-components-examples/wcm-react/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo<CoreComponentModel & p>('core-components-examples/wcm-react/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
MapTo<TextV2Model & p>('core-components-examples/wcm-react/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo<BreadCrumbV2Model & p>('core-components-examples/wcm-react/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo<ButtonV1Model & p>('core-components-examples/wcm-react/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo<TeaserV1Model & p>('core-components-examples/wcm-react/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo<ImageV2Model & p>('core-components-examples/wcm-react/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo<TitleV2Model & p>('core-components-examples/wcm-react/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});




MapTo<any>('core-components-examples/wcm-react/components/navigation')(NavigationV1);
MapTo<any>('core-components-examples/wcm-react/components/languagenavigation')(LanguageNavigationV1);

MapTo<TabsV1Properties>('core-components-examples/wcm-react/components/tabs')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
MapTo<AccordionV1Properties>('core-components-examples/wcm-react/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo<CarouselV1Properties>('core-components-examples/wcm-react/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo<ContainerV1Properties>('core-components-examples/wcm-react/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});

MapTo<JsonProperties>('core-components-examples/wcm-react/components/demo/json')(Json);
MapTo<PropertiesModel>('core-components-examples/wcm-react/components/demo/properties')(Properties);
MapTo<MarkupProperties>('core-components-examples/wcm-react/components/demo/markup')(Markup);
MapTo<DemoContainerProperties>('core-components-examples/wcm-react/components/demo')(Demo);
MapTo<ContainerProperties>('core-components-examples/wcm-react/components/demo/component')(Container);
MapTo<PageProperties>('core-components-examples/wcm-react/components/page/react-spacomponents-page')(ContribPage);

