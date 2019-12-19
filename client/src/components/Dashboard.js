import React, { useState } from 'react'
import './Dashboard.css'
import AddLocationCard from './AddLocationCard'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Breadcrumb, Card, Col, Row, Typography, Modal, Input } from 'antd'

const { Text } = Typography
const { Search } = Input

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

const Dashboard = ({ locations }) => {
  const renderCards = locations => {
    return locations.map(location => (
      <Col span={8} key={location.city}>
        <Link to={`/details/${location.city}`}>
          <Card hoverable bordered={false} style={{ width: 300 }}>
            <div className='title'>{location.city}</div>
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
                    {location.minTemp}&#x2103;/{location.maxTemp}&#x2103;
                  </div>
                  <div>Sonnig</div>
                  <div>{location.humidity}% Regen</div>
                </Col>
              </Row>
            </div>
          </Card>
        </Link>
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
