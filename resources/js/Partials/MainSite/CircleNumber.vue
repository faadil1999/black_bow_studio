<template>
    <div
        class="bg-theme-green-fluo rounded-full text-center p-1 w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]"
    >
        <h1 class="text-3xl font-bold">{{ number }}</h1>
    </div>
</template>

<script setup>
const props = defineProps({
    number: {
        type: Number,
        default: 1,
    },
});
</script>
