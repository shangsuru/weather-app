import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Details from './Details'
import LoadingScreen from './LoadingScreen'
import axios from 'axios'

import 'antd/dist/antd.css'
import { Icon, Row, Col } from 'antd'

const App = () => {
  const [locations, setLocations] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:8000/locations')
      .then(result => setLocations(result.data))
      .then(
        setTimeout(() => {
          setLoaded(true)
        }, 2000)
      )
  }, [])

  return (
    <div
      style={{
        backgroundColor: 'lightgrey',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      {!loaded ? (
        <LoadingScreen />
      ) : (
        <div>
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
          <Router>
            <Switch>
              <Route path='/details/:city' component={Details}></Route>
              <Route path='/'>
                <Dashboard locations={locations} />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  )
}

export default App
