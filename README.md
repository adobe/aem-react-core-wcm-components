# AEM WCM Core Components - React implementation

The React implementation for [AEM core components](https://github.com/adobe/aem-core-wcm-components). 
Provides either ready to use / extend components, or if you choose to write your own, a good reference to get started.



## Welcome

* **Contributions** are welcome, read our [contributing guide](CONTRIBUTING.md) for more information.
* **Ideas and questions** are discussed on our [public mailing list](https://groups.google.com/forum/#!forum/aem-core-components-dev); you can also [subscribe via email](mailto:aem-core-components-dev+subscribe@googlegroups.com).

### Usability Study 2020

We're conducting a usability study by using the [System Usability Scale](https://measuringu.com/sus/), a reliable tool to measure the perceived usability.  
Please help us making the Core Components better by responding to our **[short usability questionnaire](https://s2.userzoom.com/m/MSBDNTc1MlMxMDk1)**. Thank you!

## Documentation

TBD

## Features

TBD

### Template Components

1. [Navigation](content/src/content/jcr_root/apps/core/wcm/components/navigation/v1/navigation)
2. [Language Navigation](content/src/content/jcr_root/apps/core/wcm/components/languagenavigation/v1/languagenavigation)
3. [Breadcrumb](content/src/content/jcr_root/apps/core/wcm/components/breadcrumb/v2/breadcrumb)

### Page Authoring Components

4. [Title](content/src/content/jcr_root/apps/core/wcm/components/title/v2/title)
5. [Text](content/src/content/jcr_root/apps/core/wcm/components/text/v2/text)
6. [Image](content/src/content/jcr_root/apps/core/wcm/components/image/v2/image)
7. [Button](content/src/content/jcr_root/apps/core/wcm/components/button/v1/button)
8. [Teaser](content/src/content/jcr_root/apps/core/wcm/components/teaser/v1/teaser)
9. [Download](content/src/content/jcr_root/apps/core/wcm/components/download/v1/download)
10. [List](content/src/content/jcr_root/apps/core/wcm/components/list/v2/list)
11. [Separator](content/src/content/jcr_root/apps/core/wcm/components/separator/v1/separator)
12. [Progress Bar](content/src/content/jcr_root/apps/core/wcm/components/progressbar/v1/progressbar)

### Container Components

13. [Container](content/src/content/jcr_root/apps/core/wcm/components/container/v1/container)
14. [Carousel](content/src/content/jcr_root/apps/core/wcm/components/carousel/v1/carousel)
15. [Tabs](content/src/content/jcr_root/apps/core/wcm/components/tabs/v1/tabs)
16. [Accordion](content/src/content/jcr_root/apps/core/wcm/components/accordion/v1/accordion)

### Form Components

Not suported

### Roadmap

TBD

## Usage

To include the Core Components in a new project, we strongly advise to use the [AEM Project Archetype](https://github.com/adobe/aem-project-archetype); this guarantees a starting point that complies to all recommended practices from Adobe.

For existing projects, take example from the [AEM Project Archetype](https://github.com/adobe/aem-project-archetype) by looking at the `core.wcm.components` references in the main [`pom.xml`](https://github.com/adobe/aem-project-archetype/blob/master/src/main/archetype/pom.xml), in [`all/pom.xml`](https://github.com/adobe/aem-project-archetype/blob/master/src/main/archetype/all/pom.xml), and in [`ui.apps/pom.xml`](https://github.com/adobe/aem-project-archetype/blob/master/src/main/archetype/ui.apps/pom.xml). For the rest, make sure to create Proxy Components, to load the client libraries and to allow the components on the template, as instructed in [Using Core Components](https://docs.adobe.com/content/help/en/experience-manager-core-components/using/get-started/using.html).

### System Requirements

Core Components | AEM as a Cloud Service | AEM 6.5 | AEM 6.4 | Java SE | Maven
----------------|------------------------|---------|---------|---------|---------
[2.10.0](https://github.com/adobe/aem-core-wcm-components/releases/tag/core.wcm.components.reactor-2.10.0) | Continual | 6.5.5.0+ | 6.4.8.1+ | 8, 11 | 3.3.9+

For the requirements from previous Core Component releases, see [Historical System Requirements](VERSIONS.md).

The Core Components require the use of [editable templates](https://docs.adobe.com/content/help/en/experience-manager-learn/sites/page-authoring/template-editor-feature-video-use.html) and do not support Classic UI nor static templates. If needed, check out the [AEM Modernization Tools](https://opensource.adobe.com/aem-modernize-tools/pages/tools.html).

Setup your local development environment for [AEM as a Cloud Service SDK](https://docs.adobe.com/content/help/en/experience-manager-learn/cloud-service/local-development-environment-set-up/overview.html) or for [older versions of AEM](https://docs.adobe.com/content/help/en/experience-manager-learn/foundation/development/set-up-a-local-aem-development-environment.html).

### Building

To compile your own version of the React Core Components, you can build and install everything on your running AEM instance by issuing the following command in the top level folder of the project:

    mvn clean install -PautoInstallSinglePackage -PskipRat
    
Important: It is known that the core components examples package removes the examples installed in this package due to their package filter.
This needs to be addressed later.
    
    
You can also install individual packages/bundles by issuing the following command in the top-level folder of the project:

    mvn clean install -PautoInstallPackage -pl <project_name(s)> -am

Note that:
* `-pl/-projects` option specifies the list of projects that you want to install
* `-am/-also-make` options specifies that dependencies should also be built

For convenience, the following deployment profiles are provided when running the Maven install goal with `mvn install`:
* `autoInstallSinglePackage`: Install everything to the AEM author instance.
* `autoInstallSinglePackagePublish`: Install everything to the AEM publish instance.
* `autoInstallPackage`: Install the `ui.content` and `ui.apps` content packages to the AEM author instance.
* `autoInstallPackagePublish`: Install the `ui.content` and `ui.apps` content packages to the  AEM publish instance.

The hostname and port of the instance can be changed with the following user defined properties:
* `aem.host` and `aem.port` for the author instance.
* `aem.publish.host` and `aem.publish.port` for the publish instance.

* **Contributions** are welcome, read our [contributing guide](CONTRIBUTING.md) for more information.
* **Licensed** under [Apache 2.0](LICENSE)
