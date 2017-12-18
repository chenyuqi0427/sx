<template>
    <div class="entry_message">
        <!--  头部菜单  -->
        <p class="table_tab_tit">
            <span>报名名单</span>
        </p>
        <!--  表格数据  -->
        <div class="entry_tab">
            <el-table :data="page1" height="380" border style="width: 100%">
                <el-table-column prop="name" label="居民姓名">
                </el-table-column>
                <el-table-column prop="tel" label="联系电话">
                </el-table-column>
                <el-table-column prop="remark" label="备注信息">
                </el-table-column>
                <el-table-column prop="" label="报名时间">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="tab_del(scope.row.name)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-pagination class="entry_pagination" @current-change='changePage' background layout="prev, pager, next" :total="table_list_len">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                table_list: [], // 表格总数据
                table_list_len: null, // 数据总条数
                page1: [],  // 第一页数据
                pageSize: 1,  // 默认页数
                count: 10, // 每页数据条数
            }
        },
        methods: {
            // 更改page页
            changePage(page) {
                this.pageSize = page
                this.page1 = this.table_list.slice( (this.pageSize-1)*this.count, this.pageSize*this.count )
            }
        },
        created() {
            // 表格数据
            this.$http.post('/tableData/list')
                .then((data) => {
                    console.log(data)
                    this.table_list = data.data.list;
                    this.page1 = this.table_list.slice( (this.pageSize-1)*this.count, this.pageSize*this.count )  // 第一页数据
                    this.table_list_len = this.table_list.length
                })
        }
    }

</script>
<style scoped>
    .entry_message {
        height: 100%;
        overflow-y: scroll; 
    }

    .table_tab_tit {
        padding: 0 .24rem;
        width: 100%;
        height: 20%;
        line-height: 75px;
        background: white;
        text-align: left;
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

    .entry_tab {
        height: 80%;
        overflow-y: scroll;
    }

    .el-table {
        text-align: center;
    }

    .el-pagination {
        background: white;
        padding: 10px 0;
        text-align: center;
        height: 50px!important;
        overflow: hidden;
    }

    .el-pager {
        height: 32px!important;
    }
</style>