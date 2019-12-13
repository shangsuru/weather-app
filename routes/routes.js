const LocationController = require('../controllers/locationController')

module.exports = app => {
  app.get('/locations', LocationController.getLocations)
  app.get('/location/:city', LocationController.getLocation)
  app.post('/location', LocationController.createLocation)
}
