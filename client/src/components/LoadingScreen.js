import React from 'react'

import 'antd/dist/antd.css'
import { Icon, Row, Col } from 'antd'

const LoadingScreen = () => (
  <Row
    type='flex'
    align='middle'
    style={{
      height: '100vh'
    }}
  >
    <Col style={{ margin: '0 auto' }}>
      <Icon
        type='loading'
        style={{
          fontSize: 150
        }}
        spin
      />
    </Col>
  </Row>
)

export default LoadingScreen
