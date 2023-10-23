const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/routes')
const cronJob = require('./helper/cronjob.helper')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))




app.use('/', router)

app.listen(port, () => {
    cronJob.start()
    console.log(`Example app listening on port ${port}`)
})