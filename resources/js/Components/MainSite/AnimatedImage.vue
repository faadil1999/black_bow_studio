<template>
    <div>
        <div
            class="transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 opacity-40 hover:opacity-100"
        >
            <img :src="image_url" class="h-64 w-full" alt="" />
        </div>
    </div>
</template>

<script setup>
import CircleNumber from "@/Partials/Main-site/CircleNumber.vue";

const props = defineProps({
    details: {
        type: String,
        default: null,
    },
    image_url: {
        type: String,
        default: "",
    },
});
</script>
