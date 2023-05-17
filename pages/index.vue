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
        <div class="flex min-[768px]:flex-row max-[768px]:flex-col min-[768px]:justify-between px-12 py-12">
            <search-input class="min-[768px]:basis-2/5" />

            <filter-dropdown class="min-[768px]:basis-1/6 max-[768px]:w-1/2 max-[768px]:mt-8" />
        </div>

        <countries-section-skeleton v-if="loadingCountries" />

        <error-container v-else-if="fetchError" />

        <countries-section v-else :countries="countries" />
    </div>
</template>