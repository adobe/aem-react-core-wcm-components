import TitleV2 , {TitleV2Model} from '@adobe/aem-core-components-react-base/dist/authoring/title/v2/TitleV2';
import {TitleV2IsEmptyFn,TextV2IsEmptyFn} from '@adobe/aem-core-components-react-base/dist/isEmptyFunctions';
import TextV2, {TextV2Model} from '@adobe/aem-core-components-react-base/dist/authoring/text/v2/TextV2';
import {MappedComponentProperties, MapTo} from "@adobe/cq-react-editable-components";

type p = MappedComponentProperties;

MapTo<TitleV2Model & p>('core-components-examples/wcm/react/components/title')(TitleV2, {isEmpty: TitleV2IsEmptyFn});

MapTo<TextV2Model & p>('core-components-examples/wcm/react/components/text')(TextV2, {isEmpty: TextV2IsEmptyFn});
