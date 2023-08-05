import { createApp } from 'vue'
import App from './App.vue'
import HeaderVue from './pages/HeaderVue.vue'

const app = createApp(App)

// 中间写全局组件的注册
// app.component("Header", HeaderVue)

app.mount('#app')
