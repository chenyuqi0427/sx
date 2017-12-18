<template>
    <div class="public_activity">
        <el-container>
            <el-header class="header">
                 <el-breadcrumb separator="" class="el_breadcrumb">
                    <el-breadcrumb-item :to="{ path: '/main/public/activity/activityIntroduce' }">活动介绍</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/public/activity/invitePeoples' }">邀请居民</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/public/activity/takeEnrol' }">居民报名</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/public/activity/activityResults' }">活动总结</el-breadcrumb-item>
                    <el-breadcrumb-item></el-breadcrumb-item>
                </el-breadcrumb> 
            </el-header>
            <el-main class="main">
                 <router-view></router-view> 
            </el-main>
        </el-container>
    </div>
</template>
<script></script>
<style scoped>
    .public_activity{
        height:100%;
        overflow: hidden;
    }
    /*  布局  */
    .el-container{
        height:100%;
    }
    .header{
        height:10%!important;
        background: #eee;
        border:1px solid #cccccc;
    }
    .el_breadcrumb{
        height:100%;
        line-height: 55px;
    }
    .el-breadcrumb__item{
        margin:0 20px;
    }
    .main {
        padding:0;
        margin:0;
        height:90%!important;
        overflow: hidden;
    }
    .el-main::-webkit-scrollbar{display: none}
</style>