<template>
    <div class="relative">
        <div>
            <button type="button"
                class="inline-flex w-full justify-around rounded-md bg-white dark:bg-gray-700 px-2 py-3 text-sm shadow-md ring-gray-300 hover:bg-gray-50"
                id="menu-button" aria-expanded="true" aria-haspopup="true">
                <span class="dark:text-white">Filter by Region</span>
                <Icon name="mdi:chevron-down" size="24" class="dark:text-white" />
            </button>
        </div>

        <div v-show="false"
            class="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <!-- <div class="py-1" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-2">License</a>
            </div> -->
        </div>
    </div>
</template>