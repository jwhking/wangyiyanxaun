<template>
    <div class="home-product">
        <MyPanel :title="item.name" subTitle=" " v-for="item in products" :key="item.name">
            <!-- 使用右侧插槽 -->
            <template #right>
                <div class="sub">
                    <router-link to="/" v-for="ele in item.children" :key="ele.id">
                        {{ ele.name }}
                    </router-link>
                </div>
                <AppMore />
            </template>
            <div class="goods">
                <!-- 左侧 -->
                <router-link to="/" class="left">
                    <img :src="item.picture" alt="">
                </router-link>
                <!-- 右侧 -->
                <div class="right">
                    <ul class="goods-list">
                        <li v-for="good in item.goods" :key="good.id">
                            <MyGoodsItem :good="good" />
                        </li>
                    </ul>
                </div>
            </div>
        </MyPanel>
    </div>
</template>

<script>
import {ref} from 'vue'
import MyPanel from '@/components/MyPanel.vue'
import MyGoodsItem from '@/components/MyGoodsItem.vue'
import {getProduct} from '@/api'
    export default {
        components:{
            MyPanel,
            MyGoodsItem
        },
        setup(){
            const products = ref([])
                const getProductList = ()=>{
                    getProduct().then(res=>{
                        console.log(res.result);
                        if(res.msg=='操作成功'){
                            products.value = res.result
                        }
                    })
                }
                getProductList();
            return{
                products
            }
        }
    }
</script>

<style lang="less" scoped>
.home-product{
    .sub{
        margin-bottom: 2px;
        a{
            font-size: 16px;
            padding: 5px 10px;
            border-radius: 4px;
            margin-right: 7px;
            &:hover{
                background-color: @xtxColor;
                color: #fff;
            }
        }
        a:last-child{
            margin-right: 40px;
        }
    }
    .goods{
        display: flex;
        height: 610px;
        .left{
            width: 240px;
            margin-right: 10px;
            // border: 1px solid #ccc;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .right{
            flex: 1;
            // border: 1px solid #ccc;
            .goods-list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
    }
}
</style>