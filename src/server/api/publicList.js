const fs = require('fs')

module.exports = (req, res) => {
    let entrylist;
    switch (req.params.name) {
        case 'entry':
            entrylist = fs.readFileSync('./data/entry.json', { encoding: 'utf-8' })
            break;
        case 'grid':
            entrylist = fs.readFileSync('./data/grid.json', { encoding: 'utf-8' })
            break;
        case 'public':
            entrylist = fs.readFileSync('./data/public.json', { encoding: 'utf-8' })
            break;

        default:
            break;
    }
    res.end(JSON.stringify(entrylist))
}