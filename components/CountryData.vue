<script setup>

defineProps({
  dataKey: String,
  dataValue: String,
});

</script>

<template>
  <div class="py-0.5">
    <span class="text-gray-800 dark:text-white">{{ dataKey }}</span>

    <span class="font-thin text-gray-600 dark:text-white">{{ `: ${dataValue}` }}</span>
  </div>
</template>