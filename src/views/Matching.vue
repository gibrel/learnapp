<script setup lang="ts">
import TableReorder from '../components/tableReorder/TableReorder.vue'
</script>

<template>
  <div class="matching">
    <h1>Aqui teremos o funcionamento de associação</h1>
    <TableReorder></TableReorder>
    <TableReorder></TableReorder>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .matching {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
