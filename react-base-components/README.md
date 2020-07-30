# AEM WCM Components - React Core implementation

This module provides a React implementation for the [AEM core components](https://www.aemcomponents.dev/). 
This enables you to use the core components:
-In the [AEM SPA editor](https://docs.adobe.com/content/help/en/experience-manager-64/developing/headless/spas/spa-overview.html) with React
-In [React web components](https://www.npmjs.com/package/@adobe/react-webcomponent)
-Or in any other React context, provided you have the input needed to instantiate the components.

[Introduction Video and Demo](https://www.youtube.com/watch?v=9759AhM7fAc)

Current supported / exported components:

### Page Authoring
 - Button (V1)
 - Download (V1)
 - Image (V2)
 - List (V2)
 - Separator (V1)
 - Teaser (V1)
 - Text (V2)
 - Title (V2)

### Layout
 - BreadCrumb (V2)
 - Language Navigation (V1)
 - Navigation (V1)
 
### Abstraction
-  AbstractCoreComponent
-  CoreComponentModel (interface)

### Containers
For the containers (Accordion,Tabs,Carousel,Container) we do not provide any implementation in this project.
It does not make sense to provide it for web-components as you can leverage the normal Core Components implementation such as a Tab Container, and drag your web components in there.
Instead we provide them for the SPA editor only, introducing a dependency, and therefore we moved it into a [separate project](https://www.npmjs.com/package/@adobe/aem-core-components-react-spa).


## Usage

You can choose to import the entire library at once OR import components individually. 
The latter is useful if you want to only enable a few components and you want to save your javascript footprint.
Also, if you want to load all core components, but you want to lazyload them with react suspense, you will need to import them individually.

### Importing the whole library: 

```
import * as BaseCoreComponents from "@adobe/aem-core-components-react-base";
const {ButtonV1, ButtonV1Model, ButtonV1IsEmptyFn} = BaseCoreComponents;
```

### Importing the button component individually:
 
```
import ButtonV1, {ButtonV1Model, ButtonV1IsEmptyFn} from "@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1";
```

### Using the imported code

Now that you have the Button and ButtonV1IsEmptyFn imported, you can use them in your project.
The properties of the Button 1 on 1 correspond to the Sling Model Exporter (.model.json) output.

Note: There are some exceptions where some extra properties are added (mainly i18n labels) that are currently not present in the OOTB sling model exports.
These can be added by the project itself with delegation. If they are not present, the default (English) values will be used.

#### Button - Direct instantiation with TypeScript:
```
const modelProps:ButtonV1Model = {
    text: 'Example Button',
    link: '/content/my/awesome/page.html',
    icon: 'iconCssCLass'
};

const html:JSX.Element = (<ButtonV1 {...modelProps}/>);
```


#### Button - Example with the spa editor:

```
MapTo('my-project/wcm/components/button')(ButtonV1, {isEmpty: ButtonV1IsEmptyFn});
```

For a complete project with examples, visit the [github page](https://github.com/adobe/aem-react-core-wcm-components/tree/master/examples).