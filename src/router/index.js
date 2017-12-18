import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import { getCookie } from '../utils/utils.js'

// 登录
import login from '../views/login.vue'
// 注册
import register from '../views/register.vue'
// 主模板
import main from '../views/main.vue'
// 一级菜单 -> entry
import entry from '../views/main/entry/entry.vue'
// 一级菜单 -> grid
import grid from '../views/main/grid/grid.vue'
// 一级菜单 -> public
import publics from '../views/main/public/public.vue'
// 一口式受理平台     /////////////////////////////////////////////////////////
// 活动信息与报名
import msg_act_take from '../views/main/entry/msg_act_take/msg_act_take.vue'
// 人员管理
import entry_people from '../views/main/entry/entry_people/entry_people.vue'



// 公共服务平台     /////////////////////////////////////////////////////////

// 信息管理
import public_message from '../views/main/public/message/message.vue'
// 活动管理
import public_activity from '../views/main/public/activity/activity.vue'
// 活动展示
import public_activityShow from '../views/main/public/activity/activityshow.vue'

// 活动管理 -> 活动介绍
import activityIntroduce from '../views/main/public/activity/activityIntroduce/activityIntroduce.vue'
// 活动管理 -> 邀请居民
import invitePeoples from '../views/main/public/activity/invitePeoples/invitePeoples.vue'
// 活动管理 -> 居民报名
import takeEnrol from '../views/main/public/activity/takeEnrol/takeEnrol.vue'
// 活动管理 -> 活动总结
import activityResults from '../views/main/public/activity/activityResults/activityResults.vue'




let router = new Router({
    routes: [
        // 登录
        {
            path: '/',
            name: 'login',
            component: login
        },
        // 注册
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/main',
            name: 'main',
            component: main,
            redirect: '/main/entry',
            children: [
                {
                    path: 'entry',
                    name: 'entry',
                    component: entry,
                    redirect: '/main/entry/msg_act_take',
                    children: [
                        {
                            path: 'msg_act_take',
                            name: 'msg_act_take',
                            component: msg_act_take
                        },
                        {
                            path: 'entry_people',
                            name: 'entry_people',
                            component: entry_people
                        }
                        
                    ]
                },
                {
                    path: 'grid',
                    name: 'grid',
                    component: grid
                },
                {
                    path: 'public',
                    name: 'public',
                    component: publics,
                    redirect: '/main/public/message',
                    children: [
                        {
                            path: 'message',
                            name: 'message',
                            component: public_message
                        },
                        {
                            path: 'activityShow',
                            name: 'activityShow',
                            component: public_activityShow,
                        },
                        {
                            path: 'activity',
                            name: 'activity',
                            component: public_activity,
                            redirect: '/main/public/activity/activityIntroduce',
                            children: [
                                {
                                    path: 'activityIntroduce',
                                    name: 'activityIntroduce',
                                    component: activityIntroduce
                                },
                                {
                                    path: 'invitePeoples',
                                    name: 'invitePeoples',
                                    component: invitePeoples
                                },
                                {
                                    path: 'takeEnrol',
                                    name: 'takeEnrol',
                                    component: takeEnrol
                                },
                                {
                                    path: 'activityResults',
                                    name: 'activityResults',
                                    component: activityResults
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
router.beforeEach((to, from, next) => {
    // console.log(from)
    // console.log(to)
    if (to.name == 'login' || to.name == 'register') {

        next()

    } else {

        if (getCookie('token')) {
            next()
        } else {
            next('/login')
        }

    }

})
export default router