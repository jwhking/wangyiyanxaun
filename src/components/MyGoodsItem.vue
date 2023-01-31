<template>
    <div class="goods-item">
        <router-link to="/" class="images">
            <img :src="good.picture" alt="">
        </router-link>
        <div class="title ellipsis-2">{{ good.name }}</div>
        <div class="type ellipsis">{{ good.desc }}</div>
        <div class="price">￥{{ good.price }}</div>
        <div class="extra">
            <router-link to="/">
                <span>发现更多</span>
                <span>发现更多宝贝</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            good:{
                type:Object,
                default:()=>{}
            }
        }
    }
</script>

<style lang="less" scoped>
.goods-item{
    width: 200px;
    height: 300px;
    position: relative;
    border: 1px solid #ccc;
    text-align: center;
    margin-bottom: 7px;
    overflow: hidden;
    transition: all .5s;
    
    .images{
        width: 160px;
        height: 160px;
        margin: 0 auto;
        img{
            width: 160px;
            height: 160px;
        }
    }
    .title{
        font-size: 16px;
    }
    .type{
        font-size: 14px;
        color: #ccc;
        margin: 10px;
    }
    .price{
        font-size: 16px;
        color: @priceColor;
    }
    .extra{
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: @xtxColor;
        height: 80px;
        right: 0;
        transform: translate3d(0,100%,0);
        transition: all .5s;
        span{
            margin: 10px 0;
            display: block;
            text-align: center;
            color: #fff;
            font-size: 16px;
        }
        span:lsat-child{
            font-size: 14px;
        }
    }
    &:hover{
        border: 2px solid @xtxColor;
        .extra{
            transform: none;
        }
    }
}
</style>