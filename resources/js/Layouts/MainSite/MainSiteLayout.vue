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
                    <SideBar :showSideBar @closeSideBar="closeSideBar" />
                    <HeaderMainSite>
                        <template #side_bar>
                            <button @click="toogleSideBar()">
                                <MenuIcon
                                    size="35"
                                    class="hover:bg-slate-700 duration-1000 rounded-xl p-1"
                                />
                            </button>
                        </template>
                    </HeaderMainSite>
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
