module.exports = (sequelize, type) => {
  return sequelize.define('location', {
    city: {
      primaryKey: true,
      type: type.STRING
    },
    minTemp: type.FLOAT,
    maxTemp: type.FLOAT,
    humidity: type.INTEGER,
    icon: type.STRING
  })
}
