import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row, Typography } from 'antd'
const { Text } = Typography

const WeatherCard = ({
  city,
  img,
  minTemp,
  maxTemp,
  humidity,
  date,
  descr
}) => {
  return (
    <Link to={`/details/${city}`}>
      <Card hoverable bordered={false} style={{ width: 300 }}>
        <div className='title'>{city}</div>
        <div>
          <Row>
            <Col span={12}>
              <img alt='weather-icon' src={require(`../images/${img}.png`)} />
            </Col>
            <Col span={12}>
              <div>
                <Text underline>{date}</Text>
              </div>
              <div>
                {Math.round(minTemp)}&#x2103; / {Math.round(maxTemp)}&#x2103;
              </div>
              <div>{descr}</div>
              <div>{humidity}% Regen</div>
            </Col>
          </Row>
        </div>
      </Card>
    </Link>
  )
}

export default WeatherCard
