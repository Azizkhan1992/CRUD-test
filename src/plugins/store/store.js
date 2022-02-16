import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    user: null,
    categories: null
};

const store = new Vuex.Store({
    state,
    actions:{
        user(context, user){
            context.commit('user', user)
        },
        categories(context, categories){
            context.commit('categories', categories)
        }
    },
    mutations:{
        user(state, user){
            state.user = user
        },
        categories(state, categories){
            state.categories = categories
        }
    },
    getters:{
        user:(state)=>{
            return state.user
        },
        categories:(state)=>{
            return state.categories;
        }
    }
});

export default store;