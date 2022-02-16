<template>
  <div class="container py-5">
    <h1>Categories</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-white shadow-sm p-2">
          <button class="btn btn-info mb-3" @click="addNew">Add New Category</button>

          <!-- <AllCategories type="category" :categories="categories" @show-category="showCategory" @edit-category="editCategory" @del-category="delCategory" /> -->
          <list :list="categories" :fields="categoryHeader" @show="showCategory" @edit="editCategory" @del="delCategory">
              
          </list>

            <h2 v-if="user && user.nickname">{{user.nickname}}</h2>

        </div>
      </div>
      <div class="col-md-4">
        <div v-if="open" class="bg-white shadow-sm p-2">
          <AddCategories v-if="add" @new-category="newCategory" />

          <ShowCategories v-if="show" :category="category" />

          <EditCategories v-if="edit" :category="category" @update-category="updateCategory" :key="updateOnEdit"/>

          <DelCategories v-if="del" :category="category" @confirm="result" @cancel="reset" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import AllCategories from '../components/categories/Display.vue'
import AddCategories from '../components/categories/Add.vue'
import ShowCategories from '../components/categories/Show.vue'
import EditCategories from '../components/categories/Edit.vue'
import List from '../components/crud/List.vue'
import DelCategories from '../components/categories/Delete.vue'

import {mapGetters} from 'vuex'

export default {
    name: 'Category',
    components:{
        //AllCategories,
        AddCategories,
        ShowCategories,
        EditCategories,
        DelCategories,
        List
    },
    data(){
        return{
            open: false,
            add: false,
            show: false,
            edit: false,
            del: false,
            category: '',
            categories: [],
            id: null,
            updateOnEdit: 1,
            categoryHeader: [
                {name: "Name", value: "name"},
                {name: "Description", value: "description"}
            ]
        }
    },
    computed:{
        ...mapGetters(['user'])
    },
    mounted(){
        this.load();
        this.getId();
    },
    methods:{
        async load(){
            try{
                const res = await this.$api.get('categories');
                this.categories = res.data.data;
                console.log(res.data.data);
            }catch(err){console.log(err);}
        },
        addNew(){
            this.open= true
            this.add = true
        },
        editCategory(cat){
            this.open = true
            this.edit = true
            this.category = cat;
            this.updateOnEdit++;
        },
        getId(){
            this.id = this.$route.params.id
        },
        async newCategory(cat){
            try{
                const res = await this.$api.post('categories', cat)
                this.load();
                console.log(res);
            }catch(err){console.log(err);}
        },

        showCategory(cat){
            this.open = true
            this.show = true
            this.category = cat
        },
        updateCategory(){
            this.load();
        },
        delCategory(){},
        listClick(msg) {
            console.log(msg)
        }
    }
}
</script>