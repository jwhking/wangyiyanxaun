<template>
    <el-carousel height="500px">
        <el-carousel-item v-for="( item ) in list" :key="item.id">
            <img :src="item.imgUrl" alt="轮播图片">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name:'AppBanner',
    props:{
        list:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>