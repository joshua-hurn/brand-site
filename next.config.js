require("dotenv").config();

module.exports = {
    env: {
        FONTAWESOME_NPM_AUTH_TOKEN: process.env.FONTAWESOME_NPM_AUTH_TOKEN
    },
    generateBuildId: async () => {
        let id;
        
        require('child_process').exec('git rev-parse HEAD', function (err, stdout) {
            id = stdout
        });
        
        return id
    },
};