import preRender from "./prerender";
import { ServerPayLoadModel } from "./ServerPayloadModel";

//@ts-ignore
global.main = (parameters:ServerPayLoadModel) => {

    return new Promise((resolve, reject) => {
        preRender(parameters).then((html) => {
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