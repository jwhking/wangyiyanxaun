<template>
 <div class="my-header w">
    <!-- 上面区域 -->
    <div class="head-top">
        <!-- logo -->
        <h1 class="logo">
            <router-link to="/"></router-link>
        </h1>
        <!-- 搜索 -->
        <div class="center">
            <div class="center-search">
                <input type="text" placeholder="618....">
                <button class="search-btn">搜索</button>
            </div>
            <!-- 搜索下面的导航 -->
            <ul class="center-navs">
                <li><a href="#">美食</a></li>
                <li><a href="#">餐厨</a></li>
                <li><a href="#">艺术</a></li>
                <li><a href="#">电器</a></li>
                <li><a href="#">居家</a></li>
                <li><a href="#">洗护</a></li>
                <li><a href="#">孕婴</a></li>
                <li><a href="#">服装</a></li>
                <li><a href="#">杂货</a></li>
            </ul>
        </div>
        <!-- 购物车 -->
        <div class="cart">
            <a href="#">
                <i class="iconfont icon-gouwuche"></i>
                购物车
                <em>2</em>
            </a>
        </div>
    </div>

    <!-- 下面区域 —— 二级导航 -->
    <AppHeaderNav></AppHeaderNav>
 </div>
</template>
<script>
import AppHeaderNav from '@/components/AppHeaderNav.vue'
import { useStore } from 'vuex';
export default {
    components: {
        AppHeaderNav
    },
    setup(){
        const store = useStore();
        // 触发action
        store.dispatch('category/getAllCategory') 
    }

}
</script>
<style lang="less" scoped>
    .my-header{
        padding: 25px 0 0 0;
        height: 120px;
        background-color: #fff;
        .head-top{
            display: flex;
            .logo{
                width: 300px;
                height: 60px;
                a{
                    display: flex;
                    height: 60px;
                    width: 100%;
                    background: url(../assets/images/logo.webp) no-repeat 0 -298px;
                }
            }
            .center{
                flex:1;
                padding-top: 10px;
                .center-search{
                    width: 540px;
                    height: 35px;
                    input{
                        width: 440px;
                        height: 35px;
                        border: 1px solid @xtxColor;
                        border-radius: 20px 0 0 20px;
                        box-sizing: border-box;
                        padding-left: 15px;
                    }
                    .search-btn{
                        float: right;
                        width: 100px;
                        height: 35px;
                        background-color: @xtxColor;
                        border: 0px;
                        border-radius: 0px 20px 20px 0px;
                        color: #fff;
                        &:hover{
                            background-color: rgb(184 184 184 / 80% );
                            cursor: pointer;
                            }
                        }
                    }
                    .center-navs{
                        width: 540px;
                        li{
                            float: left;
                            height: 32px;
                            // padding: 5px;
                            a{
                                font-size: 5px;
                                padding: 0 10px;
                                border-right: 1px solid #ccc;
                                &:hover{
                                    color: @xtxColor;
                                }
                            }
                        }
                        li:last-child a{
                            border-right: 0;
                        }
                        }
            }
            .cart{
                box-sizing: border-box;
                width: 150px;
                height: 35px;
                line-height: 35px;
                border-radius: 20px;
                border: 1px solid @xtxColor;
                text-align: center;
                margin-top: 10px;
                a{
                    color: @xtxColor;
                    font-size: 15px;
                }
                em{
                    display: inline-block;
                    background-color: red;
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    line-height: 20px;
                    font-size: 8px;
                    color: #fff;
                }
            }
        }
    }

</style>