import React from 'react'
import './Dashboard.css'
import { getDateString, getDescription } from '../utilities'
import AddLocationCard from './AddLocationCard'
import WeatherCard from './WeatherCard'
import { Breadcrumb, Col, Row } from 'antd'

const Dashboard = ({ locations }) => {
  // for every location renders a card displaying the weather data
  const renderCards = locations => {
    return locations.map(location => (
      <Col sm={24} md={12} lg={8} key={location.city}>
        <WeatherCard
          city={location.city}
          minTemp={location.minTemp}
          maxTemp={location.maxTemp}
          humidity={location.humidity}
          img={location.icon}
          date={getDateString()}
          descr={getDescription(location.icon)}
        />
      </Col>
    ))
  }

  return (
    <div style={{ backgroundColor: 'lightgrey' }}>
      <div className='container'>
        <Breadcrumb style={{ margin: '20px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>

        <Row type='flex' gutter={[16, 16]}>
          {renderCards(locations)}
          <Col sm={24} md={12} lg={8}>
            <AddLocationCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
