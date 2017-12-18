const table_list = require('../../data/table_list.json')
const fs = require('fs')

module.exports = (req, res) => {

    const search_name = req.body.name

    table_list.list.forEach((v,i) => {
       if (v.name === search_name) {
           res.end(JSON.stringify(v))
       }
    })
    res.end(JSON.stringify({
        data:'error'
    }))
}