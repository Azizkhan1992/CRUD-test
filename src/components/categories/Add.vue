<template>
  <div>
      <p class="font-weight-bold">Add New {{type}}</p>
      <form @submit.prevent>
          <input type="text" placeholder="name" class="form-control mb-2" v-model="form.name">
          <input type="text" min="0" placeholder="Description" class="form-control mb-2" v-model="form.description">
          <!-- <textarea cols="30" rows="7" placeholder="description" class="form-control mb-2" v-model="catDescription"></textarea> -->
          <button type="submit" class="btn btn-primary btn-block" @click="AddNewCategory">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    props: ['type'],
    data() {
        return {
             form:{
                name: null,
                description: null
            },
        }
    },
    emits: ['new-category'],
    methods: {
        AddNewCategory () {
            if ( this.form.name != '' && this.form.description != '') {
                const category = {
                    id: Math.floor(Math.random() * Math.floor(1000)),
                    name: this.form.name,
                    description: this.form.description,
                }
                this.$emit('new-category', category)

            } else {
                console.log('Category not Found!')
            }
        }
    }
}
</script>