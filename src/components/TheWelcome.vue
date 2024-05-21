<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DragNDropIcon from './icons/IconDragNDrop.vue'
import FillInTheBlanksIcon from './icons/IconFillInTheBlanks.vue'
import MatchingIcon from './icons/IconMatching.vue'
import MultipleAnsIcon from './icons/IconMultipleAns.vue'
import MultipleChoiceIcon from './icons/IconMultipleChoice.vue'
import PointToPictureIcon from './icons/IconPointToPicture.vue'
import SelectFromListIcon from './icons/IconSelectFromList.vue'
import SequenceIcon from './icons/IconSequence.vue'
import SimpleAnsIcon from './icons/IconSimpleAns.vue'
import AnsInScaleIcon from './icons/IconAnsInScale.vue'
</script>

<template>
  <!-- Vue’s <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a> -->

  <WelcomeItem>
    <template #icon>
      <MultipleAnsIcon />
    </template>
    <template #heading>Múltiplas Respostas</template>

    No componente de <a href="/multiple-ans" rel="noopener">múltiplas respostas</a>, o usuário poderá selecionar mais de
    uma resposta.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SequenceIcon />
    </template>
    <template #heading>Ordenação</template>

    O componente de <a href="/sequence" rel="noopener">ordenação</a> requer que o usuário ordene os elementos em uma
    única coluna atravéz de uma adequação lógica.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <MultipleChoiceIcon />
    </template>
    <template #heading>Múltipla Escolha</template>

    No componente de <a href="/multiple-choice" rel="noopener">múltiplas respostas</a>, o usuário pode escolher apenas
    um item entre múltiplas opções.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <MatchingIcon />
    </template>
    <template #heading>Associação</template>

    No componente de <a href="/matching" rel="noopener">associação</a>requer que o usuário ordene os elementos de duas
    colunas para que suas linhas sejam correlacionadas.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DragNDropIcon />
    </template>
    <template #heading>Arrastar e Soltar</template>

    No componente de <a href="/drag-n-drop" rel="noopener">arrastar e soltar</a>, o usuário deve arrastar e soltar itens
    da tela para selecionar algumas opções escolhidas de forma visual.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <FillInTheBlanksIcon />
    </template>
    <template #heading>Preencher as Lacunas</template>

    No componente de <a href="fill-in-the-blanks" rel="noopener">preencher as lacunas</a>, o usuário deve preencher as
    lacunas com algumas opções disponíveis.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SimpleAnsIcon />
    </template>
    <template #heading>Respostas Simples</template>

    No componente de <a href="/simple-ans" rel="noopener">respostas simples</a>, o usuário deve preencher um campo de
    texto de forma livre.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SelectFromListIcon />
    </template>
    <template #heading>Selecionar de uma Lista</template>

    No componente de <a href="/select-from-list" rel="noopener">seleção de uma lista</a>, o usuário seleciona uma
    resposta a partir de uma lista de itens.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <AnsInScaleIcon />
    </template>
    <template #heading>Resposta em Escala</template>

    No componente de <a href="/ans-scale" rel="noopener">resposta por escala</a> requer que o usuário selecione a sua
    resposta em uma escala configurável.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PointToPictureIcon />
    </template>
    <template #heading>Apontar em Imagem</template>

    No componente de <a href="/point-to-picture" rel="noopener">apontar na imagem</a>, o usuário interagem com uma
    imagem, indicando a posicção da imagem como uma resposta.
  </WelcomeItem>
</template>
