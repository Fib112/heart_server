const mysql = require('mysql2')

const connections = mysql.createPool({
    port: '3306',
    database: 'heart',
    password: 'ftxfxy440902.',
    user: 'root',
    host: 'localhost'
})

connections.getConnection((err, conn) => {
    conn.connect((err) => {
        if (err) {
            console.log('连接失败', err)
            return
        }
        console.log('数据库连接成功')
    })
})
module.exports = connections.promise()