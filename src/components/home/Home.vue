<template>
    <div>
        <h2 v-if="user">Hi {{user.nickname}}</h2>
        <h2 v-if="!user">You are not logged in!</h2>
        <div>
        <div v-for="(category, idx) in categories" :key="idx">
            <h2>This is  {{category.name}}!</h2>
        </div>
        <div>
            <h2 v-if="!categories">Categories not found!</h2>
        </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Home',
    computed:{
        ...mapGetters([
            'user',
            'categories'
        ])
    }
    
}
</script>