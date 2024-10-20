<template>
    <div>
        <nav
            :class="{
                'w-full lg:w-1/2': toogleSideBar,
                'w-0': !toogleSideBar,
            }"
            class="fixed flex-shrink-0 duration-1000 overflow-hidden -right-10 h-screen -top-0 z-50"
        >
            <div class="flex flex-col bg-black h-screen space-y-20">
                <div
                    class="flex flex-row mt-5 lg:mt-10 lg:pl-12 justify-between"
                >
                    <h3
                        class="text-theme-green-fluo flex flex-row items-center space-x-4 font-nunito ml-10 lg:ml-0"
                    >
                        <span
                            class="uppercase font-bold text-xs tracking-widest"
                        >
                            {{ $t("main-site.navigate_to") }}
                        </span>
                        <div class="w-24 h-[0.8px] bg-theme-green-fluo"></div>
                    </h3>
                    <button class="mr-14" @click="closeSideBar()">
                        <XIcon class="text-white" />
                    </button>
                </div>
                <ul class="space-y-8 mx-10">
                    <li
                        v-for="tab in tabs"
                        :key="tab.name"
                        class="text-white opacity-100 font-montserrat"
                    >
                        <a
                            :href="tab.route"
                            class="transition-color hover:text-theme-green-fluo duration-700"
                        >
                            <h3 class="text-xs mb-1 opacity-75 font-bold">
                                {{ tab.id }}.
                            </h3>
                            <div
                                class="flex flex-row !text-white items-center space-x-3"
                            >
                                <h3 class="text-[28px] font-bold">
                                    {{ tab.name }}
                                </h3>
                            </div>
                        </a>
                    </li>
                </ul>
                <!--Social media-->
                <div class="mx-8 text-white">
                    <p class="w-80 opacity-20">
                        Perspiciatis hic praesentium nesciunt. Et neque a
                        dolorum voluptatem porro iusto sequi veritatis libero
                        enim. Iusto id suscipit veritatis neque reprehenderit.
                    </p>
                    <ul class="flex flex-row space-x-3 mt-4">
                        <li v-for="media in social_media">
                            <component
                                class="w-6 h-6 transition-opacity opacity-20 hover:opacity-100 cursor-pointer duration-700"
                                :is="media.icon"
                            ></component>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
    AtSignIcon,
    ContactIcon,
    HomeIcon,
    NewspaperIcon,
    WorkflowIcon,
    XIcon,
    TwitterIcon,
    InstagramIcon,
    DribbbleIcon,
} from "lucide-vue-next";

const emit = defineEmits(["closeSideBar"]);
const props = defineProps({
    showSideBar: {
        type: Boolean,
        default: false,
    },
});

const showSideBar = computed(() => props.showSideBar);
const toogleSideBar = ref(showSideBar.value);

const tabs = computed(() => {
    const routes = [
        {
            id: "01",
            name: "Home",
            route: "",
            icon: HomeIcon,
            selected: false,
        },
        {
            id: "02",
            name: "About",
            route: "",
            icon: NewspaperIcon,
            selected: false,
        },
        {
            id: "03",
            name: "Works",
            route: "",
            icon: WorkflowIcon,
            selected: false,
        },
        {
            id: "04",
            name: "Contact",
            route: "",
            icon: AtSignIcon,
            selected: false,
        },
    ];

    return routes;
});

const social_media = computed(() => {
    const media = [
        {
            icon: TwitterIcon,
            link: "",
        },
        {
            icon: InstagramIcon,
            link: "",
        },
        {
            icon: DribbbleIcon,
            link: "",
        },
    ];

    return media;
});

watch(
    () => showSideBar.value,
    () => {
        toogleSideBar.value = showSideBar.value;
    }
);

function closeSideBar() {
    toogleSideBar.value = false;
    emit("closeSideBar", toogleSideBar.value);
}
</script>
