const express = require('express')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()

app.set('view engine', 'njk')
nunjucks.configure('views', { autoescape: true, express: app })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/public/', express.static('public'))

app.use(router)

app.listen(3100, () => console.log('running'))