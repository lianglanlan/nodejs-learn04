const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set('view engine', 'njk')
nunjucks.configure('views', { autoescape: true, express: app })

app.use('/public/', express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        fruits: ['苹果', '香蕉', '橘子', '梨']
    })
})

app.listen(3100, () => console.log('running'))