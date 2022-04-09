const connections = require('./dbConfig')

async function queryUser(openid) {
    const statement = `SELECT openid FROM user WHERE openid = ?;`
    const [result] = await connections.execute(statement, [openid])
    if (!result.length) {
        return -1
    } else {
        return result[0]
    }
}

module.exports = queryUser