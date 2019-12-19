import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import Details from './Details'
import axios from 'axios'

import 'antd/dist/antd.css'
import { Icon } from 'antd'

const App = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/locations')
      .then(result => setLocations(result.data))
  }, [])

  const addLocation = location => setLocations(location)

  return (
    <div style={{ backgroundColor: 'lightgrey', height: '100vh' }}>
      <div className='header'>
        <Icon type='cloud' style={{ marginRight: '5px' }} />
        Wetter Online
      </div>
      <Router>
        <Switch>
          <Route path='/details/:city' component={Details}></Route>
          <Route path='/'>
            <Dashboard locations={locations} addLocation={addLocation} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
