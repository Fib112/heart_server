const connections = require('./dbConfig')

async function createUser(openid, nickName, avatarUrl) {
    const statement = `
    INSERT INTO user (openid, nickName, avatarUrl)
              VALUES (?, ?, ?)
    `
    await connections.execute(statement, [openid, nickName, avatarUrl])
}