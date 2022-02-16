<template>
  <div class="bg-white shadow-sm">
      <nav class="navbar navbar-expand navbar-light fixed-top">

        <div class="container">
           <router-link to="/" class="navbar-brand" style="float: left; margin: 25px; text-decoration: none">Home</router-link>
           <div  class="collapse navbar-collapse" id="sign">
          <ul class="navbar-nav ml-auto" v-if="!user">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link">Sign Up</router-link>
                    </li>
                </ul>

              <ul class="navbar-nav ml-auto" v-if="user">
                 <li class="nav-item">
                        <router-link to="/category" class="nav-link">Category</router-link>
                    </li>
                  <li class="nav-item">
                    <a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
                  </li>
            </ul>
           </div>
        </div>
      </nav>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Nav',
    methods:{
        handleClick(){
            localStorage.removeItem('token');
            localStorage.removeItem('user')
            this.$store.dispatch('user', null);
            this.$router.push('/login');
        },
       async getCategories(){
            try{
                const res = await this.$api.get('categories');
                this.$store.dispatch('categories', res.data.data);
                // console.log(res.data.data);
            }catch(err){console.log(err);}
        }
    },
   mounted(){
        this.getCategories();
    },
    computed:{
      ...mapGetters(['user'])
    }
}
</script>
<style>
ul>li{
    text-decoration: none;
}
#navbarSupportedContent{
  float: right;
  padding: 10px;
}
</style>