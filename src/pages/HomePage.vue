<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SearchSection from '../components/SearchSection.vue'
import CountriesSection from '../components/CountriesSection.vue';
import CountriesSectionSkeleton from '../components/loadingSkeletons/CountriesSectionSkeleton.vue';

import { ref, onMounted, provide } from 'vue'

import useRequest from '../composables/useRequest';

import { getAllCountries, getCountriesByRegion, searchCountry } from '../services/requests';

const data = ref([]);
const loading = ref(false);
const filteredRegion = ref('');
const searchPhrase = ref('');
const clearSearch = ref(false);
const clearFilter = ref(false);

provide('clearSearch', clearSearch);
provide('clearFilter', clearFilter);

const { run: runGetAllCountries } = useRequest(getAllCountries, data, loading);

const { run: runGetCountriesByRegion } = useRequest(() => getCountriesByRegion(filteredRegion.value), data, loading);

const { run: runSearchCountry, error } = useRequest(() => searchCountry(searchPhrase.value), data, loading);

onMounted(async () => {
  await runGetAllCountries();
  data.value = data.value.slice(0, 10);
});

async function filterByRegion(region) {
  filteredRegion.value = region;
  clearSearch.value = true;
  clearFilter.value = false;

  if (region) {
    await runGetCountriesByRegion();
  }
  else {
    await runGetAllCountries();
    data.value = data.value.slice(0, 10);
  }
}

async function searchCountryByName(phrase) {
  searchPhrase.value = phrase;
  clearSearch.value = false;
  clearFilter.value = true;

  if (phrase) {
    await runSearchCountry();
  }
  else {
    error.value = '';
    await runGetAllCountries();
    data.value = data.value.slice(0, 10);
  }
}

</script>

<template>
  <div>
    <site-header />

    <search-section @filter-by-region="filterByRegion" @search-country="searchCountryByName"/>

    <countries-section-skeleton v-if="loading" />

    <span v-else-if="error" class="px-12 py-6 text-red-900">{{ error }}</span>
    
    <countries-section v-else :countries="data"/>
  </div>

</template>