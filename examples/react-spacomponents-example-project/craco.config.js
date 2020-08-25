const CracoAlias = require("craco-alias");
const aliases = require("./config/aliases");
module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: "options",
                baseUrl: "./",
                aliases: aliases
            }
        }
    ]
};