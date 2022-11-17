<script setup>
import CountryData from './CountryData.vue'

import { computed } from 'vue'

const props = defineProps({
  name: String,
  flags: Object,
  population: Number,
  region: String,
  capital: String,
})

const populationString = computed(() => props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
</script>

<template>
  <div class="max-w-sm bg-white rounded-md shadow-md pb-4">
    <a href="#">
      <img class="rounded-t-md" :src="flags.png" alt="" />
    </a>

    <div class="p-6">
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight pb-2">{{ name }}</h5>
      </a>
      
      <country-data data-key="Population" :data-value="populationString"/>

      <country-data data-key="Region" :data-value="region"/>

      <country-data data-key="Capital" :data-value="capital"/>
    </div>
  </div>
</template>

<style scoped>
img {
  aspect-ratio: 16 / 9;
}
</style>