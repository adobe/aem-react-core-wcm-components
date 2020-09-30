import { PageModel } from "@adobe/aem-react-editable-components";

export interface ServerParameters {
    wcmMode: string
    pagePath: string
    requestUrl: string
    modelRootUrl: string
    rootPagePath: string
}

export interface ServerPayLoadModel {
    model: PageModel,
    parameters : ServerParameters
}