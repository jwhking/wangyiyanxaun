<template>
    <ul class="app-header-nav">
        <li class="catelist">
            <router-link class="link" to="/">首页</router-link>
        </li>
        <li class="catelist" v-for="catelist in catelists" :key="catelist.id" 
            @mouseenter="show(catelist)"
            @mouseleave="hide(catelist)">
            <router-link class="link" :to="'/category/'+catelist.id" @click="hide(catelist)">{{ catelist.name }}</router-link>
            <!-- 弹出层 -->
            <div class="layer" :class="{active:catelist.open}">
                <ul>
                    <li v-for="cateGroupList in catelist.subCateGroupList" :key="cateGroupList.id">
                        <a href="#">
                            <img :src="cateGroupList.categoryList[0].bannerUrl" alt="">
                            <div>{{ cateGroupList.name }}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    setup() {
        const store = useStore()
        // 从仓库里读取分类列表
        const catelists = computed(()=>{
            return store.state.category.catelist
        })
        const show = (catelist)=>{
            catelist.open = true
        }
        const hide = (catelist)=>{
            catelist.open = false
        }
        return{
            catelists,
            show,
            hide
        }
    }
}
</script>
<style lang="less" scoped>
.app-header-nav{
        position: relative;
        z-index: 999;
        .catelist{
            float: left;
            padding: 0px 10px;
            font-weight: bold;
            height: 40px;
            line-height: 40px;
            .link{
                padding-bottom: 7px;
                font-size: 14px;
            }
            &:hover{
                .link{
                    color: @xtxColor;
                    border-bottom: 3px solid @xtxColor;
                }
                .layer{
                    opacity: 0;
                    height: 120px;
                }
                .active{
                    opacity: 1;
                }
            }
        }
        .layer{
            position: absolute;
            left: 0;
            top: 40px;
            width: 1100px;
            height: 0px;
            background-color: #fff;
            // border: 1px solid #ccc;
            // 设置阴影
            box-shadow: 3px 3px 5px #ccc;
            // 设置透明度
            opacity: 0;
            overflow: hidden;
            // 过渡动画
            transition: all 0.5s;
            ul{
                // padding: 2px;
                display: flex;
                li{
                    height: 100px;
                    width: 100px;
                    text-align: center;
                    padding-top: 20px;
                    a{
                        border: 0;
                        font-size: 10px;
                        &:hover{
                            color: @xtxColor;
                        }
                    }
                    img{
                        width: 50px;
                        height: 50px;
                        text-align: center;
                    }
                    &:hover{
                        background-color: rgb(204 204 204 / 30%);
                    }
                }
            }
        }
    }
</style>