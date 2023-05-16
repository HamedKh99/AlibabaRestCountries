import { defineStore } from "pinia";

import { getAllCountries, searchByName, filterByRegion } from "@/api";

export const useStore = defineStore('store', () => {
    const countries = ref([]);
    const searchQuery = ref('');
    const regionFilter = ref('');
    const loadingCountries = ref(false);
    const fetchError = ref('');

    function updateCountries(newCountries) {
        countries.value = newCountries;
    };

    function setLoadingCountries(loading) {
        loadingCountries.value = loading;
    };

    function setSearchQuery(query) {
        searchQuery.value = query;
        regionFilter.value = '';
    };

    function setRegionFilter(filter) {
        regionFilter.value = filter;
        searchQuery.value = '';
    };

    async function fetchCountries() {
        setLoadingCountries(true);
        let data = null;

        try {
            if (searchQuery.value) {
                data = await searchByName(searchQuery.value);
            } else if (regionFilter.value) {
                data = await filterByRegion(regionFilter.value);
            } else {
                data = await getAllCountries();
            }

            fetchError.value = undefined;
            updateCountries(data);

        } catch(e) {
            console.log(e);
            fetchError.value = e;
        } finally {
            setLoadingCountries(false);
        }

    };

    return {
        countries,
        loadingCountries,
        searchQuery,
        regionFilter,
        fetchError,
        setSearchQuery,
        setRegionFilter,
        fetchCountries,
    };
})