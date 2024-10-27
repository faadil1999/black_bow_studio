<template>
    <Head> </Head>
    <!--Side bar-->
    <SideBar :showSideBar @closeSideBar="closeSideBar" />
    <MainSiteLayout class="">
        <!--Header-->
        <HeaderMainSite :bg-video-url="bgVideoUrl">
            <template #side_bar>
                <button @click="toogleSideBar()">
                    <MenuIcon
                        size="35"
                        class="hover:bg-slate-700 duration-1000 rounded-xl p-1"
                    />
                </button>
            </template>
        </HeaderMainSite>

        <!--Body-->
        <!--Who we are -->
        <section
            class="mx-auto text-center lg:px-52 w-full bg-theme-black-dark text-white pb-56"
        >
            <div class="grid grid-cols-2 justify-items-center">
                <div
                    class="col-span-2 text-left"
                    v-motion
                    :initial="{ opacity: 0, x: 100 }"
                    :visibleOnce="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: 'spring',
                            stiffness: '100',
                            delay: 400,
                        },
                    }"
                >
                    <div class="my-6 mt-32">
                        <h2 class="text-theme-green-fluo text-xl uppercase">
                            Who whe are
                        </h2>
                    </div>
                    <p class="lg:text-[46px] my-4 font-bold">
                        We are Sublime, a design and branding agency with
                        partners worldwide. We design thoughtful digital
                        experiences and beautiful brand aesthetics.
                    </p>
                    <p class="lg:text-[24px] text-white text-opacity-20">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Donec rutrum congue leo eget malesuada. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse.
                    </p>
                </div>
                <div class="grid lg:grid-cols-2 col-span-2 mt-8 lg:gap-16">
                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Define"
                            :number="1"
                            :delay="100"
                            details="Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Design"
                            :number="2"
                            :delay="500"
                            details="Quos dolores saepe mollitia deserunt accusamus autem
                            reprehenderit. Voluptas facere animi explicabo non
                            quis magni recusandae. Numquam debitis pariatur
                            omnis facere unde. Laboriosam minus amet nesciunt
                            est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Build"
                            :number="3"
                            :delay="100"
                            details="Quos dolores saepe mollitia deserunt accusamus autem
                            reprehenderit. Voluptas facere animi explicabo non
                            quis magni recusandae. Numquam debitis pariatur
                            omnis facere unde. Laboriosam minus amet nesciunt
                            est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Launch"
                            :number="4"
                            :delay="500"
                            details="Quos dolores saepe mollitia deserunt accusamus autem
                            reprehenderit. Voluptas facere animi explicabo non
                            quis magni recusandae. Numquam debitis pariatur
                            omnis facere unde. Laboriosam minus amet nesciunt
                            est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>
                </div>
            </div>
        </section>

        <!--What we do -->
        <section
            class="mx-auto text-center lg:px-52 w-full bg-theme-black-darker text-white"
            @scroll="handleScroll()"
        >
            <div class="grid grid-cols-2 justify-items-center">
                <div class="col-span-2 text-left">
                    <div class="my-6 mt-32">
                        <h2 class="text-theme-green-fluo text-xl uppercase">
                            What we do
                        </h2>
                    </div>
                    <p class="lg:text-[46px] my-4 font-bold">
                        We take pride in what we do. Our services are designed
                        to help your business stand out and turn your ideas into
                        digital realities.
                    </p>
                    <p class="lg:text-[24px] text-white text-opacity-20">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Donec rutrum congue leo eget malesuada. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse.
                    </p>
                </div>
                <div class="grid lg:grid-cols-2 col-span-2 mt-8 lg:gap-16">
                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Define"
                            :number="1"
                            :delay="100"
                            details="Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Design"
                            :number="2"
                            :delay="500"
                            details="Quos dolores saepe mollitia deserunt accusamus autem
                            reprehenderit. Voluptas facere animi explicabo non
                            quis magni recusandae. Numquam debitis pariatur
                            omnis facere unde. Laboriosam minus amet nesciunt
                            est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Build"
                            :number="3"
                            :delay="100"
                            details="Quos dolores saepe mollitia deserunt accusamus autem
                            reprehenderit. Voluptas facere animi explicabo non
                            quis magni recusandae. Numquam debitis pariatur
                            omnis facere unde. Laboriosam minus amet nesciunt
                            est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Launch"
                            :number="4"
                            :delay="500"
                            details="Quos dolores saepe mollitia deserunt accusamus autem
                            reprehenderit. Voluptas facere animi explicabo non
                            quis magni recusandae. Numquam debitis pariatur
                            omnis facere unde. Laboriosam minus amet nesciunt
                            est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>
                </div>
            </div>
        </section>

        <!--What we do -->
        <section
            class="mx-auto text-center lg:px-52 w-full bg-theme-black-darker text-white py-10"
        >
            <div class="grid grid-cols-2 justify-items-center">
                <div class="col-span-2 text-center">
                    <div class="my-6 mt-32">
                        <h2 class="text-theme-green-fluo text-xl uppercase">
                            Our works
                        </h2>
                    </div>
                    <p class="lg:text-[46px] my-4 font-bold text-center">
                        We create brands, products, and experiences that people
                        love. Check out our recent works.
                    </p>
                </div>
                <div class="grid lg:grid-cols-2 col-span-2 mt-8 lg:gap-16">
                    <div
                        class="col-span-1"
                        v-motion
                        :initial="{ x: -200 }"
                        :visibleOnce="{
                            x: 0,
                            transition: {
                                duration: 900,
                                type: 'spring',
                                stiffness: '100',
                            },
                        }"
                    >
                        <AnimatedImage
                            image_url="https://www.shutterstock.com/shutterstock/photos/2155227903/display_1500/stock-vector-pixel-game-win-screen-retro-bit-video-game-interface-with-you-win-text-computer-game-level-up-2155227903.jpg"
                        />
                    </div>

                    <div
                        class="col-span-1"
                        v-motion
                        :initial="{ y: -200, opacity: 0 }"
                        :visibleOnce="{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 800,
                                duration: 900,
                                type: 'spring',
                                stiffness: '100',
                            },
                        }"
                    >
                        <AnimatedImage
                            image_url="https://cdn1.epicgames.com/spt-assets/7dbdd3c2a72e4cbaacc166a884031882/expeditions--a-mudrunner-game-rc1vn.jpg?h=270&quality=medium&resize=1&w=480"
                        />
                    </div>

                    <div
                        class="col-span-1"
                        v-motion
                        :initial="{ y: 200, opacity: 0 }"
                        :visibleOnce="{
                            y: 0,
                            opacity: 1,
                            transition: {
                                delay: 800,
                                duration: 900,
                                type: 'spring',
                                stiffness: '100',
                            },
                        }"
                    >
                        <AnimatedImage
                            image_url="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/07/greenmangaming-summer-sale.jpg"
                        />
                    </div>

                    <div
                        class="col-span-1"
                        v-motion
                        :initial="{ x: 200, opacity: 0 }"
                        :visibleOnce="{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 1000,
                                duration: 900,
                                type: 'spring',
                                stiffness: '100',
                            },
                        }"
                    >
                        <AnimatedImage
                            image_url="https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!--Footer-->
        <section>
            <div></div>
        </section>
    </MainSiteLayout>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";
import { MenuIcon } from "lucide-vue-next";
import { Head } from "@inertiajs/vue3";
import SideBar from "@/Partials/MainSite/SideBar.vue";
import HeaderMainSite from "@/Components/MainSite/Header.vue";
import MainSiteLayout from "@/Layouts/MainSite/MainSiteLayout.vue";
import SubtitleAndDetails from "@/Components/MainSite/SubtitleAndDetails.vue";
import AnimatedImage from "@/Components/MainSite/AnimatedImage.vue";

const props = defineProps({
    bgVideoUrl: {
        type: String,
        default: "",
    },
});

const showSideBar = ref(false);
function toogleSideBar() {
    showSideBar.value = !showSideBar.value;
}

function closeSideBar(event) {
    showSideBar.value = event;
}
</script>
