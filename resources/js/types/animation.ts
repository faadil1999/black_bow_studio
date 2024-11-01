type FadeFromXTransition = {
    type: string;
    stiffness: string;
    delay: number;
};

type AnimationFadeFromXInitial = {
    opacity: number;
    x: number;
};

type AnimationFadeFromXDetails = {
    opacity: number;
    x: number;
    transition: FadeFromXTransition;
};

type FadeFromYTransition = {
    type: string;
    stiffness: string;
    delay: number;
    duration: number;
};

type AnimationFadeFromYDetails = {
    opacity: number;
    y: number;
    transition: FadeFromYTransition;
};

type AnimationFadeFromYInitial = {
    opacity: number;
    y: number;
};

export type AnimationFadeFromXSettings = {
    initial: AnimationFadeFromXInitial;
    visibleOnce: AnimationFadeFromXDetails;
};

export type AnimationFadeFromYSettings = {
    initial: AnimationFadeFromYInitial;
    visibleOnce: AnimationFadeFromYDetails;
};
