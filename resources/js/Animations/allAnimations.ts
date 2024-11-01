import { AnimationFadeFromLeftSettings } from "@/types";

export const FadeFromLeftAnimations: Map<
    String,
    AnimationFadeFromLeftSettings
> = new Map();
FadeFromLeftAnimations.set("fade-from-left", {
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

FadeFromLeftAnimations.set("fade-from-right", {
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
