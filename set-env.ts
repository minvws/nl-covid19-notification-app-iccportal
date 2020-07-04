const fs = require("fs")
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.prod.ts';
// Load node modules
const colors = require('colors');
require('dotenv').load();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
      production: false,
      appName: "{appName}",
      apiUrl: 'http://localhost:5006',
      authHost: '${process.env.AUTH_HOST}',
      auth: {
          username:'${process.env.USERNAME}',
          password:'${process.env.PASSWORD}'
      }
};
`;
fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
});
