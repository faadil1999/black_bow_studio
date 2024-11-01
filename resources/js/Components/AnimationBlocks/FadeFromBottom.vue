<template>
    <div
        v-motion
        :initial="selectedType.initial"
        :visibleOnce="selectedType.visibleOnce"
        class="mx-auto"
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { FadeFromYAnimations } from "@/Animations/allAnimations";

const selectedType = computed(() =>
    FadeFromYAnimations.get("fade-from-bottom")
);
</script>
