var Sequelize = require('sequelize');
var db = require('./db');

var Property = db.define('Property', {
  number: Sequelize.STRING,
  street: Sequelize.STRING,
  city: Sequelize.STRING,
  postcode: Sequelize.STRING,
  lat: Sequelize.DECIMAL,
  long: Sequelize.DECIMAL,
  image_url: Sequelize.STRING
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
})

module.exports = Property
