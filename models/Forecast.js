module.exports = (sequelize, type) => {
  return sequelize.define(
    'forecast',
    {
      locationCity: type.STRING,
      time: type.STRING,
      temp: type.FLOAT,
      humidity: type.INTEGER,
      icon: type.STRING
    },
    { timestamps: false }
  )
}
