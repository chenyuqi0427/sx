import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        user_name: '',  // 设置登录用户名
        entry: null, // 更新左侧菜单
        uploadData: [
            {
                edit: '编辑',
                addcolumn: '添加栏目',
                preview: '预览',
                del: '删除'
            }
        ],  // 添加栏目
        table_list: []  // 表格数据
    },
    mutations: {
        // 设置登录用户名
        setUser(state, data) {
            state.user_name = data
        },
        // 更新左侧菜单
        setentry(state, data) {
            state.entry = data
        },
        // 上传图片
            // 添加栏目
        addcolumn (state, idx) {
            state.uploadData.push({
                edit: '编辑',
                addcolumn: '添加栏目',
                preview: '预览',
                del: '删除'
            })
        },
            // 删除栏目
        delcolumn (state, idx) {
            state.uploadData.splice(idx, 1);
        }
    }
})

export { store }