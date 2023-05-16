<script setup>

defineProps({
  dataKey: String,
  dataValue: String,
});

</script>

<template>
  <span class="font-medium dark:text-white">{{ dataKey }}</span>

  <span class="font-normal dark:text-white">{{ `: ${dataValue}` }}</span>

  <br />
</template>