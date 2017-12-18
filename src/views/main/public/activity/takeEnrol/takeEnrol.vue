<template>
    <div class="takeEnrol">
        <el-table align='center' :data="page1" tooltip-effect="dark" style="width: 100%">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="name" label="居民姓名">
            </el-table-column>
            <el-table-column prop="tel" label="联系电话">
            </el-table-column>
            <el-table-column prop="inform" label="短信通知">
            </el-table-column>
            <el-table-column prop="take" label="报名备注">
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination @current-change='changePage' background page-size:Number layout="prev, pager, next" :total="table_list_len">
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
                count: 10 // 每页数据条数
            }
        },
        methods: {
            // 更改page页
            changePage(page) {
                this.pageSize = page
                this.page1 = this.table_list.slice( (this.pageSize-1)*this.count, this.pageSize*this.count )
            },
        },
        created() {
            this.$http.post('/tableData/list')
                .then((data) => {
                    this.table_list = data.data.list; // 设置总数据
                    this.page1 = this.table_list.slice( (this.pageSize-1)*this.count, this.pageSize*this.count )  // 第一页数据
                    this.table_list_len = this.table_list.length  // 设置数据长度
                })
        }
    }

</script>
<style scoped>
    .takeEnrol {
        width: 100%;
        height: 100%;

        overflow-y: hidden;
    }

    .takeEnrol::-webkit-scrollbar {
        width: 8px;
    }

    .takeEnrol::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .takeEnrol::-webkit-scrollbar-track {
        background: #eee;
    }
    /*  表格  */

    .takeEnrol_tab {
        width: 100%;
    }

    .el-table {
        height: 450px;
        text-align: center;
        overflow-y: scroll;
    }

    .el-table::before {
        display: none;
    }
    /*  分页器  */

    .block * {
        height: 100px;
        background: white;
    }

    .el-pagination {
        height: 100%;
    }

    .el-table th .cell {
        height: 50px!important;
        vertical-align: middle;
        width: 100%;
        box-sizing: border-box;
    }

    .el-pagination{
        padding-top:20px;
        height:50px!important;
    }
</style>