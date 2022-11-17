<script setup>
import CountryCardSkeleton from './CountryCardSkeleton.vue';
</script>

<template>
  <div class="grid grid-cols-4 gap-6 px-12">
    <country-card-skeleton v-for="i in 6"/>
  </div>
</template>