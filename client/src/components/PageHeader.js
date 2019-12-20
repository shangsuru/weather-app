import React from 'react'

const PageHeader = () => (
  <div className='header'>
    <img
      style={{
        marginRight: '5px',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
      src={require('../images/Logo_Wolkig.png')}
    />
    Wetter Online
  </div>
)

export default PageHeader
