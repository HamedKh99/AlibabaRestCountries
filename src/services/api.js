const baseURL = 'https://restcountries.com/v2';

const homepageQueryParams = '?fields=name,flags,cioc,capital,population,region';

export const allCountriesAPI = () => `${baseURL}/all${homepageQueryParams}`;

export const countriesByRegionAPI = (region) => `${baseURL}/region/${region}${homepageQueryParams}`;

export const searchCountryAPI = (name) => `${baseURL}/name/${name}${homepageQueryParams};`