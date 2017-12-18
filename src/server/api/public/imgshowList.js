const fs = require('fs')
const list = './data/addActivity.json'

module.exports = (req, res) => {
    // 读取文件
    const data = JSON.parse(fs.readFileSync(list, { encoding: 'utf-8' }))

    res.end(JSON.stringify(data.list))
}