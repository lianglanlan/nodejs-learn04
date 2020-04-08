const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./router')
const app = express()

app.set('view engine', 'njk')
nunjucks.configure('views', { autoescape: true, express: app })

app.use('/public/', express.static('public'))

router(app)

app.listen(3100, () => console.log('running'))