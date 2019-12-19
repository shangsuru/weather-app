const LocationController = require('../controllers/locationController')

module.exports = app => {
  // get a list of all locations and their weather data
  app.get('/locations', LocationController.getLocations)
  // get weather data of specific location along with hourly forecasts
  app.get('/location/:city', LocationController.getLocation)
  // saves weather data and hourly forecasts for a given location
  app.post('/location', LocationController.createLocation)
}
