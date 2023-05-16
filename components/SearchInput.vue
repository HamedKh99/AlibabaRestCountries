<template>
    <form>
        <label for="search" class="mb-2 text-sm font-medium sr-only">Search</label>

        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center px-6 pointer-events-none">
                <Icon name="mdi:magnify" class="text-black dark:text-white"/>
            </div>

            <input type="search" id="search" class="block w-full px-4 py-4 pl-14 text-sm dark:bg-gray-700 dark:text-white rounded-lg shadow-md outline-none"
                placeholder="Search for a country">
        </div>
    </form>
</template>