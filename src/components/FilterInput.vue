<script setup>
import { computed, ref, inject, watch } from 'vue';

const emit = defineEmits(['filterByRegion']);

const showDropdown = ref(false);
const selectedRegion = ref('');

const clearFilter = inject('clearFilter');

const regions = computed(() => [{ name: 'Africa'}, { name: 'Americas'}, { name: 'Asia'}, { name: 'Europe'}, { name: 'Oceania'}, ]);

const dropdownText = computed(() => selectedRegion.value ? selectedRegion.value : "Filter by Region");

function toggleDropdown() { 
  showDropdown.value = !showDropdown.value 
};

function onFilterByRegion(region) {
  showDropdown.value = false;
  selectedRegion.value = region;
  emit('filterByRegion', region);
}

function removeRegion(e) {
  e.stopPropagation();
  selectedRegion.value = '';
  emit('filterByRegion', '');
}

watch(clearFilter, (value) => {
  if(value)
    selectedRegion.value = '';
})

</script>

<template>
  <div class="relative">

    <button 
      id="dropdownButton"
      class="bg-white hover:bg-gray-100 rounded-md shadow-md text-sm px-4 py-3 text-center inline-flex items-center justify-between w-full" 
      type="button"
      @click="toggleDropdown"
      >
      <font-awesome-icon v-if="selectedRegion" class="hover:bg-gray-500 p-1" icon="fa-solid fa-xmark" size="sm" @click="removeRegion" />

      {{ dropdownText }}

      <font-awesome-icon icon="fa-solid fa-chevron-down" size="sm" />
    </button>

    <div 
      v-if="showDropdown" 
      id="dropdown" 
      class="absolute w-full mt-1 z-10 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="region in regions" :key="region.name">
          <a 
            type="button"
            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="onFilterByRegion(region.name)"
          >
            {{ region.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>
li > a {
  cursor: pointer;
}
</style>