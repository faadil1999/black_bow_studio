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
import { AnimationFadeFromLeftSettings } from "@/types";
import { FadeFromLeftAnimations } from "@/Animations/allAnimations";

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

const animations: Map<String, AnimationFadeFromLeftSettings> = new Map();
const selectedType = computed(() => FadeFromLeftAnimations.get(props.type));
</script>
