<script setup>

const props = defineProps({
    name: Object,
    flags: Object,
    population: Number,
    region: String,
    subregion: String,
    capital: {
        type: Array,
        default: [],
    },
    tld: {
        type: Array,
        default: [],
    },
    currencies: Object,
    languages: Object,
    borders: {
        type: Array,
        default: [],
    },
});

const populationString = computed(() => props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

const currenciesString = computed(() => {
    let result = [];

    const currencyKeys = Object.keys(props.currencies);

    currencyKeys.forEach((key) => result.push(props.currencies[key].name));

    return result;
});

const languagesString = computed(() => Object.values(props.languages));

</script>

<template>
    <div class="flex flex-col justify-around py-4">
        <h1 class="text-2xl font-bold dark:text-white">{{ name.common }}</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
            <div>
                <country-data data-key="Native Name" :data-value="name.common" />
                <country-data data-key="Population" :data-value="populationString" />
                <country-data data-key="Region" :data-value="region" />
                <country-data data-key="Sub Region" :data-value="subregion" />
                <country-data data-key="Capital" :data-value="capital[0]" />
            </div>

            <div>
                <country-data data-key="Top Level Domain" :data-value="tld[0]" />
                <country-data data-key="Currencies" :data-value="currenciesString" />
                <country-data data-key="Languages" :data-value="languagesString" />
            </div>
        </div>

        <div>
            <span class="text-gray-800 dark:text-white mr-2">Border Countries:</span>
            <br class="md:hidden"/>
            <NuxtLink v-for="borderCountry in borders" :to="`/${borderCountry}`" type="button"
                class="px-4 mx-1 text-center dark:bg-gray-700 rounded-sm shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] outline-none">
                <span class="dark:text-white font-thin"> {{ borderCountry }} </span>
            </NuxtLink>
        </div>

    </div>
</template>