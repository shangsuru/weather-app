const getDateString = () => {
  let date = new Date()
  let dayName
  switch (date.getDay()) {
    case 0:
      dayName = 'Montag'
      break
    case 1:
      dayName = 'Dienstag'
      break
    case 2:
      dayName = 'Mittwoch'
      break
    case 3:
      dayName = 'Donnerstag'
      break
    case 4:
      dayName = 'Freitag'
      break
    case 5:
      dayName = 'Samstag'
      break
    case 6:
      dayName = 'Sonntag'
      break
  }
  const day = ('0' + date.getDay()).slice(-2)
  const month = ('0' + date.getMonth()).slice(-2)
  const year = date.getFullYear() - 2000
  return `${dayName}, ${day}.${month}.${year}`
}
