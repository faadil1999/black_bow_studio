<template>
    <div
        v-motion
        :initial="selectedType.initial"
        :visibleOnce="selectedType.visibleOnce"
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { FadeFromXAnimations } from "@/Animations/allAnimations";

const props = defineProps({
    delay: {
        type: Number,
        default: 400,
    },
    type: {
        type: String,
        default: "fade-from-left",
    },
});

const selectedType = computed(() => FadeFromXAnimations.get(props.type));
</script>
