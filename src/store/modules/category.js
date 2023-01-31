import {getCategoryList} from '@/api/index.js'
import {topCategory} from '@/utils/constants.js'

export default{
    namespaced:true,
    state:()=>{
        return{
            catelist:topCategory //默认值，如果请求不到数据时显示
        }
    },
    mutations:{
        setList(state,payload){
            state.catelist=payload
        }
    },
    actions:{
        // 请求后台，加载分类数据
        async getAllCategory({commit}){
            try {
                // 发送请求，请求所有分类类别
                const res = await getCategoryList();
                if(res.code==200){
                    commit('setList',res.data.cateList)
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters:{
    }
}