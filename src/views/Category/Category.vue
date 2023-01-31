<template>
 <div class="category w">
    <!-- 面包屑 -->
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!-- 轮播图 -->
    <AppBanner :list="banner"></AppBanner>
    <!-- 分类展示 -->
    <div class="sub-list">
        <h1>全部分类</h1>
        <ul>
            <li v-for="item in category.subCateList" :key="item.id">
                <a href="##">
                    <img :src="item.bannerUrl" alt="">
                    <div class="name">{{ item.name }}</div>
                </a>
            </li>
        </ul>
    </div>
 </div>
</template>
<script>
import {ref,computed} from 'vue';
import AppBanner from '@/components/library/AppBanner.vue';
import {getBanner} from '@/api'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
    components: { AppBanner },
    setup(){
        // 轮播图
        const banner = ref([])
        getBanner().then(res=>{
            // console.log(res);
            if(res.msg=='操作成功'){
                banner.value = res.result 
            }
        }).catch(error=>{
            console.log(error);
        })
        getBanner();
        // 列表
        const store = useStore();
        // console.log(store.state.category.catelist);
        const route = useRoute();
        // console.log(route.params.id);
        //查找路由中跟id相等的分类 
        const category = computed(()=>{
            let cate = {}
            const item = store.state.category.catelist.find(item=>{
                return item.id == route.params.id
            })
            if(item){
                cate = item
            }
            return cate
        })

        return{
            banner,
            category
        }
    }
}
</script>
<style lang="less" scoped>
.category{
    padding: 10px 10px;
    .breadcrumb{
        padding: 20px 10px;
    }
    .sub-list{
        margin: 20px 0;
        h1{
            text-align: center;
            font-weight: normal;
            margin: 10px 0;
            line-height: 100px;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            li{
                width: 140px;
                height: 160px;
                text-align: center;
                margin: 10px 20px;
                img{
                    width: 100px;
                    height: 100px;
                    margin: 10px 0;
                }
                &:hover{
                    .name{
                        color: @xtxColor;
                    }
                }
            }
        }
    }
}

</style>