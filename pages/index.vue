<script setup>

const { data: countries, pending } = await useFetch('/api/all');

</script>

<template>
    <div>
        <div class="flex flex-row justify-between px-12 py-12">
            <search-input class="basis-2/5" />
            <filter-dropdown class="basis-1/6" />
        </div>

        <countries-section-skeleton v-if="pending" />

        <countries-section v-else :countries="countries" />
    </div>
</template>