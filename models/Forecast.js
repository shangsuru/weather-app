module.exports = (sequelize, type) => {
  return sequelize.define(
    'forecast',
    {
      time: {
        type: type.STRING,
        primaryKey: true
      },
      temp: type.FLOAT,
      humidity: type.INTEGER,
      icon: type.STRING
    },
    { timestamps: false }
  )
}
