// Update with your config settings.
const dotenv = require('dotenv').config();
module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DEVELOPMENT_DATABASE
  },

  production: {
    client: 'postgresql',
    connection: process.env.PRODUCTION_DATABASE + '?ssl=true'
  }
};
