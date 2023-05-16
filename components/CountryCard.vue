<script setup>

const props = defineProps({
  name: Object,
  flags: Object,
  population: Number,
  region: String,
  capital: {
    type: Array,
    default: [],
  },
});

const populationString = computed(() => props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
</script>

<template>
  <div class="max-w-sm bg-white dark:bg-gray-700 rounded-md shadow-md pb-4">
    <a href="#">
      <img class="rounded-t-md" :src="flags.png" alt="" />
    </a>

    <div class="p-6">
      <a href="#">
        <h5 class="mb-2 text-xl dark:text-white font-bold tracking-tight pb-2">{{ name.common }}</h5>
      </a>
      
      <country-data data-key="Population" :data-value="populationString"/>

      <country-data data-key="Region" :data-value="region"/>

      <country-data data-key="Capital" :data-value="capital[0]"/>
    </div>
  </div>
</template>

<style scoped>
img {
  aspect-ratio: 16 / 9;
}
</style>