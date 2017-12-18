const mockjs = require('mockjs');
const fs = require('fs')
const list = './data/table_list.json'

module.exports = (req, res) => {
    // const data = mockjs.mock({
    //     'list|100':[
    //         {
    //             'id|+1': 1,    // id
    //             'name': '@cname',   // 居民姓名
    //             'tel': /^1[385][1-9]\d{8}/, // 联系电话
    //             'sex|1': ['男', '女'], // 联系电话
    //             'age|40-60': 0,     // 年龄
    //             'inform|1': ['已通知','未通知'],  // 短信通知
    //             'remark|1': "---" // 备注
    //         }
    //     ]
    // })

    // fs.writeFileSync('./data/a.json', JSON.stringify(data))
    const data = JSON.parse(fs.readFileSync(list, { encoding: 'utf-8' }))

    res.end(JSON.stringify(data))
}