<template>
    <div class="activityShow">
        <p class="main_tit">活动列表</p>
        <div class="showMain">
            <div class="show" v-for='(v,i) in showList' :key='i'>
                <div class="showimg"><img class style="width:100%;height:100%;" src="/src/static/img/banner.png"></div>
                <p>{{v.name}}</p>
                <p class="msg">
                    <span>{{v.startDate.split('T')[0].split('-')[0]}}年{{v.startDate.split('T')[0].split('-')[1]}}月{{v.startDate.split('T')[0].split('-')[2]}}日</span>
                    <span>{{v.locationName}}</span>
                </p>
            </div>
            <div class="show last" >
                <router-link to='/main/public/activity/activityIntroduce'><i class="iconfont icon-jia"></i></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showList: []
            }
        },
        created() {
            this.$http.post('/user/imgshow')
                .then((data) => {
                    this.showList = data.data
                })
        }
    }

</script>
<style scoped>
    .activityShow {
        margin: 0 auto;
        padding: 0 20px;
        width: 94%;
        height: 100%;
        overflow: hidden;
    }

    .main_tit {
        padding: 0 24px;
        text-align: left;
        background: white;
        height: 10%;
        line-height: 70px;
        clear: both;
        font-size: 18px;
        color: #000;
    }

    .showMain {
        height: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-y: scroll;
        background: white;
    }

    .show {
        margin: 15px 30px;
        background: #ffffff;
        border: 1px solid #979797;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.50);
        width: 316px;
        height: 244px;
        display: flex;
        flex-direction: column;
    }

    .last {
        border: 1px solid #cccccc;
        width: 316px;
        height: 244px;
        line-height: 244px;
    }

    .last i {
        font-size: 40px;
        font-style: none;
        font-weight: 400;
    }

    .showimg {
        flex: 1;
        width: 316px;
        height: 174px;
    }

    .show p {
        height: 28px;
        line-height: 28px;
    }

    .msg {
        color: #ccc;
    }

    .msg span {
        margin: 0 10px;
    }
</style>