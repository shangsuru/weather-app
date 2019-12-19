import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row, Typography } from 'antd'
const { Text } = Typography

const WeatherCard = ({ city, icon, minTemp, maxTemp, humidity }) => {
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

  return (
    <Link to={`/details/${city}`}>
      <Card hoverable bordered={false} style={{ width: 300 }}>
        <div className='title'>{city}</div>
        <div>
          <Row>
            <Col span={12}>
              <img src={require('../images/Bewölkt.png')} />
            </Col>
            <Col span={12}>
              <div>
                <Text underline>{getDateString()}</Text>
              </div>
              <div>
                {minTemp}&#x2103;/{maxTemp}&#x2103;
              </div>
              <div>Sonnig</div>
              <div>{humidity}% Regen</div>
            </Col>
          </Row>
        </div>
      </Card>
    </Link>
  )
}

export default WeatherCard
