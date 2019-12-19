import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Col, Row, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Details.css'

const DetailsCard = props => {
  console.log(props.match.params.city)
  const [city, setCity] = useState('')

  useEffect(() => {
    axios
      .get(`http://localhost:8000/location/${props.match.params.city}`)
      .then(result => setCity(result.data))
  }, [])

  return (
    <div style={{ backgroundColor: 'lightgrey' }}>
      <div className='container'>
        <Breadcrumb style={{ margin: '20px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Detailansicht</Breadcrumb.Item>
        </Breadcrumb>
        <Card bordered={false} style={{ width: 300 }}>
          <div className='city'>{city.city}</div>
          <Row>
            <Col span={12}>
              <div>Dienstag, 09:00</div>
              <div>Bewölkt</div>
            </Col>
            <Col span={12}>
              <div>Niederschlag: 0%</div>
              <div>Niederschlag: 60%</div>
              <div>Wind: 23 km/h</div>
            </Col>
          </Row>
          <div style={{ marginTop: '20px' }}>
            <Row>
              <Col span={12}>
                <img src={require('../images/Bewölkt.png')} />
              </Col>
              <Col span={12}>
                <div className='temperature'> {city.minTemp}&#x2103;</div>
              </Col>
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
    </div>
  )
}

export default DetailsCard
