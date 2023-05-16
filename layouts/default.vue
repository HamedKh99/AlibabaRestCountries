<template>
    <div class="flex flex-row justify-between px-12 py-6 bg-white dark:bg-gray-700">
        <h1 class="text-2xl font-bold dark:text-white">Where in the world?</h1>

        <button type="button" class="flex flex-row justify-between items-center">
            <Icon name="ic:outline-dark-mode" class="dark:text-white"/>
            <span class="ml-2 dark:text-white"> Dark Mode </span>
        </button>
    </div>

    <div class="bg-gray-50 dark:bg-gray-800 shadow-inner">
        <slot />
    </div>
</template>
