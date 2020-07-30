# AEM WCM Components - Spa editor - React Core implementation

This module provides a React implementation for the containers in the [AEM core components](https://www.aemcomponents.dev/). 
This only works with the [AEM SPA editor](https://docs.adobe.com/content/help/en/experience-manager-64/developing/headless/spas/spa-overview.html).

[Introduction Video and Demo](https://www.youtube.com/watch?v=9759AhM7fAc)

Current supported / exported components:

### Containers
 - Accordion (V1)
 - Carousel (V1)
 - Container (V1)
 - Tabs (V1)
 
### Abstraction
-  AbstractCoreContainerComponent

## Usage

You can choose to import the entire library at once OR import components individually. 
The latter is useful if you want to only enable a few components and you want to save your javascript footprint.
Also, if you want to load all core components, but you want to lazyload them with react suspense, you will need to import them individually.

### Importing the whole library: 

```
import * as SpaCoreComponents from "@adobe/aem-core-components-react-spa";
const {CarouselV1, CarouselV1IsEmptyFn} = BaseCoreComponents;
```

### Importing the CarouselV1 component individually:
 
```
import {CarouselV1, CarouselV1IsEmptyFn} from "@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1";
```

### Using the imported code

Now that you have the CarouselV1 and CarouselV1IsEmptyFn imported, you can use them in your project.
The properties of the Button 1 on 1 correspond to the Sling Model Exporter (.model.json) output.

Note: There are some exceptions where some extra properties are added (mainly i18n labels) that are currently not present in the OOTB sling model exports.
These can be added by the project itself with delegation. If they are not present, the default (English) values will be used.

#### Carousel - Example with the spa editor:

```
MapTo('my-project/wcm/components/containers')(CarouselV1, {isEmpty: CarouselV1IsEmptyFn});
```

For a complete project with examples, visit the [github page](https://github.com/adobe/aem-react-core-wcm-components/tree/master/examples).