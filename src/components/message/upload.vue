<template>
    <div class="updata">
        <p class="updata_tit">
            <input class="address" type="text" placeholder="请输入栏目名称">
            <span class='edit'>{{data.edit}}</span>
            <span class="addcolumn" @click='addcolumn'>{{data.addcolumn}}</span>
            <span class="preview">{{data.preview}}</span>
            <span v-if='idx > 0' class="del" @click='del(idx)'>{{data.del}}</span>
        </p>
        <el-upload name='img1' class="avatar-uploader message-uploader" action="http://localhost:3000/user/upload" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p class="describe">
            <span>图片格式：jpg\png</span>
            <span>图片大小：小于200k</span>
            <span>建议尺寸：宽度大于800px</span>
        </p>
    </div>
</template>
<script>
    export default {
        props:['uploadData','idx'],
        data () {
            return {
                imageUrl: '',
                data: null
            }
        },
        methods: {
            // 上传图片
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
            },
            // 添加栏目
            addcolumn () {
                this.$store.commit('addcolumn')
            },
            // 删除
            del (idx) {
                this.$store.commit('delcolumn', idx)
            }
        },
        created () {
            this.data = this.uploadData
            // console.log(this.idx)
        }
    }

</script>
<style scoped>
    /* img {
        width: 100%;
        height: 100%;
    } */
    /*  输入框  */

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
</style>