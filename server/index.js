const express = require('express')

// we need cors so that we can access our server from different domains.
const cors = require('cors')

// bodyParser is mainly used for form posts, we explore it here so we don't have issues later.
const bodyParser = require('body-parser')

const router = require('./routes/router')

// we use node with express to run our server.
const app = express()

// we are passing information as json data so we can process it.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/', router)

// we run the server on port 4000
const port = 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

