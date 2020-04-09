/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

const fs = require('fs')

const dbPath = './db.json'

/**
 * 获取所有学生列表
 * return []
 */
exports.find = (callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }

        callback(null, JSON.parse(data).students)
    })
}

/**
* 添加保存学生
*/
exports.save = (student, callback) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }

        let students = JSON.parse(data).students
        student.id = students[students.length - 1].id + 1
        students.push(student)
        const fileData = JSON.stringify({
            students
        })

        fs.writeFile(dbPath, fileData, (err) => {
            if (err) {
                return callback(err)
            }

            callback(null)
        })

    })
}

/**
* 更新学生
*/
exports.update = () => {

}

/**
* 删除学生
*/
exports.delete = () => {

}