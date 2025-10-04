<script setup lang="ts">
import { getRandomNumberBetween } from '@/composables/useGetRandomNumberBetween';
import { ref } from 'vue';
import { Button, Input } from '@/components/ui';

// Initialise les refs avec des valeurs par défaut
const randomNumber = ref<number>(0);
const min = ref<number>(0);
const max = ref<number>(10); // Assure-toi que max a une valeur > min

const handleClickRandomButton = () => {
  if (max.value > min.value) {
    try {
      randomNumber.value = getRandomNumberBetween(min, max);
    } catch (error) {
      console.error("Error generating random number:", error);
      alert("An error has occurred. Please verify that max > min and that your browser is up to date.");
    }
  }
}

const initialize = () => {
  randomNumber.value = getRandomNumberBetween(min, max);
}

initialize();
</script>

<template>
  <main class="flex-grow w-full h-full grid grid-cols-3 bg-background text-foreground py-4">

    <section id="left" class="content-center mx-auto">
      <h2 class="text-4xl font-semibold text-center pb-8">Minimun</h2>
      <Input id="min" placeholder="0" type="number" v-model="min"></Input>
    </section>

    <section id="middle"
      class="w-full h-full flex flex-col gap-16 justify-between items-center py-16 px-28 border-x border-primary">

      <h2 class="text-4xl font-semibold text-center">Secure random number</h2>

      <div class="h-full content-center">
        <p class="text-9xl mx-auto">{{ randomNumber }}</p>
      </div>

      <Button @click="handleClickRandomButton" variant="primary" class="w-full">Generate</Button>
    </section>

    <section id="right" class="content-center mx-auto">
      <h2 class="text-4xl font-semibold text-center pb-8">Maximun</h2>
      <Input id="max" placeholder="10" type="number" v-model="max"></Input>
    </section>

  </main>
</template>

<!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9"/><path d="M12 14v8"/><path d="M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/></svg> -->