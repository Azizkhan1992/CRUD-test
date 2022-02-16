<template>
  <div id="app">
    <Nav/>
     <div class="auth-wrapper" id="auth">
        <div class="auth-inner">
        <router-view/>
      </div>
      </div>
  </div>
</template>

<script>
import Nav from './components/home/Nav.vue'
// import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    Nav
  },
  data(){
    return{
      user:null
    }
  },
  mounted(){
    this.getUser();
  },
  methods:{
    async getUser(){
      const response = await this.$api.get('user')
      this.user = response.data.data;
      // console.log(response.data.data)
      this.$store.dispatch('user', response.data.data)
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  background: #77addf !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}
#auth{
  margin-top: 100px;
  display: inline-block;
  border-radius: 2px solid black;
}
#home-nav{
  float: left;
  margin: 25px;
  text-decoration: none;
}
#sign{
  float: right;
}
.nav-item{
  margin: 15px;
}
.nav-link{
  text-decoration: none;
}
#app{
  text-align: center;
  width: 1240px;
}
</style>
