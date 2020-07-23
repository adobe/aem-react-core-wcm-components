import {TitleV2, TitleV2IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2";
import {BreadCrumbV2, BreadCrumbV2IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/layout/breadcrumb/v2/BreadCrumbV2";
import {TextV2, TextV2IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/text/v2/TextV2";
import {NavigationV1} from "@adobe/aem-core-components-react-base/dist/layout/navigation/v1/NavigationV1";
import {ButtonV1, ButtonV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1";
import {ImageV2, ImageV2IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/image/v2/ImageV2";
import {LanguageNavigationV1} from "@adobe/aem-core-components-react-base/dist/layout/language-navigation/v1/LanguageNavigationV1";
import {TeaserV1, TeaserV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/teaser/v1/TeaserV1";
import {DownloadV1, DownloadV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/download/v1/DownloadV1";
import {SeparatorV1, SeparatorV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/separator/v1/SeparatorV1";
import {ListV2, ListV2IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/list/v2/ListV2";


import {ContainerV1, ContainerV1IsEmptyFn} from "@adobe/aem-core-components-react-spa/dist/container/container/v1/ContainerV1";
import {TabsV1, TabsV1IsEmptyFn} from "@adobe/aem-core-components-react-spa/dist/container/tabs/v1/TabsV1";
import {CarouselV1, CarouselV1IsEmptyFn} from "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1";
import {AccordionV1, AccordionV1IsEmptyFn} from "@adobe/aem-core-components-react-spa/dist/container/accordion/v1/AccordionV1";


import {MapTo, withComponentMappingContext, Container} from '@adobe/cq-react-editable-components';

import withRoute from './utils/RouteHelper';
import ContribPage from './components/Page';
import Demo from './components/Demo';

MapTo('core-components-examples/wcm/react/components/navigation')(withComponentMappingContext(NavigationV1));
MapTo('core-components-examples/wcm/react/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/languagenavigation')(withComponentMappingContext(LanguageNavigationV1));
MapTo('core-components-examples/wcm/react/components/list')(ListV2, {isEmpty: ListV2IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/separator')(SeparatorV1, {isEmpty: SeparatorV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/download')(DownloadV1, {isEmpty: DownloadV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/breadcrumb')(withComponentMappingContext(BreadCrumbV2), {isEmpty: BreadCrumbV2IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/teaser')(withComponentMappingContext(TeaserV1), {isEmpty: TeaserV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/image')(withComponentMappingContext(ImageV2), {isEmpty: ImageV2IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/title')(withComponentMappingContext(TitleV2), {isEmpty: TitleV2IsEmptyFn});


MapTo('core-components-examples/wcm/react/components/tabs')(withComponentMappingContext(TabsV1), {isEmpty: TabsV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/accordion')(withComponentMappingContext(AccordionV1), {isEmpty: AccordionV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/carousel')(withComponentMappingContext(CarouselV1), {isEmpty: CarouselV1IsEmptyFn});
MapTo('core-components-examples/wcm/react/components/container')(withComponentMappingContext(ContainerV1), {isEmpty: ContainerV1IsEmptyFn});

MapTo('core-components-examples/components/demo')(withComponentMappingContext(Demo));
MapTo('core-components-examples/components/demo/component')(withComponentMappingContext(Container));
MapTo('core-components-examples/wcm/react/components/page/react-spacomponents-page')(withComponentMappingContext(withRoute(ContribPage)), {});

