const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
const app = express()

require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())
routes(app)

app.listen(8000, () => {
  console.log('Server is running')
})

module.exports = app
