import preRender from "./prerender";
import {PageModel} from "@adobe/aem-react-editable-components";
import {ServerParameters} from "./ServerPayloadModel";

/**
 * The payload corresponds to the @PageModel, + __ow_headers from openwhisk, which include our ServerParameters.
 * @see PageModel
 */
interface Params extends PageModel {
    __ow_headers: ServerParameters
}

//@ts-ignore
global.main = (pageModel:Params) => {

    return new Promise((resolve, reject) => {
        preRender(pageModel, pageModel.__ow_headers).then((html) => {
            resolve({
                statusCode: 200,
                body: {
                    code: 200,
                    payload: html
                }
            });
        }).catch((error) => {
            reject({
                statusCode: 500,
                body: {
                    code: 500,
                    payload: 'error!' + error
                }
            });
        })
    });

};
