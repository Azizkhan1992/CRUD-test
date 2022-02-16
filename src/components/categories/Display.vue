<template>
    <table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
            <th colspan="4">All {{type}}s</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(category, idx) in categories" :key="idx">
            <td>{{ category.name }}</td>
            <td>
                <button class="btn btn-primary btn-sm text-capitalize" @click="show(category)">show</button>
            </td>
            <td>
                <button class="btn btn-success btn-sm text-capitalize" @click="edit(category)">edit</button>
            </td>
            <td>
                <button class="btn btn-danger btn-sm text-capitalize" @click="del(category)">delete</button>
            </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: ['categories', 'type'],
    emits: ['show-category', 'del-category', 'edit-category'],
    methods: {
        show(catergory) {
            this.$emit('show-category', catergory)
        },
        del(item) {
            this.$emit('del-category', item)
        },
        edit(item) {
            this.$emit('edit-category', item)
        }
    }
}
</script>