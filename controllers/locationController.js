const { Location, Forecast, sequelize } = require('../sequelize')
const axios = require('axios')

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'

module.exports = {
  getLocations(req, res, next) {
    Location.findAll()
      .then(locations => res.json(locations))
      .catch(next)
  },

  getLocation(req, res, next) {
    const location = req.params.city
    Location.findOne({ where: { city: location } })
      .then(result => res.json(result))
      .catch(next)
  },

  async createLocation(req, res, next) {
    const city = req.body.location
    let weather = await axios.get(
      `/weather?q=${city}&APPID=${process.env.KEY}&units=metric`
    )

    const minTemp = weather.data.main.temp_min
    const maxTemp = weather.data.main.temp_max
    const humidity = weather.data.main.humidity
    const description = weather.data.weather.description
    let location = await Location.create({
      city: city,
      minTemp: minTemp,
      maxTemp: maxTemp,
      humidity: humidity,
      description: description
    })
    let forecast = await axios.get(
      `/forecast?q=${location.city}&APPID=61eff7720e51c7b5dc4e00d9433b158c&units=metric`
    )
    res.send(forecast.data.list)
  }
}
