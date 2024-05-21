<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

onMounted(() => {
    products.value = [
        {
            name: 'Bamboo Watch',
        },
        {
            name: 'Bamboo',
        },
        {
            name: 'Watch',
        }
    ]
})

const toast = useToast()
const columns = ref([
    { field: 'name', header: 'Name' }
])
const products = ref()

const onColReorder = () => {
    toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 })
}
const onRowReorder = (event) => {
    products.value = event.value
    toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000 })
}
</script>

<template>
    <div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder"
            tableStyle="min-width: 50rem">
            <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
    </div>
</template>
