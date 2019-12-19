const Sequelize = require('sequelize')
const LocationModel = require('./models/Location')
const ForecastModel = require('./models/Forecast')

const sequelize = new Sequelize('postgres://localhost:5432/weather', {
  logging: false,
  dialect: 'postgres'
})

const Location = LocationModel(sequelize, Sequelize)
const Forecast = ForecastModel(sequelize, Sequelize)

sequelize.sync({ force: true })

module.exports = {
  Location,
  Forecast,
  sequelize
}
