// 导出所有的接口请求函数
import base from '@/api/base.js'
import req from '@/api/req.js'
// 获取分类列表
export const getCategoryList = ()=>req.get(base.categoryUrl);

/* 
    获取首页轮播图
*/
export const getBanner=()=>req.get(base.banerUrl)
/* 
    获取首页主体--新鲜好物
*/
export const getNew=()=>req.get(base.findNew)
/* 
    获取人气推荐
*/
export const getHot=()=>req.get(base.findhot)
/* 
    获取产品区块
*/
export const getProduct=()=>req.get(base.product)