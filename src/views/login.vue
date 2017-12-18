<template>
    <div class="login" v-loading="loading">
        <el-form  label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号">
                <el-input type="text" v-model='user' style="margin-left:-150px"></el-input>
            </el-form-item>

            <el-form-item class="pasd" label="密码" prop="age">
                <el-input type="password" v-model='pasd' style="margin-left:-150px"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click='login' style="margin-left:-150px">登录</el-button>
                <router-link to='/register'><el-button>注册</el-button></router-link>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import { setCookie } from '../utils/utils.js'
    export default {
        data() {
            return {
                user: '',
                pasd: '',
                loading: false
            }
        },
        methods: {
            login() {
                this.loading = true
                this.$http.post('/admin/loginUser', {
                    user: this.user,
                    pasd: this.pasd
                })
                    .then(data => {
                        if (data.data.msg == 'success') {
                            this.$store.commit('setUser', this.user)
                            setCookie('token', data.data.token)
                            // 成功
                            setTimeout(()=>{
                                this.$router.push({path: this.$route.query.from || '/main'})
                                // 设置用户名
                                this.$store.commit('setUser',this.user)
                            },2000)
                        } else {
                            // 未匹配账号密码 去往注册页面
                            this.$router.push({name: 'register'})
                        }
                    })
            }
        }
    }

</script>
<style scoped>
    .login {
        margin: 150px auto;
        width: 50%;
        text-align: center;
    }
    .el-form-item__content{
        margin-left:10!important;
    }
    .el-input{
        width:70%;
    }
    .pasd{
        margin-top:50px;
        margin-bottom:30px;
    }
    button{
        margin:0 20px;
    }
</style>