<script setup>

defineProps({
  countries: Array,
});

</script>

<template>
  <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-16 px-4 md:px-8 lg:px-16">
    <country-card v-for="country in countries" 
      :key="country.cioc" 
      v-bind="country"
    />
  </div>
</template>