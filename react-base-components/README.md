# AEM WCM Components - React Core implementation

This module provides 
[Introduction Video and Demo](https://www.youtube.com/watch?v=9759AhM7fAc)

Currently supported / exported components:

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

## Usage

You can choose to import the entire library at once OR import components individually. 
The latter is useful if you want to only enable a few components and you want to save your javascript footprint.
Also, if you want to load all core components, but you want to lazyload them with react suspense, you will need to import them individually.

### Importing the whole library: 

```
import * as BaseCoreComponents from "@adobe/aem-core-components-react-base";
```

### Importing the button component individually:
 
```
import {ButtonV1, ButtonV1Model} from "@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1";
```