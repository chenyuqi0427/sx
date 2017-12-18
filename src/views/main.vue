<template>
    <div id="app">
       <mains></mains>
    </div>
</template>
<script>
    import mains from './main/mains.vue'
    export default {
        components: {
            mains
        }
    }
</script>
<style scoped>
    .el-header {
        padding: 0;
    }

    .el-header,
    .el-footer {
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .brand {
        z-index: 13;
        font-family: "AndaleMono";
        line-height: 60px;
        font-size: 18px;
        font-weight: bold;
        background: #4E96F7!important;
        width: 180px;
        text-align: center;
    }

    .brand a {
        color: #fff;
        font-family: Helvetica Neue;
        font-style: italic;
        font-kerning: initial;
        font-size: 20px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        line-height: 1;
        padding-bottom: 2px;
    }

    .brand a::before {
        content: '';
        width: 2px;
        height: 6px;
        display: block;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 40px;
        left: 28px;
    }

    .brand a::after {
        content: '';
        width: 2px;
        height: 6px;
        display: block;
        background: rgba(255, 255, 255, 0.2);
        position: absolute;
        top: 40px;
        left: 120px;
    }
    .more:after {
        transition: all .2s ease-in-out;
        content: '';
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -4px;
        width: 6px;
        height: 6px;
        border-top: 1px solid black;
        border-right: 1px solid black;
        transform: rotate(45deg);
        transform-origin: 50%;
    }
    .el-aside {
        padding:0;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: #D3DCE6;
        color: #333;
        line-height: 200px;
    }
    .el-aside::-webkit-scrollbar{display: none}
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        overflow: hidden;
    }


    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    /*  头部  */

    .el-row {
        margin-bottom: 20px;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
        height: 60px;
    }
    
    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        min-height: 36px;
        height: 60px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>