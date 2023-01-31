<template>
    <div class="home-new">
        <MyPanel title='新鲜好物' subTitle="新鲜出炉 品质靠谱">
            <!-- 使用右侧插槽 -->
            <template #right>
                <AppMore path="/" />
            </template>
            <!-- 使用默认插槽 -->
            <ul class="goods-list" v-if="goods.length">
                <li class="item" v-for="item in goods" :key="item.id">
                    <router-link to="/">
                        <img :src="item.listPicUrl" alt="">
                        <div class="title ellipsis">{{ item.name }}</div>
                        <div class="price">￥{{ item.retailPrice }} <del>{{item.counterPrice}}</del></div>
                    </router-link>
                </li>
            </ul>
            <!-- 骨架屏 -->
            <div class="goods-list" v-else>
                <el-skeleton style="width: 265px" v-for="i in 4" :key="i" animated>
                    <template #template>
                        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
                        <div style="padding: 14px">
                            <el-skeleton-item variant="h3" style="width: 50%" />
                            <div style="
                          display: flex;
                          align-items: center;
                          justify-items: space-between;
                          margin-top: 16px;
                          height: 16px;
                        ">
                                <el-skeleton-item variant="text" style="margin-right: 16px" />
                                <el-skeleton-item variant="text" style="width: 30%" />
                            </div>
                        </div>
                    </template>
                </el-skeleton>
            </div>
        </MyPanel>
    </div>
</template>

<script>
import MyPanel from '@/components/MyPanel.vue'
import {ref} from 'vue'
import {getNew} from '@/api'
    export default {
        components:{
            MyPanel
        },
        setup(){
            const goods = ref([])
            const getNewList=async()=>{    
            try {
                    const res = await getNew();
                    // console.log(res);
                    if(res.code=='200'){
                        goods.value = res.data.result.splice(0,4);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            getNewList();
        // 另外的写法
            // getNew().then(res=>{
            //     console.log(res);
            //     if(res.code==200){
            //         goods.value = res.data.result.splice(0,4);
            //     }
            // }).catch(error=>{
            //     console.log(error);
            // })
            // getNew();
            return{
                goods
            }
        }
    }
</script>

<style lang="less" scoped>
.home-new{
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
            .price{
                text-align: center;
                font-size: 16px;
                color: @priceColor;
                del{
                    color: #666;
                }
            }
        }
    }
}
</style>