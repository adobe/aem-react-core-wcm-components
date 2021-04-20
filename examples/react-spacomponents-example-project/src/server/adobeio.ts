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


async function main(pageModel:Params) {
    try{
        const response = await preRender(pageModel, pageModel.__ow_headers);
        return {
            statusCode: 200,
            body: {
                code: 200,
                payload: response
            }
        }
    }catch(err){
        return {
            statusCode: 500,
            body: {
                code: 500,
                payload: 'error!' + err
            }
        }
    }
}
//@ts-ignore
global.main = main;
exports.main = main;
