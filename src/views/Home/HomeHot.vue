<template>
    <div class="home-hot">
        <MyPanel title='人气推荐' subTitle="人气爆款 不容错过">
            <!-- 使用默认插槽 -->
            <ul class="goods-list" v-if="goods.length">
                <li class="item" v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src="item.listPicUrl" alt="">
                        <div class="title ellipsis-2">{{ item.name }}</div>
                    </router-link>
                </li>
            </ul>
            <div class="goods-list" v-else>
                <el-skeleton style="width: 265px" v-for="i in 4" :key="i" animated>
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                    </template>
                </el-skeleton>
            </div>
        </MyPanel>
    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue'
import {ref,toRefs,reactive} from 'vue'
import {getHot} from '@/api'
    export default {
        components:{
            MyPanel
        },
        setup(){
        // 第一种方法
           const data  = reactive({
            goods:[]
           })
           const getHotList = ()=>{
            getHot().then(res=>{
                // console.log(res);
                if(res.msg=='操作成功'){
                    data.goods = res.result.splice(0,4);
                }
            }).catch(err=>{
                console.log(err);
            })
           }
           getHotList();
        // 第二种方法
            // const goods = ref([])
            // getHot().then(res=>{
            //     console.log(res);
            //     if(res.msg=='操作成功'){
            //         goods.value = res.result.splice(0,4)
            //     }
            // }).catch(err=>{
            //     console.log(err);
            // })
        // 第三种方法
            // const getHotList = async()=>{
            //     try {
            //         const res = await getHot();
            //         console.log(res);
            //         if(res.msg=='操作成功'){
            //             goods.value = res.result.splice(0,4)
            //         }
            //     } catch (error) {
            //       console.log(error);  
            //     }
            // }
            // getHotList();
            return{
                ...toRefs(data),
                getHotList
                // goods
            }
        }
    }
</script>

<style lang="less" scoped>
.home-hot{
    .goods-list{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        .item{
            width: 265px;
            height: 365px;
            background-color: #f5f5f5;
            img{
                width: 265px;
                height: 265px;
            }
            .hoverShadow();
            .title{
                font-size: 16px;
                text-align: center;
                padding: 15px 25px;
            }
        }
    }
}
</style>