<template>
    <div
        :class="{
            'w-screen': toogleSideBar,
            'w-0': !toogleSideBar,
        }"
        class="bg-black fixed opacity-25 duration-1000 h-screen"
    >
        <nav
            :class="{
                'w-1/2': toogleSideBar,
                'w-0': !toogleSideBar,
            }"
            class="fixed flex-shrink-0 duration-1000 overflow-hidden lg:-right-10 h-screen lg:-top-0"
        >
            <div
                class="flex flex-col bg-theme-green-fluo h-screen !opacity-100"
            >
                <button class="my-5 px-5" @click="closeSideBar()">
                    <XIcon class="text-black" />
                </button>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { XIcon } from "lucide-vue-next";

const emit = defineEmits(["closeSideBar"]);
const props = defineProps({
    showSideBar: {
        type: Boolean,
        default: false,
    },
});

const showSideBar = computed(() => props.showSideBar);
const toogleSideBar = ref(showSideBar.value);

watch(
    () => showSideBar.value,
    () => {
        toogleSideBar.value = showSideBar.value;
    }
);

function closeSideBar() {
    toogleSideBar.value = false;
    emit("closeSideBar", toogleSideBar.value);
}
</script>
