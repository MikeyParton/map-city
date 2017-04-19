var Sequelize = require('sequelize');
var config = require('../../../config');

let db = new Sequelize(config.databaseUrl, config.databaseOptions);

module.exports = db;
