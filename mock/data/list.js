const list = [];
for (let  i = 1; i <= 100; i++) {
    list.push({
        id: i,
        name: '陈宇琦'+i,
        tel: 18614063456,
        message: '已通知',
        take: '-'
    })
}
module.exports = {
    list
}
