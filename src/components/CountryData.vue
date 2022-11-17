<script setup>
defineProps({
  dataKey: String,
  dataValue: String,
})
</script>

<template>
  <span class="font-medium">{{ dataKey }}</span>
  
  <span class="font-normal">{{ `: ${dataValue}` }}</span>

  <br />
</template>