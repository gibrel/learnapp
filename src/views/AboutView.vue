<script setup lang="ts">
import TableReorder from '../components/tableReorder/TableReorder.vue'
</script>

<template>
  <div class="about">
    <TableReorder></TableReorder>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
