# AEM WCM Components - Community Contributions - React SPA core 

These are only for the spa editor since they have a dependency on @adobe/cq-react-editable-components.

Currently supported / exported components:

 - Accordion (V1)
 - Container (V1)
 - Carousel (V1)
 - Tabs (v2)


## Usage

You can choose to import the entire library at once OR import components individually. 
The latter is useful if you want to only enable a few components and you want to save your javascript footprint.
Also, if you want to load all core components, but you want to lazyload them with react suspense, you will need to import them individually.

### Importing the whole library: 

```
import * as SpaCoreComponents  from "@adobe/aem-core-components-react-spa";
```

### Importing the Accordion component individually:
 
```
import {AccordionV1}             from "@adobe/aem-core-components-react-spa/dist/container/accordion/v1/AccordionV1";
```