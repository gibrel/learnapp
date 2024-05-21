<script setup lang="ts">
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import Knob from 'primevue/knob';
import Rating from 'primevue/rating';
import Divider from 'primevue/divider';
import { ref } from 'vue';

const value = ref(50);

const maxValue = ref(0);

const smariovalue = ref(null);

const selectedCategory = ref('Production');
const categories = ref([
  { name: 'Pior', key: '0' },
  { name: 'Ruim', key: '1' },
  { name: 'Regular', key: '2' },
  { name: 'Bom', key: '3' },
  { name: 'Ótimo', key: '4' },
  { name: 'Excelente', key: '5' }
]);
</script>

<template>
  <div>
    <h1>Respostas em Escala</h1>
    <br />
    <div>
      As ferramentas em escala podem funcionar como uma seleção de múltipla escolha ou o posicionamento de um controle
      deslizante.
    </div>
    <br>
    <Divider type="solid" />
    <br>
    <div>
      Qual a sua avaliação do conteúdo apresentado?
    </div>
    <div class="card flex justify-content-center">
      <div class="flex flex-column gap-3">
        <div v-for="category in categories" :key="category.key" class="flex align-items-center">
          <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name" />
          <label :for="category.key" class="ml-2">{{ category.name }}</label>
        </div>
      </div>
    </div>
    <br>
    <Divider type="solid" />
    <br>
    Qual a velocidade máxima você atingiu hoje?
    <div class="card flex justify-content-center">
      <Knob v-model="maxValue" />
    </div>
    <br>
    <Divider type="solid" />
    <br>
    Quantas estrelas você conseguiu no jogo de Super Mario?
    <div class="card flex justify-content-center">
      <Rating v-model="smariovalue" :cancel="false" />
    </div>
    <br>
    <Divider type="solid" />
    <br>
    Qual o seu nível de satisfação com o curso?
    <div class="card flex justify-content-center">
      <div class="w-14rem">
        <InputText v-model.number="value" class="w-full mb-3" />
        <Slider v-model="value" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style></style>
