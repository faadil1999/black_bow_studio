<template>
    <div class="flex h-screen overflow-hidden">
        <div class="flex flex-col w-full">
            <div
                id="layout-container"
                class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
            >
                <main
                    class="bg-theme-gray-extralight flex-auto relative w-full"
                >
                    <flash-messages-list />

                    <slot />
                    <!-- <Footer /> -->
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
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
