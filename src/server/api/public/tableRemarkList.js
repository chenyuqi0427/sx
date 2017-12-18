const fs = require('fs')

module.exports = (req, res) => {
    const remarkname = req.body.remark_name  // 名字
    const remarkval = req.body.remark_val  // 备注信息
    
    var data = JSON.parse(fs.readFileSync('./data/table_list.json', { encoding: 'utf-8' }))
    
    data.list.forEach((v,i) => {
        if (v.name  === remarkname) {
            v.remark = remarkval
            fs.writeFileSync('./data/table_list.json', JSON.stringify(data))
            res.end(JSON.stringify(data))
        }
    })
}