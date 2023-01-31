import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入初始化样式
import '@/assets/styles/base.css'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element-plus所有icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 自己创造的组件
import myElement from '@/components/library' 

const app = createApp(App)
app.use(store).use(router).use(ElementPlus).use(myElement).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
