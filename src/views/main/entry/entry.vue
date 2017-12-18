<template>
    <div class="entry">
        <p class="describe">……></p>
        <div class="banner">
            <div class="entry_block">
                <el-carousel>
                    <el-carousel-item v-for="item in 4" :key="item">
                        <div class="content">
                            <h3 style="background:#01b0b9;color:#fff;">
                                <p>“{{name}}”</p>
                                <p>{{address}}</p>
                                <p>活动时间：{{date}}</p>
                            </h3>
                            <h3 style="color:#000;border:1px solid #e1e1e1;">
                                <p>“{{name}}”</p>
                                <p>{{address}}</p>
                                <p>活动时间：{{date}}</p>
                            </h3>
                            <h3 style="color:#000;border:1px solid #e1e1e1;">
                                <p>“{{name}}”</p>
                                <p>{{address}}</p>
                                <p>活动时间：{{date}}</p>
                            </h3>
                            <h3 style="color:#000;border:1px solid #e1e1e1;">
                                <p>“{{name}}”</p>
                                <p>{{address}}</p>
                                <p>活动时间：{{date}}</p>
                            </h3>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="public_top">
            <router-link to='/main/entry/msg_act_take'>
                <el-button class="btn">活动信息与报名</el-button>
            </router-link>

            <router-link to='/main/entry/entry_people'>
                <el-button class="btn">人员管理</el-button>
            </router-link>
        </div>
        <div class="entry_tab">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: null,
                address: null,
                date: null
            }
        },
        methods: {
            
        },
        created() {
            // 公共菜单
            this.$http.post('/admin/menu/entry')
                .then((data) => {
                    this.$store.commit('setentry', JSON.parse(data.data).data)
                })
            // 轮播展示内容
            this.$http.post('/_table/banner')
                .then((data) => {
                    this.name = data.data.name
                    this.address = data.data.locationName
                    this.date = data.data.startDate.split('T')[0]
                })
        }
    }

</script>
<style scoped>
    .router-link-active button {
        background: #01b0b9;
        color: white;
    }

    .entry {
        height: 100%;
        overflow-y: scroll;
    }
    /*  描述  */

    .describe {
        padding: 0px 20px;
        width: 100%;
        height: 6%;
        line-height: 36px;
        text-align: left;
        color: #333;
    }

    .banner {
        background: #ffffff;
        width: 100%;
        height: 34%;
        line-height: 244px;
    }

    .public_top {
        height: 8%;
        line-height: 1px;
    }

    .btn {
        margin: 6px 30px 0px 30px;
        border: none;
        width: 146px;
        height: 42px;
    }

    .entry_tab {
        /* height: 52%; */
        overflow: hidden;
    }

    .content h3 {
        height: 99%;
        border-bottom: #e1e1e1;
    }

    .content p {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-weight: 400;
    }

    .content p:nth-child(1) {
        margin-top: 50px;
    }

    .content p:nth-child(3) {
        margin-top: 30px;
    }
</style>