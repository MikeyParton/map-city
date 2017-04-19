var config = require('../config')

var baseConfig = { url: config.databaseUrl, dialect: 'postgres' }

var sequelizeConfig = {
  production: baseConfig,
  test: baseConfig,
  development: baseConfig
}

console.log(sequelizeConfig['production'])

// Export final database config
module.exports = sequelizeConfig;

