<script setup>
import { getCountryDetails } from '@/api';

const route = useRoute();

const fetchedCountryData = ref({});
const loading = ref(false);

loading.value = true;

fetchedCountryData.value = await getCountryDetails(route.params.country);

loading.value = false;
</script>

<template>
    <div class="min-h-screen p-16">
        <div class="py-4">
            <button type="button"
                class="flex flex-row justify-between items-center px-8 py-2 dark:bg-gray-700 rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] outline-none"
                @click="$router.back()">
                <Icon name="ic:baseline-arrow-back" class="dark:text-white" />
                <span class="ml-4 dark:text-white"> Back </span>
            </button>
        </div>

        <div v-if="loading" class="text-center mt-8">
            <Icon name="eos-icons:loading" size="24" />
        </div>

        <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mt-8 mx-auto">
            <div>
                <img class="w-5/6" :src="fetchedCountryData.flags.png" alt="" />
            </div>

            <country-details v-bind="fetchedCountryData"/>            
        </div>
    </div>
</template>

<style scoped>
img {
  aspect-ratio: 4 / 3;
}
</style>