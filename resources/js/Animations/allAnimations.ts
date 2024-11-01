import {
    AnimationFadeFromXSettings,
    AnimationFadeFromYSettings,
} from "@/types";

export const FadeFromXAnimations: Map<String, AnimationFadeFromXSettings> =
    new Map();
FadeFromXAnimations.set("fade-from-left", {
    initial: {
        opacity: 0,
        x: 100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: "100",
            delay: 400,
        },
    },
});

FadeFromXAnimations.set("fade-from-right", {
    initial: {
        opacity: 0,
        x: -100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: "100",
            delay: 400,
        },
    },
});

export const FadeFromYAnimations: Map<String, AnimationFadeFromYSettings> =
    new Map();

FadeFromYAnimations.set("fade-from-bottom", {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 500,
            duration: 700,
            type: "spring",
            stiffness: "100",
        },
    },
});
