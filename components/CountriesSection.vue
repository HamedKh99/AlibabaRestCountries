<script setup>

defineProps({
  countries: Array,
});

</script>

<template>
  <div class="grid grid-cols-4 gap-16 px-12">
    <country-card v-for="country in countries" 
      :key="country.cioc" 
      v-bind="country"
    />
  </div>
</template>