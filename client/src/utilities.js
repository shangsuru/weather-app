module.exports = {
  getDateString() {
    let date = new Date()
    let dayName
    switch (date.getDay()) {
      case 1:
        dayName = 'Montag'
        break
      case 2:
        dayName = 'Dienstag'
        break
      case 3:
        dayName = 'Mittwoch'
        break
      case 4:
        dayName = 'Donnerstag'
        break
      case 5:
        dayName = 'Freitag'
        break
      case 6:
        dayName = 'Samstag'
        break
      default:
        dayName = 'Sonntag'
    }
    const day = ('0' + date.getDate()).slice(-2)
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const year = date.getFullYear() - 2000
    return `${dayName}, ${day}.${month}.${year}`
  },

  getDescription(id) {
    switch (id) {
      case '01d':
        return 'Sonnig'
      case '01n':
        return 'Mond'
      case '02d':
      case '02n':
        return 'Teils bewölkt'
      case '03d':
      case '03n':
        return 'Bewölkt'
      case '04d':
      case '04n':
        return 'Stark bewölkt'
      case '09d':
      case '09n':
        return 'Regen'
      case '10d':
        return 'Wechselhaft'
      case '10n':
        return 'Wechselhaft'
      case '11d':
      case '11n':
        return 'Gewitter'
      case '13d':
      case '13n':
        return 'Schnee'
      default:
        return 'Nebel'
    }
  }
}
