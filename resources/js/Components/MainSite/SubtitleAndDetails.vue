<template>
    <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: '100',
                delay: delay,
            },
        }"
    >
        <div class="flex flex-row my-5 space-x-4">
            <CircleNumber :number="number" />
            <div class="mt-2 font-bold lg:text-2xl">{{ subtitle }}</div>
        </div>
        <div
            class="col-span-2 text-left text-white text-opacity-20 text-[17px] leading-loose"
        >
            {{ details }}
        </div>
    </div>
</template>

<script setup>
import CircleNumber from "@/Partials/MainSite/CircleNumber.vue";

const props = defineProps({
    number: {
        type: Number,
        default: 1,
    },
    details: {
        type: String,
        default: null,
    },
    subtitle: {
        type: String,
        default: "Define",
    },
    delay: {
        type: Number,
        default: 100,
    },
});
</script>
