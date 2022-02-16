<template>
  <div>
      <p class="font-weight-bold">Edit "{{ category.name }}" {{type}}</p>
      <form @submit.prevent>
          <input type="text" placeholder="name" class="form-control mb-2" v-model="form.name">
          <input type="text" min="0" placeholder="Description" class="form-control mb-2" v-model="form.description">
          <!-- <textarea cols="30" rows="7" placeholder="description" class="form-control mb-2" v-model="catDescription"></textarea> -->
          <button type="submit" class="btn btn-primary btn-block" @click="editCategory">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
    props: ['category', 'type'],
    data() {
        return {
            form:{
                name: null,
                description: null
            }
        }
    },
    emits: ['update-category'],
    mounted() {
        this.initForm();console.log('ooo')
    },
    methods: {
        initForm() {
            this.form = {...this.category};
        },
        editCategory () {
            // console.log(this.category.id);
            if ( this.form.name === null || this.form.description === null) {
                alert("Name or description not filled!");
                return;
            }

            this.$api.put(`categories/${this.category.id}`, this.form)
            .then(response => {
                this.$emit('update-category', response?.data);
            }, error => console.log(error));
        }
    }
}
</script>