import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import('../components/home/Home.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: ()=> import('../components/home/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=>import('../components/home/Login.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('../views/Category.vue'),
        children: [
          {
            path: ':id',
            name: 'BlogEdit',
            component: ()=> import('../components/categories/Edit.vue')
          }
        ]
      },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

// router.beforeEach((to, from, next)=>{
//   let auth = (localStorage.getItem('user') == null ? false:true)

//   if(to.name !== 'Login' && auth == false) next({name: 'Login' || 'register'})
//   else if(to.name == 'Login' && auth == true) next({name: 'Home'})
//   else next()
// })

// Vue.prototype.$router = router;

export default router;