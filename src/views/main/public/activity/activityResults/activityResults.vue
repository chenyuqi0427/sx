<template>
    <div class='addmessage'>
        <div class="updata">
            <p class="updata_tit">
                <input class="address" type="text" placeholder="请输入栏目名称">
                <span class='edit'>编辑</span>
                <span class="addcolumn">添加栏目</span>
                <span class="preview">预览</span>
                <!-- <span class="del">删除</span> -->
            </p>
            <el-upload class="avatar-uploader message-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="describe">
                <span>图片格式：jpg\png</span>
                <span>图片大小：小于200k</span>
                <span>建议尺寸：宽度大于800px</span>
            </p>
            <el-button class="getBtn" type="success">保存并发布</el-button>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                imageUrl: ''
            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }

</script>
<style scoped>
    .addmessage {
        width: 100%;
        height: 320px;
        background: white;
    }
    /*  输入框  */

    .updata {
        position: relative;
        text-align: center;
        margin: 10px 0 10px 0;
        width: 100%;
        height: 220px;
    }

    .updata_tit {
        padding: 0 20px;
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
        padding: 0 20px;
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
        padding: 0 20px!important;
    }

    .getBtn {
        position: absolute;
        left: 50%;
        margin-left: -61px;
        bottom: -60px;
    }
</style>