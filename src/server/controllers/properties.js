var Property = require('../models/property')

exports.index = function (req, res) {
  res.render('index.ejs')
}

exports.show = function (req, res) {
  console.log(req.params.id)
  Property.findById(req.params.id)
    .then(function(property) {
      res.json(property)
    })
}

exports.create = function (req, res) {
  console.log(req)
  Property.create({
    number: req.body.number,
    street: req.body.street,
    city: req.body.city,
    postcode: req.body.postcode,
    lat: req.body.lat,
    long: req.body.long,
    image_url: req.body.image_url
  }).then(function(property) {
    res.json(property)
  })
}

exports.all = function (req, res) {
  Property.findAll({
    limit: 10
  })
  .then(function(properties) {
    res.json(properties)
  })
}

exports.delete = function (req, res) {
  Property.destroy({
    where: {
      id: req.body.id
    }
  })
  .then(function(property) {
    res.json(property)
  })
}

    