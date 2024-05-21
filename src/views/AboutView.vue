<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="about">
    <HelloWorld msg="Parabéns!" />
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
