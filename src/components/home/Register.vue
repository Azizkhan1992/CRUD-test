<template>
  <form @submit.prevent= "handleSubmit">

    <h3>Sign Up</h3>

    <div class="form-group">
      <label>First Name</label>
      <br/>
      <input type="text" class="form-control" v-model="first_name" placeholder="first name">
    </div>
    <hr/>

    <div class="form-group">
      <label>Middle Name</label>
      <br/>
      <input type="text" class="form-control" v-model="middle_name" placeholder="middle name">
    </div>
    <hr/>

    <div class="form-group">
      <label>Last Name</label>
      <br/>
      <input type="text" class="form-control" v-model="last_name" placeholder="last name">
    </div>
    <hr/>

    <div class="form-group">
      <label>Phone Number</label>
      <br/>
      <input type="number" class="form-control" v-model="phone_number" placeholder="phone number">
    </div>
    <hr/>

    <div class="form-group">
      <label>Birthday</label>
      <br/>
      <input type="text" class="form-control" v-model="birthday" placeholder="birthday">
    </div>
    <hr/>

    <div class="form-group">
      <label>Nick Name</label>
      <br/>
      <input type="text" class="form-control" v-model="nickname" placeholder="nickname">
    </div>
    <hr/>

    <div class="form-group">
      <label>Email</label>
      <br/>
      <input type="email" class="form-control" v-model="email" placeholder="email">
    </div>
    <hr/>

     <div class="form-group">
      <label>Password</label>
      <br/>
      <input type="password" class="form-control" v-model="password" placeholder="password">
    </div>
    <hr/>

     <div class="form-group">
      <label>Confirm Password</label>
      <br/>
      <input type="password" class="form-control" v-model="password_confirm" placeholder="confirm password">
    </div>
    <hr/>

    <button class="btn btn-primary btn-block">Sign Up</button>
  </form>
</template>
<script>
export default {
    name: 'Register',
    data(){
        return{
            first_name: null,
            middle_name: null,
            last_name: null,
            phone_number: null,
            birthday: null,
            nickname: null,
            email: null,
            password: null,
            password_confirm: null
        }
    },
    methods:{
        async handleSubmit(){
            try{
                await this.$api.post('register', {
                    first_name: this.first_name,
                    middle_name: this.middle_name,
                    last_name: this.last_name,
                    phone_number: this.phone_number,
                    birthday: this.birthday,
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password,
                    password_confirm: this.password_confirm
                });
                this.$router('/login')
            }catch(err){console.log(err);}
        }
    }
}
</script>