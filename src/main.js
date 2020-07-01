import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
// import VueRouter from 'vue-router'
// import User from './components/User'
// import Test from './components/Test'

// Middlewares
Vue.use(vueResource)
// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   routes: [
//     {
//       path: '/',
//       component: User
//     },
//     {
//       path: '/test',
//       component: Test
//     }
//   ]
// })

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   template: '<App />',
//   component: { App }
// })

// new Vue({
//   router,
//   template: `
//     <div id="app">
//       <ul>
//         <li><router-link to="/">User</router-link></li>
//         <li><router-link to="/test">Test</router-link></li>
//       </ul>
//       <router-view></router-view>
//     </div>
//   `,
// }).$mount('#app')