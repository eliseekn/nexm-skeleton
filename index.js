const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const server = express()
const port = process.env.PORT || 3000

server.use(cors({origin: '*'}))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.listen(port, '', () => {
    console.log('Server running on port ' + port)
})