require("dotenv").config();
const fs = require("fs");

module.exports = {
    generateBuildId: async () => {
        const rev = fs.readFileSync('.git/HEAD').toString().trim();
        if (rev.indexOf(':') === -1) {
            return rev;
        } else {
            return fs.readFileSync('.git/' + rev.substring(5)).toString().trim();
        }
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};