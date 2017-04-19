var properties = require('./properties')

module.exports = function(app) {
  app.get('/', properties.index)
  app.get('/properties', properties.all)
  app.get('/properties/:id', properties.show)
  app.post('/properties', properties.create)
  app.delete('/properties/:id', properties.delete)
}
