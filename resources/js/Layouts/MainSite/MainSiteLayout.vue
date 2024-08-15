<template>
    <div class="flex h-screen overflow-hidden">
        <div class="flex flex-col w-full">
            <HeaderMainSite />
            <div
                id="layout-container"
                class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
            >
                <main class="bg-theme-gray-extralight flex-auto relative">
                    <flash-messages-list />
                    <slot />
                </main>
                <!-- <Footer /> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import HeaderMainSite from "@/Components/MainSite/Header.vue";
</script>
