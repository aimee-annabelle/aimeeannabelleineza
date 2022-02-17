import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import VueRouter from 'vue-router'


// Vue.use(VueRouter);

// import Home from './components/HelloWorld.vue'
// import Days from './components/viewDays.vue' 
// import Buy from './components/buyElectricity.vue' 

// const routes = [{
//     path: '/buy',
//     component: Buy
//   },
//   {
//     path: '/days',
//     component: Days
//   },
//   {
//     path: '/home',
//     component: Home
//   },
// ]

// const router = new VueRouter({
//   routes
// })

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
createApp(App).mount('#app')
