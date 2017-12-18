const fs = require('fs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    const delname = req.body.delname  // 名字

    var data = JSON.parse(fs.readFileSync('./data/table_list.json', { encoding: 'utf-8' }))

    jwt.verify(req.body.token, '1508B', function(error, decoded) {
        console.log(error)
        if (error) {
            error = 1001 // 登录超时
            res.end(JSON.stringify(error))
            return
        } else {
            data.list.forEach((v,i) => {
                if (v.name  === delname) {

                    data.list.splice(i, 1)

                    fs.writeFileSync('./data/table_list.json', JSON.stringify(data))

                    res.end(JSON.stringify(data))
                }
            })
        }
    });
    
}