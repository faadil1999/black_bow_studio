<template>
    <!--Header-->
    <header class="relative flex flex-col h-screen overflow-hidden">
        <div
            class="flex justify-between px-10 py-4 text-white z-40 w-full bg-black bg-opacity-70"
        >
            <!--Icon -->
            <div>Icon</div>
            <!--Side bar Icon-->
            <div>
                <slot name="side_bar">
                    <MenuIcon></MenuIcon>
                </slot>
            </div>
        </div>
        <div
            class="relative z-30 text-2xl items-center justify-center bg-black bg-opacity-70 h-screen"
        >
            <div class="py-10">
                <div class="flex flex-col text-white">
                    <div class="mx-auto lg:mt-32 text-center">
                        <h1
                            class="text-[55px] lg:text-[100px] font-extrabold font-montserrat space-y-2 leading-[1.2]"
                        >
                            The Black Bow Studio
                        </h1>
                    </div>

                    <div class="mx-auto mt-5 lg:mt-16">
                        <h3
                            class="text-[17px] lg:text-[37px] font-nunito opacity-50"
                        >
                            {{ $t("main-site.header.sub_title") }}
                        </h3>
                    </div>

                    <div
                        class="w-25 mx-auto flex items-center flex-row lg:flex-col mt-10 space-x-4"
                    >
                        <div
                            class="bg-black rounded-full text-center p-1 w-[45px] h-[45px] lg:w-[90px] lg:h-[90px]"
                        >
                            <PlayIcon
                                class="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] fill-theme-green-fluo mx-auto mt-2 lg:mt-4 stroke-none"
                            ></PlayIcon>
                        </div>
                        <div class="font-nunito font-bold">
                            {{ $t("main-site.header.watch_video") }}
                        </div>
                    </div>

                    <div
                        class="flex flex-col lg:flex-row mx-auto mt-5 space-y-4 lg:space-y-0"
                    >
                        <button
                            class="px-8 py-4 bg-theme-green-fluo text-white lg:w-[270px] text-center"
                        >
                            {{ $t("main-site.header.more_about") }}
                        </button>
                        <button
                            class="px-8 py-4 bg-gray-800 text-white lg:w-[270px]"
                        >
                            {{ $t("main-site.header.let_talk") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--Background video-->
        <video
            autoplay
            loop
            muted
            class="absolute inset-0 w-full h-full object-cover z-10"
        >
            <source :src="bgVideoUrl" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </header>
</template>
<script setup>
import { PlayIcon } from "lucide-vue-next";
import { MenuIcon } from "lucide-vue-next";

const props = defineProps({
    bgVideoUrl: {
        type: String,
        default:
            "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4",
    },
});
</script>
