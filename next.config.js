require("dotenv").config();

module.exports = {
    env: {
        FONTAWESOME_NPM_AUTH_TOKEN: process.env.FONTAWESOME_NPM_AUTH_TOKEN
    },
    generateBuildId: async () => {
        const rev = fs.readFileSync('.git/HEAD').toString().trim();
        if (rev.indexOf(':') === -1) {
            return rev;
        } else {
            return fs.readFileSync('.git/' + rev.substring(5)).toString().trim();
        }
    },
};