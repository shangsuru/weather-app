import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Col, Row, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { getDateString, getDescription } from '../utilities'
import axios from 'axios'
import './Details.css'

const DetailsCard = props => {
  const [weather, setWeather] = useState('') // current weather data of location
  const [forecasts, setForecasts] = useState([]) // hourly forecasts

  useEffect(() => {
    axios
      .get(`http://localhost:8000/location/${props.match.params.city}`)
      .then(result => {
        setWeather(result.data.weather)
        setForecasts([
          result.data.forecasts[0],
          result.data.forecasts[1],
          result.data.forecasts[2],
          result.data.forecasts[3],
          result.data.forecasts[4],
          result.data.forecasts[5]
        ])
      })
  }, [props.match.params.city])

  return (
    <div style={{ backgroundColor: 'lightgrey' }}>
      {weather ? (
        <div className='container'>
          <Breadcrumb style={{ margin: '20px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Detailansicht</Breadcrumb.Item>
          </Breadcrumb>

          <Card bordered={false} style={{ width: 600 }}>
            <div className='city'>{weather.city}</div>
            <Row>
              <Col span={12}>
                <div>{getDateString()}</div>
                <div>{weather ? getDescription(weather.icon) : null}</div>
              </Col>
              <Col span={12}>
                <div>Niederschlag: {weather.humidity}%</div>
                <div>Niederschlag: {weather.humidity}%</div>
                <div>Wind: 23 km/h</div>
              </Col>
            </Row>
            <div style={{ marginTop: '20px' }}>
              <Row>
                <Col span={12}>
                  <img
                    alt='weather-icon'
                    src={require(`../images/${weather.icon}.png`)}
                  />
                </Col>
                <Col span={12}>
                  <div className='temperature'>
                    {Math.round((weather.minTemp + weather.maxTemp) / 2)}
                    &#x2103;
                  </div>
                </Col>
              </Row>

              <Row style={{ marginTop: '50px' }}>
                {forecasts.map(forecast => (
                  <Col span={4}>
                    {new Date(forecast.time * 1000).getHours()} Uhr
                  </Col>
                ))}
              </Row>
              <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                {forecasts.map(forecast => (
                  <Col span={4}>
                    <img
                      alt='weather-icon'
                      width={
                        forecast.icon === '03d' ||
                        forecast.icon === '03n' ||
                        forecast.icon === '04d' ||
                        forecast.icon === '04n'
                          ? '50px'
                          : '40px'
                      }
                      src={require(`../images/${forecast.icon}.png`)}
                    />
                  </Col>
                ))}
              </Row>
              <Row>
                {forecasts.map(forecast => (
                  <Col span={4}>{Math.round(forecast.temp)}&#x2103;</Col>
                ))}
              </Row>
            </div>
          </Card>
          <Link to='/'>
            <Button type='primary' className='button'>
              <Icon type='left' />
              Dashboard
            </Button>
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default DetailsCard
