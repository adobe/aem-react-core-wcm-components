import {MapTo, Container, MappedComponentProperties, ContainerProperties, PageProperties} from '@adobe/cq-react-editable-components';

import {TitleV2IsEmptyFn, ListV2IsEmptyFn, BreadCrumbV2IsEmptyFn, TextV2IsEmptyFn, ButtonV1IsEmptyFn, ImageV2IsEmptyFn, TeaserV1IsEmptyFn, DownloadV1IsEmptyFn, SeparatorV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/isEmptyFunctions";
import {AccordionV1IsEmptyFn, CarouselV1IsEmptyFn, ContainerV1IsEmptyFn, TabsV1IsEmptyFn} from "@adobe/aem-core-components-react-spa/dist/isEmptyFunctions";

import withAsyncImport from "./utils/withAsyncImport";

import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';
import Demo, { DemoContainerProperties } from './components/demo/Demo';
import Json, { JsonProperties } from './components/demo/Json';
import Markup, { MarkupProperties } from "./components/demo/Markup";
import Properties, { PropertiesModel } from "./components/demo/Properties";
import { DownloadV1Model } from '@adobe/aem-core-components-react-base/dist/authoring/download/v1/DownloadV1';
import { ListV2Model } from '@adobe/aem-core-components-react-base/dist/authoring/list/v2/ListV2';
import { CoreComponentModel } from '@adobe/aem-core-components-react-base/dist/AbstractCoreComponent';
import { TextV2Model } from '@adobe/aem-core-components-react-base/dist/authoring/text/v2/TextV2';
import { BreadCrumbV2Model } from '@adobe/aem-core-components-react-base/dist/layout/breadcrumb/v2/BreadCrumbV2';
import { ButtonV1Model } from '@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1';
import { TeaserV1Model } from '@adobe/aem-core-components-react-base/dist/authoring/teaser/v1/TeaserV1';
import { ImageV2Model } from '@adobe/aem-core-components-react-base/dist/authoring/image/v2/ImageV2';
import { TitleV2Model } from '@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2';
import { TabsV1Properties } from '@adobe/aem-core-components-react-spa/dist/container/tabs/v1/TabsV1';
import { AccordionV1Properties } from '@adobe/aem-core-components-react-spa/dist/container/accordion/v1/AccordionV1';
import { CarouselV1Properties } from '@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1';
import { ContainerV1Properties } from '@adobe/aem-core-components-react-spa/dist/container/container/v1/ContainerV1';


const TitleV2 = withAsyncImport(() => import(/* webpackChunkName: "TitleV2" */ '@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2'));
const BreadCrumbV2 = withAsyncImport(() => import(/* webpackChunkName: "BreadCrumbV2" */ '@adobe/aem-core-components-react-base/dist/layout/breadcrumb/v2/BreadCrumbV2'));
const TextV2 = withAsyncImport(() => import(/* webpackChunkName: "TextV2" */ '@adobe/aem-core-components-react-base/dist/authoring/text/v2/TextV2'));
const NavigationV1 = withAsyncImport(() => import(/* webpackChunkName: "NavigationV1" */ '@adobe/aem-core-components-react-base/dist/layout/navigation/v1/NavigationV1'));
const ButtonV1 = withAsyncImport(() => import(/* webpackChunkName: "ButtonV1" */ '@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1'));
const ImageV2 = withAsyncImport(() => import(/* webpackChunkName: "ImageV2" */ '@adobe/aem-core-components-react-base/dist/authoring/image/v2/ImageV2'));
const LanguageNavigationV1 = withAsyncImport(() => import(/* webpackChunkName: "LanguageNavigationV1" */ '@adobe/aem-core-components-react-base/dist/layout/language-navigation/v1/LanguageNavigationV1'));
const TeaserV1 = withAsyncImport(() => import(/* webpackChunkName: "TeaserV1" */ '@adobe/aem-core-components-react-base/dist/authoring/teaser/v1/TeaserV1'));
const DownloadV1 = withAsyncImport(() => import(/* webpackChunkName: "DownloadV1" */ '@adobe/aem-core-components-react-base/dist/authoring/download/v1/DownloadV1'));
const SeparatorV1 = withAsyncImport(() => import(/* webpackChunkName: "SeparatorV1" */ '@adobe/aem-core-components-react-base/dist/authoring/separator/v1/SeparatorV1'));
const ListV2 = withAsyncImport(() => import(/* webpackChunkName: "ListV2" */ '@adobe/aem-core-components-react-base/dist/authoring/list/v2/ListV2'));

const ContainerV1 = withAsyncImport(() => import(/* webpackChunkName: "ContainerV1" */ '@adobe/aem-core-components-react-spa/dist/container/container/v1/ContainerV1'));
const TabsV1 = withAsyncImport(() => import(/* webpackChunkName: "TabsV1" */ '@adobe/aem-core-components-react-spa/dist/container/tabs/v1/TabsV1'));
const CarouselV1 = withAsyncImport(() => import(/* webpackChunkName: "CarouselV1" */ '@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1'));
const AccordionV1 = withAsyncImport(() => import(/* webpackChunkName: "AccordionV1" */ '@adobe/aem-core-components-react-spa/dist/container/accordion/v1/AccordionV1'));

type p = MappedComponentProperties;

MapTo<DownloadV1Model & p>('core-components-examples/wcm/react/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo<ListV2Model & p>('core-components-examples/wcm/react/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo<CoreComponentModel & p>('core-components-examples/wcm/react/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
MapTo<TextV2Model & p>('core-components-examples/wcm/react/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo<BreadCrumbV2Model & p>('core-components-examples/wcm/react/components/breadcrumb')(BreadCrumbV2, {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo<ButtonV1Model & p>('core-components-examples/wcm/react/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo<TeaserV1Model & p>('core-components-examples/wcm/react/components/teaser')(TeaserV1, {isEmpty: TeaserV1IsEmptyFn});
MapTo<ImageV2Model & p>('core-components-examples/wcm/react/components/image')(ImageV2, {isEmpty: ImageV2IsEmptyFn});
MapTo<TitleV2Model & p>('core-components-examples/wcm/react/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});



MapTo('core-components-examples/wcm/react/components/navigation')(NavigationV1);
MapTo('core-components-examples/wcm/react/components/languagenavigation')(LanguageNavigationV1);

MapTo<TabsV1Properties & p>('core-components-examples/wcm/react/components/tabs')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
MapTo<AccordionV1Properties & p>('core-components-examples/wcm/react/components/accordion')(AccordionV1, {isEmpty: AccordionV1IsEmptyFn});
MapTo<CarouselV1Properties & p>('core-components-examples/wcm/react/components/carousel')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
MapTo<ContainerV1Properties & p>('core-components-examples/wcm/react/components/container')(ContainerV1, {isEmpty: ContainerV1IsEmptyFn});

MapTo<JsonProperties>('core-components-examples/components/demo/json')(Json);
MapTo<PropertiesModel>('core-components-examples/components/demo/properties')(Properties);
MapTo<MarkupProperties>('core-components-examples/components/demo/markup')(Markup);
MapTo<DemoContainerProperties>('core-components-examples/components/demo')(Demo);
MapTo<ContainerProperties>('core-components-examples/components/demo/component')(Container);
MapTo<PageProperties>('core-components-examples/wcm/react/components/page/react-spacomponents-page')(withRoute(ContribPage));

