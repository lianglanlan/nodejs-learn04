const fs = require('fs')
const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set('view engine', 'njk')
nunjucks.configure('views', { autoescape: true, express: app })

app.use('/public/', express.static('public'))

app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index', {
            fruits: ['苹果', '香蕉', '橘子', '梨'],
            students: JSON.parse(data).students
        })
    })

})

app.listen(3100, () => console.log('running'))