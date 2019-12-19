import React from 'react'

import 'antd/dist/antd.css'
import { Icon } from 'antd'

const PageHeader = () => (
  <div className='header'>
    <Icon
      type='cloud'
      style={{
        marginRight: '5px',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
    />
    Wetter Online
  </div>
)

export default PageHeader
