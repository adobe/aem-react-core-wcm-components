require("regenerator-runtime/runtime");
const app = require('../common/app');

async function main(args) {


    const refinedArgs = {
        pageRoot: args.__ow_headers['page-model-root-url'],
        pagePath: args.__ow_path.replace('//', '/').replace('.html', ''),
        wcmmode: args.__ow_headers['wcm-mode'],
        data: args
    }

    try {
        const response = await app.default(refinedArgs);
        console.log("Response", response);
        return {
            statusCode: 200,
            body: response
        };

    } catch (err) {
        console.error("Error!", err);
        return {
            body: { html: (err.stack) ? err + ' stack: ' + err.stack : error },
            code: 500
        }
    }


}

global.main = main;
exports.main = main;
