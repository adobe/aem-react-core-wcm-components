[![CircleCI](https://circleci.com/gh/adobe/aem-contrib-wcm-components.svg?style=svg)](https://circleci.com/gh/adobe/aem-contrib-wcm-components) [![codecov](https://codecov.io/gh/adobe/aem-contrib-wcm-components/branch/master/graph/badge.svg)](https://codecov.io/gh/adobe/aem-contrib-wcm-components)


# AEM WCM Components - Community Contributions - React SPA core proposal

This is a branch of the AEM WCM Components - Community Contributions maintained by Niek Raaijmakers for now.
It serves as proposal to introduce various react wrappers for the spa editor.

These are only for the spa editor since they have a dependency on @adobe/cq-react-editable-components.

Currently supported / exported components:

 - Accordion (V1)
 - Container (V1)
 - Carousel (V1)
 - Tabs (v2)
 
Routed core components (using react-dom-router)

 - SpaBreadcrumb (v2) 
 - SpaButton (V1) 
 - SpaList (V2)
 - SpaTeaser (V1)
 - SpaTitle (V2)
 - SpaNavigation (V1)
 - SpaLanguageLanguage (V1)

## how does this help me??

Please check the github source folder ( react maven sub module ) on how this all works together. 
You leverage these classes by importing them and then exposing them using MapTo.
Example provided in react-spacomponents-example-project >  in mapping.js.

If you need nothing else, you just need to provide styling and you are done.
If you  need to extend the classes, source code, you can overload methods at will, they are all overrideable. 

## why such shitty docs??

Well, I am not an engineer, I am a consultant, and work for the customer always comes first.
I don't have time to provide extensive documentation at this point, although I would love to. 
Perhaps in the future, but no promises! Feel free to improve the documentation by providing PR's.

## Legal disclaimer

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
As this project is a proposal and maintained by me (at time of development) as Adobe employee, it's copyrights belong to Adobe Systems. 

However this project in no way officially provided or supported by Adobe Systems, and Adobe Systems will take no responsibility for financial, 
indirect or any other sorts of damages incurred by the usage of this software. Use at your own risk.


