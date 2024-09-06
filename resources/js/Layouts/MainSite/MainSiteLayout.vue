<template>
    <div class="flex h-screen overflow-hidden">
        <div class="flex flex-col w-full">
            <div>
                <!-- Sidebar backdrop (mobile only) -->
                <div
                    class="fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity"
                    :class="
                        showSideBar
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                    "
                    aria-hidden="true"
                ></div>
            </div>
            <div
                id="layout-container"
                class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
            >
                <HeaderMainSite>
                    <template #side_bar>
                        <button @click="toogleSideBar()">
                            <MenuIcon size="35" />
                        </button>
                    </template>
                </HeaderMainSite>
                <main
                    class="bg-theme-gray-extralight flex-auto relative w-full"
                >
                    <flash-messages-list />

                    <SideBar :showSideBar @closeSideBar="closeSideBar" />
                    <slot />
                </main>
                <!-- <Footer /> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head } from "@inertiajs/vue3";
import { ref } from "vue";
import HeaderMainSite from "@/Components/MainSite/Header.vue";
import SideBar from "@/Partials/MainSite/SideBar.vue";
import { MenuIcon } from "lucide-vue-next";

const showSideBar = ref(false);
function toogleSideBar() {
    showSideBar.value = !showSideBar.value;
}

function closeSideBar(event) {
    showSideBar.value = event;
}
</script>
