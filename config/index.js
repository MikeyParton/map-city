var config = {}

config.port = process.env.PORT || 3000

config.databaseUrl = 'postgres://localhost:5432/map_search'
config.databaseOptions = {
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
}

var environmentSettings = {}
switch (process.env.NODE_ENV) {
  case 'production': environmentSettings = require('./production'); break;
  case 'test': environmentSettings = require('./test'); break;
  default: environmentSettings = require('./development'); break;
}

config = Object.assign(config, environmentSettings)

module.exports = config
