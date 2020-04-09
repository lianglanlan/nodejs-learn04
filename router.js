const express = require('express')

const Student = require('./student')

const router = express.Router()

router.get('/students', (req, res) => {
    Student.find((err, students) => {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index', {
            fruits: ['苹果', '香蕉', '橘子', '梨'],
            students
        })
    })
})

router.get('/students/new', (req, res) => {
    res.render('new')
})

router.post('/students/new', (req, res) => {
    // 一、获取表单数据
    // 二、存放至db.json中
    // (1)读取db.json，转为对象
    // (2)push数据
    // (3)转为字符串存储至db.json
    // 三、发送响应
    Student.save(req.body, (err) => {
        if (err) {
            return res.status(500).send('server error')
        }

        res.redirect('/students')
    })
})

router.get('/students/edit', (req, res) => {
    res.render('edit', {
        // Student
    })

    Student.updateById({
        id: 1,
        name: '张小三'
    }, err => {
        if (err) {
            console.log('修改失败')
        }
        console.log('修改成功')
    })
})

router.post('/students/edit', (req, res) => {
    res.send('')
})

router.post('/students/delete', (req, res) => {
    res.send('')
})

module.exports = router