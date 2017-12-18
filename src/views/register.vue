<template>
    <div class="register">
        <el-form label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号">
                <el-input type="text" v-model='user' style="margin-left:-150px"></el-input>
            </el-form-item>

            <el-form-item class="pasd" label="密码" prop="age">
                <el-input type="password" v-model='pasd' style="margin-left:-150px"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click='register' style="margin-left:-150px">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {
                user: '',
                pasd: ''
            }
        },
        methods: {
            register() {
                this.$http.post('/admin/registerUser', {
                    user: this.user,
                    pasd: this.pasd
                })
                    .then(data => {
                        if (data.data.msg == 'error') {
                            this.$router.push({ name: 'login' })
                        } else {
                            this.$router.push({ name: 'login' })
                        }
                    })
            }
        }
    }

</script>
<style scoped>
    .register {
        margin: 150px auto;
        width: 50%;
        text-align: center;
    }

    .el-form-item__content {
        margin-left: 10!important;
    }

    .el-input {
        width: 70%;
    }

    .pasd {
        margin-top: 50px;
        margin-bottom: 30px;
    }

    button {
        margin: 0 20px;
    }
</style>