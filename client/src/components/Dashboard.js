import React, { useState } from 'react'
import './Dashboard.css'
import AddLocationCard from './AddLocationCard'
import WeatherCard from './WeatherCard'
import { Breadcrumb, Col, Row, Typography, Input } from 'antd'

const { Text } = Typography
const { Search } = Input

const Dashboard = ({ locations }) => {
  const renderCards = locations => {
    return locations.map(location => (
      <Col span={8} key={location.city}>
        <WeatherCard
          city={location.city}
          icon={location.icon}
          minTemp={location.minTemp}
          maxTemp={location.maxTemp}
          humidity={location.humidity}
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
        <Row gutter={[16, 16]}>
          {renderCards(locations)}
          <Col span={8}>
            <AddLocationCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
