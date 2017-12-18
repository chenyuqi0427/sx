<template>
    <div class="invitePeoples">
        <div class="table_tab">
            <!--  头部菜单  -->
            <p class="table_tab_tit">
                <span>邀请名单</span>
                <span @click='addPeople = true'>添加居民</span>
                <span>短信通知</span>
            </p>
            <!--  表格数据  -->
            <el-table :data="page1" height="380" border style="width: 100%">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column prop="name" label="居民姓名">
                </el-table-column>
                <el-table-column prop="tel" label="联系电话">
                </el-table-column>
                <el-table-column prop="sex" label="性别">
                </el-table-column>
                <el-table-column prop="age" label="年龄">
                </el-table-column>
                <el-table-column prop="inform" label="短信通知">
                </el-table-column>
                <el-table-column prop="remark" label="备注">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="addremark(scope.row.name)">备注</el-button>
                        <el-button type="text" size="small" @click="handleClick(scope.row)">查看详情</el-button>
                        <el-button type="text" size="small" @click="tab_del(scope.row.name)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination @current-change='changePage' background layout="prev, pager, next" :total="table_list_len">
            </el-pagination>
            <!--  添加居民弹出框  -->
            <el-dialog class="addPeople" title="添加居民" :visible.sync="addPeople">
                <p class="addPeopleTit">
                    <span>居民信息</span>
                    <input type="text" v-model='search_people_name'>
                    <button @click='search_people_message'>查询</button>
                </p>
                <el-table :data="search_people_m">
                    <!-- <el-table-column type="selection"></el-table-column> -->
                    <el-table-column property="name" label="居民姓名"></el-table-column>
                    <el-table-column property="tel" label="联系电话"></el-table-column>
                    <el-table-column property="sex" label="性别"></el-table-column>
                    <el-table-column property="age" label="年龄"></el-table-column>
                </el-table>
            </el-dialog>
            <!--  添加备注  -->
            <el-dialog class="addremark" title="添加备注" :visible.sync="remark" width="30%">
                <input type="text" v-model='addremark_val' class="addremark_val">
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="addremark_success">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
    import { getCookie } from '../../../../../utils/utils.js'
    export default {
        data() {
            return {
                table_list: [], // 表格总数据
                table_list_len: null, // 数据总条数
                page1: [],  // 第一页数据
                pageSize: 1,  // 默认页数
                count: 10, // 每页数据条数
                addPeople: false,  // 添加居民
                search_people_name: '',  // 查询居民信息
                search_people_m: [],  // 查询到居民数据
                remark: false,  // 添加备注
                addremark_val: null,  // 添加备注-值
                addremark_name: null  // 添加备注-名
            }
        },
        methods: {
            // 更改page页
            changePage(page) {
                this.pageSize = page
                this.page1 = this.table_list.slice((this.pageSize - 1) * this.count, this.pageSize * this.count)
            },
            // 备注
            addremark(val) {
                this.remark = true
                this.addremark_name = val
            },
            // 填写备注确认
            addremark_success() {
                this.remark = false

                this.$http.post('/_table/remark', {
                    remark_name: this.addremark_name,  // 姓名
                    remark_val: this.addremark_val  // 备注信息
                })
                    .then((data) => {
                        this.table_list = data.data.list;
                        this.page1 = this.table_list.slice((this.pageSize - 1) * this.count, this.pageSize * this.count)
                        this.addremark_val = null
                    })
            },
            // 查看详情
            handleClick(val) {
                // console.log(val, '查看详情')
            },
            // 删除
            tab_del(val) {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.$http.post('/_table/del', {
                        delname: val,
                        token: getCookie('token')
                    })
                        .then((data) => {
                            if (data.data === 1001) {
                                this.$message.error('登录已经超时')
                                this.$router.push({ name: 'login', query: { from: this.$route.path } })
                            } else {
                                this.table_list = data.data.list;
                                this.page1 = this.table_list.slice((this.pageSize - 1) * this.count, this.pageSize * this.count)
                            }
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },
            // 查询居民信息
            search_people_message() {
                this.$http.post('/_table/add', {

                    name: this.search_people_name
                })
                    .then((data) => {

                        if (data.data.data === 'error') {
                            this.$message.error('该居民不存在！');
                        }

                        this.search_people_m = [];
                        this.search_people_m.push(data.data);
                    })
            }
        },
        created() {
            this.$http.post('/tableData/list')
                .then((data) => {
                    this.table_list = data.data.list;
                    this.page1 = this.table_list.slice((this.pageSize - 1) * this.count, this.pageSize * this.count)  // 第一页数据
                    this.table_list_len = this.table_list.length
                })
        }
    }

</script>
<style scoped>
    .invitePeoples {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }

    .invitePeoples::-webkit-scrollbar {
        width: 8px;
    }

    .invitePeoples::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .invitePeoples::-webkit-scrollbar-track {
        background: #eee;
    }

    .table_tab {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        background: #ccc;
        text-align: left;
        border: 1px solid #ccc;
    }

    .table_tab_tit {
        padding: 0 .24rem;
        width: 100%;
        height: 75px;
        line-height: 75px;
        background: white;
    }

    .table_tab_tit span {
        margin: 0 .04rem;
    }

    .table_tab_tit span:nth-child(1) {
        font-size: .18rem;
    }

    .table_tab_tit span:nth-child(2) {
        font-size: .14rem;
        color: #01b0b9;
        cursor: pointer;
    }

    .table_tab_tit span:nth-child(3) {
        font-size: .12rem;
        color: #999999;
        cursor: pointer;
    }

    .el-table {
        text-align: center;
    }

    .el-pagination {
        background: white;
        padding-top: 20px;
        height: 50px!important;
        text-align: center;
    }
</style>