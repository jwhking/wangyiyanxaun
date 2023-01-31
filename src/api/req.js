// axios 二次封装
import axios from 'axios'

const service = axios.create({
    baseURL:'',
    timeout:5000
}) 

// 响应拦截
service.interceptors.request.use(config=>{
    return config
})

// 响应拦截
service.interceptors.response.use(res=>{
    return res.data
},err=>{
    return pormise.reject(err)
})

export default service
