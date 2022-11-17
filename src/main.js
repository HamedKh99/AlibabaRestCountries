import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faMagnifyingGlass, faChevronDown, faXmark);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
