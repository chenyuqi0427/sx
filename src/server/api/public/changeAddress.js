const select_list = require('../../data/select_list.json')

module.exports = (req, res) => {
    res.end(JSON.stringify(select_list))
}