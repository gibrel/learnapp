<script setup lang="ts">
import { ref } from "vue";

const categories = ref([
    {name: "Contabilidade", key: "Co"},
    {name: "Marqueting", key: "Ma"},
    {name: "Produção", key: "Pd"},
    {name: "Pesquisa", key: "Pe"}
]);
const selectedCategories = ref(['Marketing']);
</script>

<template>
  <div>
    <h1>Múltipla Respostas</h1>
    <br />
    <div>
      No componente de múltiplas respostas, o usuário poderá selecionar mais de uma resposta. O
      usuário será convidado a confirmar suas respostas selecionadas em um pop up.
    </div>
    <br>
    Qual dessas categorias você considera pacas?
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="category of categories" :key="category.key" class="flex align-items-center">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
  </div>
</template>

<style></style>
