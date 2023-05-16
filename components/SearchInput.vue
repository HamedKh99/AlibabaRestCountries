<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/store";

const router = useRouter();
const store = useStore();

const { searchQuery } = storeToRefs(store);
const { fetchCountries, setSearchQuery } = store;

const onSearch = async (event) => {
    const inputValue = event.target.elements.search.value;

    const urlQuery = inputValue ? { query: { q: inputValue } } : "/";

    router.replace(urlQuery);

    setSearchQuery(inputValue);

    await fetchCountries();
}
</script>

<template>
    <form @submit.prevent="onSearch($event)">
        <label for="search" class="mb-2 text-sm font-medium sr-only">Search</label>

        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
                <Icon name="mdi:magnify" class="text-black dark:text-white" />
            </div>

            <input v-model="searchQuery" type="search" id="search"
                class="block w-full px-4 py-4 pl-14 text-sm dark:bg-gray-700 dark:text-white rounded-lg shadow-md outline-none"
                placeholder="Search for a country">
        </div>
    </form>
</template>