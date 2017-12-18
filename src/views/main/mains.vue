<template>
    <el-main id="el-main">
        <el-container>
            <!--  侧边列表  -->
            <el-aside width="250px" height="100%">
                <p class="sx_tit">三鑫智慧社区</p>
                <p class="sx_pt">公共管理平台</p>
                <p class="sx_tx">
                    <span><img src="/src/static/img/user.jpg"></span>
                </p>
                <p class="sx_user">
                    <span>管理员</span>
                    <span>{{$store.state.user_name}}</span>
                </p>
                <!--  菜单列表  -->
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu default-active="2" class="el-menu-vertior=" background-color="#29282e" text-color="#808BA2" active-text-color="#E1E8EF">
                            
                            <el-menu-item v-if='!item.submenus' :index="ind.toString()" v-for='(item, ind) in $store.state.entry' :key='ind'>{{item.name}}</el-menu-item> 
                            <el-submenu v-if='item.submenus' :index="ind.toString()" v-for='(item, ind) in $store.state.entry' :key='ind'>
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>{{item.name}}</span>
                                </template>

                                <el-menu-item v-if='!item_sub.submenus'  :index="ind+'-'+ind_sub" v-for='(item_sub, ind_sub) in item.submenus' :key='ind_sub'>{{item_sub.name}}</el-menu-item> 
                                <el-submenu v-if='item_sub.submenus' :index="ind+'-'+ind_sub" v-for='(item_sub, ind_sub) in item.submenus' :key='ind_sub'>
                                    <template slot="title">{{item_sub.name}}</template>
                                    <el-menu-item :index="ind+'-'+ind_sub+'-'+ind_sub_sub" v-for='(v, ind_sub_sub) in item_sub.submenus' :key='ind_sub_sub'>{{v.name}}</el-menu-item>
                                </el-submenu> 

                            </el-submenu>

                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <!--  头部  -->
                <el-header>
                    <el-row :gutter="0">
                        <el-col :span="4" background='red'>
                            <div class="grid-content bg-purple"><router-link class="main_route" to='/main/entry'>一口式受理平台</router-link></div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple"><router-link class="main_route" to='/main/grid'>网格化管理平台</router-link></div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple"><router-link class="main_route" to='/main/public'>公共服务平台</router-link></div>
                        </el-col>
                        <el-col :span="6" :push='6'>
                            <div class="grid-content bg-purple users" style='color:#828282; font-size:14px; font-weight:300'>
                                <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#fff" text-color="#808BA2" active-text-color="#f0f0f0">
                                    <el-submenu index="1">
                                        <template slot="title">
                                            <span class="touxiang"><img class style="width:100%;" src="/src/static/img/user.jpg"></span>
                                            <span>管理员</span>
                                            <span>{{$store.state.user_name}}</span>
                                        </template>
                                        <el-submenu index="1-1">
                                            <template slot="title">
                                                <span>个人资料</span>
                                            </template>
                                        </el-submenu>
                                        <el-submenu index="1-2">
                                            <template slot="title">
                                                <span>设置</span>
                                            </template>
                                        </el-submenu>
                                        <el-submenu index="1-3">
                                            <template slot="title">
                                                <span @click='user_exit'>退出</span>
                                            </template>
                                        </el-submenu>
                                    </el-submenu>
                                </el-menu>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <!--  主体  -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-main>
</template>
<script>
    import { delCookie } from '../../utils/utils.js'
    export default {
        data() {
            return {
                menulist: null
            }
        },
        methods: {
            user_exit() {
                delCookie('token');
                this.$router.push({name: 'login'})
            }
        }
    }

</script>
<style scoped>
    /*  路由样式  */
    .main_route{
        color:#ccc;
        display: block;
    }
    .router-link-active{
        background:#01b0b9;
        color:white;
    }
    *::-webkit-scrollbar {
        display: none
    }

    #el-main {
        overflow: hidden;
    }
    .el-col-6 {
          width: 20%;  
    }
    .el-header,
    .el-footer {
        color: #333;
        text-align: center;
        line-height: 56px;
    }

    .el-header {
        height: 56px!important;
        padding: 0;
        background: #ffffff;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.50);
    }

    .el-aside {
        height: 100%;
        color: #333;
        text-align: center;
        line-height: 200px;
        background: #29282e;
    }

    .el-main {
        height:100%;
        padding: 0;
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        overflow-y: auto;
    }

    .el-main::-webkit-scrollbar {
        display: none
    }
    .el-menu{
        text-align: left;
    }
    .el-container {
        margin-bottom: 40px;
        height: 100%;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    /*    */

    .el-row {
        margin-bottom: 20px;
        overflow: auto;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }
    .el-icon-location{
         vertical-align: middle; 
    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        font-size: 14px;
        font-weight: 600;
        color: #ccc;
        z-index: 10;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .touxiang {
        display: inline-block;
        width: 35px;
        height: 35px;
        border: 1px solid #ccc;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
        overflow: hidden;
    }

    .touxiang>img {
        width: 100%!important;
        height: 100%!important;
        z-index: 10;
        vertical-align: top;
    }

    .sx_tit {
        width: 100%;
        height: 60px;
        text-align: center;
        font-family: JLinXin;
        font-size: 20px;
        color: #ffffff;
        line-height: 80px;
    }

    .sx_pt {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-family: Jxixinkai;
        font-size: 14px;
        color: #ffffff;
        text-align: center;
    }

    .sx_tx {
        padding: 20px 0;
        width: 100%;
        height: 72px;
        line-height: 72px;
        text-align: center;
    }

    .sx_tx>span {
        display: inline-block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid white;
        z-index: 1;
        overflow: hidden;
    }

    .sx_tx>span>img {
        width: 100%;
        height: 100%;
    }

    .sx_user {
        padding-bottom: 20px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: white;
    }
</style>