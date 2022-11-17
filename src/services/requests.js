import { allCountriesAPI, countriesByRegionAPI, searchCountryAPI } from './api';

export function getAllCountries() {
  return fetch(allCountriesAPI());
}

export function getCountriesByRegion(region) {
  return fetch(countriesByRegionAPI(region));
}

export function searchCountry(name) {
  return fetch(searchCountryAPI(name))
}