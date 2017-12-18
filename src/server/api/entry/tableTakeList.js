const fs = require('fs')
const list = './data/table_list.json'

module.exports = (req, res) => {
    
    // 读取文件
    const data = JSON.parse(fs.readFileSync(list, { encoding: 'utf-8' }))

    data.list.unshift(req.body)

    fs.writeFileSync(list, JSON.stringify(data))

    res.end(JSON.stringify(1))
}