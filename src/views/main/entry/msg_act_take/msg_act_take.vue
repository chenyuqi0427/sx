<template>
    <div class="entry_activity">
        <div class="activity_message">
            <h2>活动信息</h2>
            <p>
                <span>活动地点：</span><span>社区居委会活动室</span>
            </p>
            <p>
                <span>温馨提示：</span><span>请携带有效证件前往，如身份证</span>
            </p>
        </div>
        <div class="enrol">
            <h2>居民报名</h2>
            <div class="enrol_msg">
                <div class="msg_left">
                    <p><span>姓名*</span></p>
                    <input type="text" placeholder="文本框内容" v-model='peo_name'>
                </div>
                <div class="msg_right">
                    <p><span>联系电话*</span></p>
                    <input type="text" placeholder="文本框内容" v-model='peo_tel'>
                </div>
            </div>
            <div class="enrol_remark">
                <p><span>备注信息*</span></p>
                <input type="text" placeholder="文本框内容" v-model='peo_remark'>
            </div>
        </div>
        <div class="public_top">
            <el-button class="btn" @click='takePartIns'>报名</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                peo_name: null,
                peo_tel: null,
                peo_remark: null
            }
        },
        methods: {
            takePartIns() {
                if (!this.peo_name) {
                    this.$message.error('未输入姓名')
                    return
                }
                if (!this.peo_tel) {
                    this.$message.error('未输入联系电话')
                    return
                }
                if (!this.peo_remark) {
                    this.$message.error('未输入备注信息')
                    return
                }
                this.$http.post('/_table/peopleTake', {
                    name: this.peo_name,
                    tel: this.peo_tel,
                    remark: this.peo_remark
                })
                .then((data) => {
                    console.log(data)
                })
            }
        }
    }
</script>
<style scoped>
    .entry_activity {
        margin: 0 auto;
        width: 98%;
        height: 100%;
        overflow-y: hidden;
    }

    .activity_message {
        padding: 0 20px;
        background: #ffffff;
        height: 142px;
        text-align: left;
    }

    .activity_message h2 {
        height: 50px;
        line-height: 50px;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #212121;
        font-style: normal;
        font-weight: 400;
    }

    .activity_message p {
        height: 34px;
        line-height: 34px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #212121;
    }
    /*  居民报名  */

    .enrol {
        margin-top: 20px;
        padding: 0px 10px 10px 10px;
        background: white;
        text-align: left;
    }

    .enrol h2 {
        height: 50px;
        line-height: 50px;
        font-family: MicrosoftYaHei;
        font-size: 18px;
        color: #212121;
        font-style: normal;
        font-weight: 400;
    }

    .enrol_msg {
        padding: 0 0px;
        height: 64px;
        line-height: 64px;
        display: flex;
        justify-content: space-between;
    }
    /*  姓名  */

    .msg_left {
        width: 46%;
        height: 100%;
        line-height: 1px;
        text-align: left;
        color: #ccc;
    }

    .msg_left p {
        width: 100%;
        height: 26px;
        line-height: 26px;
    }

    .msg_left input {
        padding-left: 10px;
        width: 98%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border-radius: 4px;
        background: none;
        border: 1px solid #ccc;
    }
    /*  联系电话  */

    .msg_right {
        width: 46%;
        height: 100%;
        line-height: 1px;
        text-align: left;
        color: #ccc;
    }

    .msg_right p {
        width: 100%;
        height: 26px;
        line-height: 26px;
        text-align: left;
    }

    .msg_right input {
        padding-left: 10px;
        width: 98%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border-radius: 4px;
        background: none;
        border: 1px solid #ccc;
    }
    /*  备注信息  */

    .enrol_remark {
        /* padding:0 0px; */
        height: 64px;
        line-height: 64px;
        display: flex;
        flex-direction: column;
        color: #ccc;
    }

    .enrol_remark p {
        width: 100%;
        height: 26px;
        line-height: 26px;
        text-align: left;
    }

    .enrol_remark input {
        padding-left: 10px;
        width: 99%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        border-radius: 4px;
        background: none;
        border: 1px solid #ccc;
    }

    .public_top {
        height: 100px;
        line-height: 100px;
        background: white;
    }
    /*  按钮  */

    .btn {
        margin: 20px 30px 20px 30px;
        border: none;
        width: 116px;
        height: 42px;
        background: #01b0b9;
        color: white;
    }
</style>