<template>
    <table class="table table-bordered table-hover table-striped">
        <thead>
            <tr v-if="fields.length > 0">
                <th v-for="(head, idx) in fields" :key="idx">
                    {{ head.name }}
                </th>
                <th colspan="3">Actions</th>
            </tr>
        </thead>
        <tbody v-if="list.length > 0">
            <tr v-for="(item, idx) in list" :key="idx">
            <template v-if="fields.length > 0">
                <td v-for="(field, idy) in fields" :key="`field${idx}${idy}`">
                    {{ item[field.value] }}
                </td>
            </template>
            <template v-if="!$slots.actions">
                <td>
                    <button class="btn btn-primary btn-sm text-capitalize" @click="show(item)">show</button>
                </td>
                <td>
                    <button class="btn btn-success btn-sm text-capitalize" @click="edit(item)">edit</button>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm text-capitalize" @click="del(item)">delete</button>
                </td>
            </template>
            <template v-else>
                <slot name="actions"></slot>
            </template>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: "Crud-List",
    props: {
        list: {
            type: Array,
            default: () => []
        },
        fields: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    emits: ['show', 'del', 'edit'],
    methods: {
        show(catergory) {
            this.$emit('show', catergory)
        },
        del(item) {
            this.$emit('del', item)
        },
        edit(item) {
            this.$emit('edit', item)
        }
    }
}
</script>