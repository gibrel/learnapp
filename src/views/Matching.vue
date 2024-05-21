<script setup lang="ts">
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import TableReorder from '../components/tableReorder/TableOrdering.vue'

</script>

<template>
  <div class="matching">
    <h1>Aqui teremos o funcionamento de associação</h1>
    <br>
    <div class="card">
      <Splitter style="height: 300px" class="mb-5">
        <SplitterPanel class="flex align-items-center justify-content-center">
          <TableReorder class="flex max-width-10vh"></TableReorder>
        </SplitterPanel>
        <SplitterPanel class="flex align-items-center justify-content-center">
          <TableReorder class="flex max-width-10vh"></TableReorder>
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>

<style></style>
