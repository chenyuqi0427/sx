const express = require('express')
const app = express()
const body_parser = require('body-parser')
app.use(body_parser.json())

const multer = require('multer')
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads')
    },
    filename(req, file, cb) {
        cb(null, file.fieldname + '-' + file.originalname)
    }
})
const uploader = multer({storage: storage})

// 设置公共头部信息
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

// 登录
const login = '/admin/loginUser'
const loginUser = require('./api/loginUser.js')
app.post(login, loginUser)

// 注册
const register = '/admin/registerUser'
const registerUser = require('./api/registerUser.js')
app.post(register, registerUser)

// 公共列表   接口 /admin/menu/[public|grid|entry]
const public = '/admin/menu/:name'
const publicList = require('./api/publicList.js')
app.post(public, publicList)

// 一口式受理平台  //////////////////////////////////////////////////////////////////////////////////////

// 居民报名
const _tablePeopleTake  = '/_table/peopleTake'
const tableTakeList = require('./api/entry/tableTakeList.js')
app.post(_tablePeopleTake, tableTakeList)
// 轮播图展示内容
const _tableBanner  = '/_table/banner'
const tableBannerList = require('./api/entry/bannerList.js')
app.post(_tableBanner, tableBannerList)




// 公共服务平台  //////////////////////////////////////////////////////////////////////////////////////
// 图片展示
const imgShow = '/user/imgshow'
const imgShowList = require('./api/public/imgshowList.js')
app.post(imgShow, imgShowList)

// 上传图片
const uploaded = '/user/upload'
const uploadedList = require('./api/public/uploadedList.js')
app.post(uploaded, uploader.single('img1'), uploadedList)

// 选择地址
const changeAdd = '/admin/community/location/root'
const changeAddress = require('./api/public/changeAddress.js')
app.get(changeAdd, changeAddress)

// 添加活动 -> 存取发布的数据信息
const add_act = '/admin/activity/add'
const addActivity = require('./api/public/addActivity.js')
app.post(add_act, addActivity)

// 公共服务平台 -> table表格
const _table = '/tableData/list'
const tableList = require('./api/public/tableList.js')
app.post(_table, tableList)

// 表格数据 -> 邀请居民查询/添加
const _tableAdd = '/_table/add'
const tableAddList = require('./api/public/tableAddList.js')
app.post(_tableAdd, tableAddList)

// 表格数据 -> 备注
const _tableRemark = '/_table/remark'
const tableRemarkList = require('./api/public/tableRemarkList.js')
app.post(_tableRemark, tableRemarkList)

// 表格数据 -> 删除
const _tableDel = '/_table/del'
const tableDelList = require('./api/public/tableDelList.js')
app.post(_tableDel, tableDelList)




app.listen(3000, () => {
    console.log('listen success')
})