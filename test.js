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

const query = connections.promise()

async function queryInfo() {
    const res = await query.execute(`SELECT openid from user WHERE openid = ?;`, ['of4M_47m8aVOjXjjLETbENjebq0M'])
    console.log(res)
}
// queryInfo()

async function createUser(openid, nickName, avatarUrl) {
    const statement = `
    INSERT INTO user (openid, nickName, avatarUrl)
              VALUES (?, ?, ?)
    `
    const res = await connections.execute(statement, [openid, nickName, avatarUrl])
    console.log('res', res, typeof res)
}
createUser('sdoivjnsffivjs', 'sv', 'sdmvisndvss')