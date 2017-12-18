<template>
    <div class="maincontent">
        <p class="main_tit">基本信息</p>
        <div class="main_tab">
            <div class="tab-left">
                <p><span>责任人</span></p>
                <input type="text" class='tab-left-contents' placeholder="内容区域">
            </div>
            <div class="tab-right">
                <p><span>责任单位</span></p>
                <input type="text" class='tab-right-contents' placeholder="内容区域">
            </div>
        </div>
        <upload-img v-for='(v,i) in $store.state.uploadData' :key='i' :uploadData='v' :idx='i'></upload-img>
        <div class="btn">
            <el-button @click='save_posted' type="success">保存并发布</el-button>
        </div>
    </div>
</template>
<script>
    import uploadImg from '../../../../components/message/upload.vue'
    export default {
        data() {
            return {
                imageUrl: ''
            };
        },
        methods: {
            save_posted(){
                
            }
        },
        components: {
            uploadImg
        }
    }

</script>
<style scoped>
    .maincontent {
        margin: 0 auto;
        width: 92%;
        height: 100%;
        background: white;
        padding: 0 15px;
        text-align: left;
        overflow-y: scroll;
    }

    .maincontent::-webkit-scrollbar {
        display: none
    }

    .main_tit {
        padding: 20px 0 12px 0;
        height: 20px;
        line-height: 20px;
        clear: both;
        font-size: 16px;
    }

    .main_tab {
        height: 60px;
        display: flex;
        justify-content: space-between;
    }

    .tab-left {
        flex: 1;
        height: 60px;
        line-height: 60px;
    }

    .tab-left>p {
        width: 100%;
        height: 20px;
        line-height: 20px;
    }

    .tab-left-contents {
        width: 92%!important;
        height: 40px!important;
        line-height: 40px!important;
        padding-left: 10px;
        background: #fff;
        font-size: 14px;
        border-radius: 10px;
        border:1px solid #eee;
    }

    .tab-right {
        flex: 1;
        height: 60px;
        line-height: 60px;
    }

    .tab-right>p {
        width: 100%;
        height: 20px;
        line-height: 20px;
    }

    .tab-right-contents {
        width: 92%!important;
        height: 40px!important;
        line-height: 40px!important;
        padding-left: 10px;
        background: #fff;
        font-size: 14px;
        border-radius: 10px;
        border:1px solid #eee;
    }
    
    .updata {
        text-align: center;
        margin: 10px 0 10px 0;
        width: 100%;
        height: 220px;
    }

    .updata_tit {
        height: 40px;
        line-height: 40px;
        text-align: left;
    }

    .updata_tit>* {
        margin-right: 15px;
    }

    .address {
        border: 0;
        outline: none;
        width: 98px;
    }

    .describe {
        height: 40px;
        line-height: 40px;
        text-align: left;
        color: #ccc;
    }
    /*  编辑  */

    .edit {
        color: #00afba;
        cursor: pointer;
    }
    /*  添加栏目  */

    .addcolumn {
        color: #00afba;
        cursor: pointer;
    }
    /*  预览  */

    .preview {
        color: #ccc;
        cursor: pointer;
    }
    /*  删除  */

    .del {
        font-size: 12px;
        color: red;
        cursor: pointer;
    }

    .message-uploader {
        padding: 0 4px!important;
    }

    .btn{
        padding:20px 0;
        height:50px;
        line-height: 50px;
        text-align: center;
    }
</style>