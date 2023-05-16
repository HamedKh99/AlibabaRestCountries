<script setup>
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';

const store = useStore();

const { themeMode } = storeToRefs(store);
const { setThemeMode } = store;

onMounted(() => {
  const retrievedThemeMode = localStorage.getItem("theme-mode") || "light";
  setThemeMode(retrievedThemeMode);
});

</script>

<template>
  <div :class="themeMode">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
