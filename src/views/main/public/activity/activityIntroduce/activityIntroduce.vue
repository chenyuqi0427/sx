<template>
    <div class="activityIntroduce">
        <div class="message">
            <p class="message_m">
                <span>基本信息</span>
                <span>未发布</span>
            </p>
            <div class="me_main">
                <div class="me_main_left">
                    <el-upload name='img1' class="avatar-uploader message-uploader" action="http://localhost:3000/user/upload" :show-file-list="false"
                        :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
                <div class="me_main_right">
                    <p><span>活动名称</span></p>
                    <p class="activityName"><input type="text" v-model='activityName'></p>
                    <p><span>活动开始</span><span>活动结束</span></p>
                    <p class="block">
                        <el-date-picker v-model="startData" type="date" placeholder="选择日期">
                        </el-date-picker>
                        <el-date-picker v-model="endData" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </p>
                    <p><span>请选择地址</span></p>
                    <p>
                        <el-select v-model="provinceList" placeholder="请选择省份" @change='changeprovince'>
                            <el-option v-for="item in province" :key="item.name" :value="item.name">
                            </el-option>
                        </el-select>

                        <el-select v-model="cityList" placeholder="请选择城市" @change='changecity'>
                            <el-option v-for="item in city" :key="item.name" :value="item.name">
                            </el-option>
                        </el-select>

                        <el-select v-model="areaList" placeholder="请选择区县" @change='changearea'>
                            <el-option v-for="item in area" :key="item" :value="item">
                            </el-option>
                        </el-select>

                        <el-select v-model="doorList" placeholder="请选择房号">
                            <el-option v-for="item in door" :key="item" :label="item" :value="item">
                            </el-option>
                        </el-select>
                    </p>
                </div>
            </div>
        </div>
        <upload-img v-for='(v,i) in $store.state.uploadData' :key='i' :uploadData='v' :idx='i'></upload-img>
        <el-button @click='save_posted' type="success">保存并发布</el-button>
    </div>
</template>
<script>
    import uploadImg from '../../../../../components/message/upload.vue'
    export default {
        data() {
            return {
                imageUrl: '',
                // 活动名称
                activityName: null,
                // 活动时间
                startData: new Date(),
                endData: new Date(),
                // 选择城市
                province: [],
                provinceList: '',
                city: [],
                cityList: '',
                area: [],
                areaList: '',
                door: [],
                doorList: ''
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
            },
            // 选择省份
            changeprovince(val) {
                this.cityList = '';
                this.areaList = '';

                this.province.forEach((v, i) => {
                    if (v.name == val) {
                        this.city = v.city
                    }
                });

            },
            // 选择城市
            changecity(val) {

                this.areaList = '';

                this.city.forEach((v, i) => {
                    if (v.name == val) {
                        this.area = v.area
                    }
                });
            },
            // 选择区县
            changearea() {

            },
            // 保存并发布
            save_posted() {
                // 活动名称
                const actName = this.activityName
                // 活动时间
                if (!this.activityName) {
                    this.$message.error('未输入活动名称')
                    return
                }
                if (!this.startData || !this.endData) {
                    this.$message.error('未输入活动日期')
                    return
                }
                if (!this.provinceList || !this.cityList || !this.areaList) {
                    this.$message.error('未输入地址')
                    return
                }
                if (!this.activityName) {
                    this.$message.error('未输入活动名称')
                    return
                }
                // 活动地址
                const address = this.provinceList + this.cityList + this.areaList

                this.$http.post('/admin/activity/add', {
                    categoryId: '活动类别id',
                    name: actName,
                    imagePath: this.imageUrl,
                    startDate: this.startData,
                    endDate: this.endData,
                    locationId: '地点id',
                    locationName: address
                })
                    .then((data) => {
                        if (data.data.msg == 'success') {
                            this.$alert('发布成功！', '', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$router.push({path: '/main/entry'})
                                }
                            })
                        } else {
                            this.$alert('发布失败！', '', {
                                confirmButtonText: '确定',
                            });
                        }
                    })
            }
        },
        components: {
            uploadImg
        },
        created() {
            this.$http.get('/admin/community/location/root')
                .then((data) => {
                    this.province = data.data
                })
        }
    };

</script>
<style scoped>
    .activityIntroduce {
        width: 100%;
        height: 100%;
        background: white;
        overflow-y: auto;
    }

    .activityIntroduce::-webkit-scrollbar {
        width: 8px;
    }

    .activityIntroduce::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .activityIntroduce::-webkit-scrollbar-track {
        background: #eee;
    }
    /*  大盒子  */

    .message {
        width: 100%;
        height: 220px;
        /* background: red; */
        padding-bottom: 40px;
    }
    /*  标题  */

    .message_m {
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }

    .message_m>span:nth-child(1) {
        font-size: 14px;
    }

    .message_m>span:nth-child(2) {
        color: #eee;
    }

    .me_main {
        height: 100%;
        display: flex;
    }
    /*  左  */

    .me_main_left {
        width: 30%;
        position: relative;
    }

    .avatar-uploader * {
        height: 200px!important;
    }
    /*  右  */

    .me_main_right {
        position: relative;
        width: 70%;
    }

    .activityName {
        z-index: 1;
        position: relative;
    }

    .activityName>input {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
    }

    .me_main_right p {
        height: 38px;
        line-height: 38px;
        text-align: left;
    }

    .me_main_right span {
        color: #444;
        font-size: 14px
    }
    /*  输入框  */

    .me_main_right_name {
        width: 100%;
        height: 100%;
        border: 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        /* line-height: 30px; */
    }
    /*  日期  */

    .block {
        width: 100%;
        line-height: 44px;
        text-align: left;
    }

    .el-input__inner {
        height: 0px;
    }

    .el-date-editor {
        width: 40%;
        margin-right: 20px;
    }
    /*  四级菜单  */

    .el-select {
        width: 180px;
        margin-right: 10px;
    }
    /*  输入框  */

    .updata {
        padding: 0 10px;
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
        padding: 50px 20px!important;
    }

    .btn {
        height: 40px;
        line-height: 40px;
    }
</style>