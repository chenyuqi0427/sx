const fs = require('fs')
const list = './data/addActivity.json'
module.exports = (req, res) => {
    // 读取数据并转换为对象
    
    const data = JSON.parse(fs.readFileSync(list, { encoding: 'utf-8' }))
    
    data.list.push(req.body)

    fs.writeFileSync(list, JSON.stringify(data))

    res.end(JSON.stringify({
        msg:'success'
    }))
}