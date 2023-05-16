export function getAllCountries() {
    return $fetch('https://restcountries.com/v3.1/all');
}

export function searchByName(query) {
    return $fetch(`https://restcountries.com/v3.1/name/${query}`);
}

export function filterByRegion(region) {
    return $fetch(`https://restcountries.com/v3.1/region/${region}`);
}