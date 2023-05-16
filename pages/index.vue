<script setup>
import { useStore } from '@/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const route = useRoute();


const { countries, loadingCountries, fetchError } = storeToRefs(store);
const { setSearchQuery, setRegionFilter, fetchCountries } = store;


onMounted(async () => {
    const { q, region } = route.query;

    if (q) {
        setSearchQuery(q);
    } else if (region) {
        setRegionFilter(region);
    }

    await fetchCountries();
});


</script>

<template>
    <div>
        <div class="flex flex-row justify-between px-12 py-12">
            <search-input class="basis-2/5" />

            <filter-dropdown class="basis-1/6" />
        </div>

        <countries-section-skeleton v-if="loadingCountries" />

        <error-container v-else-if="fetchError" />

        <countries-section v-else :countries="countries" />
    </div>
</template>