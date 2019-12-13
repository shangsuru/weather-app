module.exports = (sequelize, type) => {
  return sequelize.define('location', {
    city: {
      type: type.STRING,
      primaryKey: true
    },
    minTemp: type.FLOAT,
    maxTemp: type.FLOAT,
    humidity: type.INTEGER,
    icon: type.STRING
  })
}
