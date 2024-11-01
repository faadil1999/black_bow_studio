type FadeFromLeftTransition = {
    type: string;
    stiffness: string;
    delay: number;
};

type AnimationFadeFromLeftInitial = {
    opacity: number;
    x: number;
};

type AnimationFadeFromLeftDetails = {
    opacity: number;
    x: number;
    transition: FadeFromLeftTransition;
};

export type AnimationFadeFromLeftSettings = {
    initial: AnimationFadeFromLeftInitial;
    visibleOnce: AnimationFadeFromLeftDetails;
};
