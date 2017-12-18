<template>
    <div class="public">
        <p class="describe">……></p>
        <div class="public_top">

            <router-link to='/main/public/message'>
                <el-button class="btn">信息管理</el-button>
            </router-link>

            <router-link to='/main/public/activityShow'>
                <el-button class="btn">活动管理</el-button>
            </router-link>
        </div>
        <div class="public_main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$http.post('/admin/menu/public')
                .then((data) => {
                    this.$store.commit('setentry', JSON.parse(data.data).data)
                })
        }
    }

</script>
<style scoped>
    /* .router-link-active button {
        background: #01b0b9;
        color: white;
    } */

    .public {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #eeeeee;
    }

    .router-link-active button {
        background: #01b0b9;
        color: white;
    }

    .describe {
        padding: 0px 20px;
        width: 100%;
        height: 4%;
        line-height: 24px;
        text-align: left;
        color: #333;
    }

    .public_top {
        height: 10%;
        line-height: 1px;
    }

    .public_main {
        width: 100%;
        height: 86%;
        overflow: hidden;
    }
    /*  按钮  */

    .btn {
        margin: 20px 30px 20px 30px;
        border: none;
        width: 146px;
        height: 42px;
    }
</style>