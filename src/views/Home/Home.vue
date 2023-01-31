<template>
   <div class="home w">
      <!-- 轮播图 -->
      <HomeBaaner></HomeBaaner>
      <!-- 新鲜好物 -->
      <HomeNew></HomeNew>
      <!-- 人气推荐 -->
      <HomeHot></HomeHot>
      <!-- 产品区块 -->
      <HomeProduct></HomeProduct>
   </div>
</template>
<script>
import HomeBaaner from '@/views/Home/HomeBaaner.vue';
import HomeNew from './HomeNew.vue';
import HomeHot from './HomeHot.vue'
import HomeProduct from './HomeProduct.vue';
export default {
   components:{
      HomeBaaner,
      HomeNew,
      HomeHot,
      HomeProduct
   }

}
</script>
<style lang="less" scoped>


</style>