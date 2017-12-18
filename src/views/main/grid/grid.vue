<template>
    <div class="grid">
        <p class="describe">……></p>
        grid
    </div>
</template>
<script>
    export default {
        created() {
            this.$http.post('/admin/menu/grid')
                .then((data) => {
                    this.$store.commit('setentry', JSON.parse(data.data).data)
                })
        }
    }

</script>
<style scoped>
    .describe {
        padding: 0px 20px;
        width: 100%;
        height: 4%;
        line-height: 24px;
        text-align: left;
        color: #333;
    }
</style>