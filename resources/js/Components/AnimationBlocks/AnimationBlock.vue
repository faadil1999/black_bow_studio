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
import { AnimationFadeFromXSettings } from "@/types";
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

const animations: Map<String, AnimationFadeFromXSettings> = new Map();
const selectedType = computed(() => FadeFromXAnimations.get(props.type));
</script>
