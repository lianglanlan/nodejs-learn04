const fs = require('fs')
const express = require('express')

const router = express.Router()

router.get('/students', (req, res) => {
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

router.get('/students/new', (req, res) => {
    res.render('new')
})

router.post('/students/new', (req, res) => {
    console.log(req.body)
    res.send('')
})

router.get('/students/edit', (req, res) => {
    res.send('')
})

router.post('/students/edit', (req, res) => {
    res.send('')
})

router.post('/students/delete', (req, res) => {
    res.send('')
})

module.exports = router