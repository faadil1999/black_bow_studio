<template>
    <Head> </Head>
    <MainSiteLayout class="">
        <section
            class="mx-auto text-center bg-cover bg-opacity-25 text-opacity-20"
        >
            <div class="flex flex-col" data-aos="fade">
                <div class="mx-auto mt-32">
                    <h1
                        class="text-[65px] lg:text-[170px] text-white font-extrabold"
                    >
                        The Black Bow studio
                    </h1>
                </div>

                <div class="mx-auto">
                    <h3 class="text-[17px] lg:text-[37px]">
                        We build brands and beautiful experiences
                    </h3>
                </div>

                <div
                    class="w-25 mx-auto flex items-center flex-row lg:flex-col mt-10 space-x-4"
                >
                    <div
                        class="bg-black rounded-full text-center p-1 w-[45px] h-[45px] lg:w-[90px] lg:h-[90px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="0.0"
                            stroke="currentColor"
                            class="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] fill-theme-green-fluo mx-auto mt-2 lg:mt-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                            />
                        </svg>
                    </div>
                    <div>Watch video</div>
                </div>

                <div
                    class="flex flex-col lg:flex-row mx-auto mt-5 space-y-4 lg:space-y-0"
                >
                    <button
                        class="px-8 py-4 bg-theme-green-fluo text-white lg:w-[170px] text-center"
                    >
                        More about us
                    </button>
                    <button
                        class="px-8 py-4 bg-gray-800 text-white lg:w-[170px]"
                    >
                        Let's talk
                    </button>
                </div>
            </div>
        </section>

        <!--Who we are -->
        <section
            class="mx-auto text-center lg:px-52 mt-10 w-full bg-theme-black-dark text-white pb-56"
        >
            <div class="grid grid-cols-2 justify-items-center">
                <div class="col-span-2 text-left">
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
                            data-aos="fade-up"
                            subtitle="Define"
                            :number="1"
                            details="Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Design"
                            :number="2"
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
                            details="Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt ab."
                        />
                    </div>

                    <div class="col-span-1">
                        <SubtitleAndDetails
                            subtitle="Design"
                            :number="2"
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
                    <div class="col-span-1">
                        <AnimatedImage
                            image_url="https://www.shutterstock.com/shutterstock/photos/2155227903/display_1500/stock-vector-pixel-game-win-screen-retro-bit-video-game-interface-with-you-win-text-computer-game-level-up-2155227903.jpg"
                        />
                    </div>

                    <div class="col-span-1">
                        <AnimatedImage
                            image_url="https://cdn1.epicgames.com/spt-assets/7dbdd3c2a72e4cbaacc166a884031882/expeditions--a-mudrunner-game-rc1vn.jpg?h=270&quality=medium&resize=1&w=480"
                        />
                    </div>

                    <div class="col-span-1">
                        <AnimatedImage
                            image_url="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/07/greenmangaming-summer-sale.jpg"
                        />
                    </div>

                    <div class="col-span-1">
                        <AnimatedImage
                            image_url="https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    </MainSiteLayout>
</template>

<script setup>
import { onMounted, onUpdated } from "vue";
import { Head } from "@inertiajs/vue3";
import MainSiteLayout from "@/Layouts/MainSite/MainSiteLayout.vue";
import SubtitleAndDetails from "@/Components/MainSite/SubtitleAndDetails.vue";
import AnimatedImage from "@/Components/MainSite/AnimatedImage.vue";
</script>
