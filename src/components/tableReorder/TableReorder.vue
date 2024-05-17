<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

onMounted(() => {
  products.value = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'f256fh0g3',
      name: 'Bamboo',
      description: 'Description',
      image: 'bamboo.jpg',
      price: 5,
      category: 'Accessories',
      quantity: 2,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'f980fh0g3',
      name: 'Watch',
      description: 'Descriptione',
      image: 'watch.jpg',
      price: 6,
      category: 'Accessories',
      quantity: 4,
      inventoryStatus: 'INSTOCK',
      rating: 3
    }
  ]
})

const toast = useToast()
const columns = ref([
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
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
    <DataTable
      :value="products"
      :reorderableColumns="true"
      @columnReorder="onColReorder"
      @rowReorder="onRowReorder"
      tableStyle="min-width: 50rem"
    >
      <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column>
    </DataTable>
  </div>
</template>
