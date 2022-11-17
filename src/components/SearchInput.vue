<script setup>
import _ from 'lodash';

import { ref, inject, watch } from 'vue';

const clearSearch = inject('clearSearch')

const emit = defineEmits(['searchCountry']);

const searchPhrase = ref('');

const debouncedInput = _.debounce((e) => { 
  searchPhrase.value = e.target.value; 
  emit("searchCountry", searchPhrase.value);
}, 400);

watch(clearSearch, (value) => {
  if(value) {
    searchPhrase.value = '';
  }
});


</script>

<template>
  <form>
    <label for="search" class="mb-2 text-sm font-medium sr-only">Search</label>
    
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" id="searchIcon" />
      </div>

      <input 
        type="search" 
        id="search"
        class="block w-full px-4 py-3 pl-14 text-sm rounded-lg shadow-md"
        placeholder="Search for a country"
        :value="searchPhrase"
        @input="debouncedInput"
      >
    </div>
  </form>
</template>

<style scoped>

#searchIcon {
  color: hsl(0, 0%, 52%);
}

#search {
  color: hsl(200, 15%, 8%);
}

</style>