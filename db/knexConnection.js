

const enviornment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile');
const config = knexConfig[enviornment];
const knex = require('knex');
const knexConnection = knex(config);

module.exports = knexConnection;
