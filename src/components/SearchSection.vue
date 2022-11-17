<script setup>
import SearchInput from './SearchInput.vue';
import FilterInput from './FilterInput.vue'

defineEmits(['filterByRegion', 'searchCountry']);
</script>

<template>
  <div class="flex flex-row justify-between px-12 py-8">
    <search-input class="basis-2/5" @search-country="(phrase) => $emit('searchCountry', phrase)"/>

    <filter-input class="basis-1/5" @filter-by-region="(region) => $emit('filterByRegion', region)"/>
  </div>
</template>