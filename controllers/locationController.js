const { Location, Forecast, sequelize } = require('../sequelize')
const axios = require('axios')

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'

module.exports = {
  async getLocations(req, res, next) {
    try {
      // get all locations from the database
      let locations = await Location.findAll()

      // before returning, check for out-of-date weather data
      let gotUpdated = false
      for (location of locations) {
        let now = Math.floor(new Date().getTime() / 1000)
        let updatedAt = Math.floor(locations[0].updatedAt.getTime() / 1000)

        // if the fetched data is older then ten minutes, update it
        if (now - updatedAt > 10) {
          gotUpdated = true
          let weather = await axios.get(
            `/weather?q=${encodeURI(location.city)}&APPID=${
              process.env.KEY
            }&units=metric`
          )
          await Location.update(
            {
              minTemp: weather.data.main.temp_min,
              maxTemp: weather.data.main.temp_max,
              humidity: weather.data.main.humidity,
              icon: weather.data.weather[0].icon
            },
            { where: { city: location.city } }
          )
          // reinsert most recent hourly forecasts
          await Forecast.destroy({ where: { locationCity: location.city } })
          let forecast = await axios.get(
            `/forecast?q=${encodeURI(location.city)}&APPID=${
              process.env.KEY
            }&units=metric`
          )
          for (data of forecast.data.list) {
            await Forecast.create({
              locationCity: location.city,
              time: data.dt,
              temp: data.main.temp,
              humidity: data.main.humidity,
              icon: data.weather[0].icon
            })
          }
        }
      }

      // if entries got updated, fetch all locations again and return the data
      if (gotUpdated) {
        let updatedLocations = await Location.findAll()
        res.json(updatedLocations)
      } else {
        res.json(locations)
      }
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  },

  // return weather data for a city and its hourly forecasts
  async getLocation(req, res, next) {
    try {
      let city = req.params.city
      let location = await Location.findOne({ where: { city } })
      let forecasts = await Forecast.findAll({ where: { locationCity: city } })

      if (location == null) {
        res.status(404).json({ error: 'Resource not found' })
      }

      res.json({ weather: location, forecasts: forecasts })
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  },

  // save a location and associated hourly forecasts to the database
  async createLocation(req, res, next) {
    let city = req.body.location
    try {
      // get current weather for city
      let weather = await axios.get(
        `/weather?q=${encodeURI(city)}&APPID=${process.env.KEY}&units=metric`
      )
      let location = await Location.create({
        city: city,
        minTemp: weather.data.main.temp_min,
        maxTemp: weather.data.main.temp_max,
        humidity: weather.data.main.humidity,
        icon: weather.data.weather[0].icon
      })

      // get hourly forecasts city
      let forecast = await axios.get(
        `/forecast?q=${encodeURI(city)}&APPID=${process.env.KEY}&units=metric`
      )
      for (data of forecast.data.list) {
        await Forecast.create({
          locationCity: location.city,
          time: data.dt,
          temp: data.main.temp,
          humidity: data.main.humidity,
          icon: data.weather[0].icon
        })
      }
      res.json(location)
    } catch (error) {
      res.status(500).json({ error: error.toString() })
    }
  }
}
