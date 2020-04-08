const fs = require('fs')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
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

module.exports = router