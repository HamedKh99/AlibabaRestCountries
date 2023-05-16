<script setup>
import { useStore } from "@/store";
import { storeToRefs } from "pinia";

const router = useRouter();
const store = useStore();

const { regionFilter } = storeToRefs(store);
const { setRegionFilter, fetchCountries } = store;

const regions = computed(() => ['Africa', 'America', 'Asia', 'Europe', 'Oceania']);

const showDropdown = ref(false);

const toggleDropdown = () => showDropdown.value = !showDropdown.value;

const onSelectRegion = async (region) => {
    router.replace({ query: { region } });

    setRegionFilter(region);

    toggleDropdown();

    await fetchCountries();
}

const dropdownText = computed(() => regionFilter.value ? regionFilter.value : 'Filter by Region');

</script>
<template>
    <div class="relative">
        <div>
            <button type="button"
                class="inline-flex w-full justify-around rounded-md bg-white dark:bg-gray-700 px-2 py-3 text-sm shadow-md ring-gray-300 hover:bg-gray-50"
                id="menu-button" aria-expanded="true" aria-haspopup="true" @click="toggleDropdown">
                <span class="dark:text-white">{{ dropdownText }}</span>
                <Icon name="mdi:chevron-down" size="24" class="dark:text-white" />
            </button>
        </div>

        <div v-show="showDropdown"
            class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">

                <a v-for="region in regions" :key="region" href="#" class="dark:text-white block px-4 py-2 text-sm"
                    role="menuitem" tabindex="-1" @click="onSelectRegion(region)">{{ region }}</a>

            </div>
        </div>
    </div>
</template>