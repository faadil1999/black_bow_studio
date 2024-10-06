<template>
    <div>
        <nav
        :class="{
            'w-1/2': toogleSideBar,
            'w-0': !toogleSideBar,
        }"
        class="fixed flex-shrink-0 duration-1000 overflow-hidden lg:-right-10 h-screen lg:-top-0"
        >
            <div class="flex flex-col bg-black h-screen">
                <div class="flex flex-row my-5 px-5 justify-between">
                    <h3 class="text-white">Navigate to </h3>
                    <button class="lg:mr-8" @click="closeSideBar()">
                        <XIcon class="text-white" />
                    </button>
                </div>
                <ul class="space-y-16 my-auto lg:mx-10">
                <li
                    v-for="tab in tabs"
                    :key="tab.name"
                    class="text-white opacity-100"
                    :class="{
                    'text-gray-400': tab.selected,
                    'hover:text-theme-green-fluo': !tab.selected,
                    }"
                >
                    <a :href="tab.route">
                    <div class="flex flex-row items-center space-x-3">
                        <component class="w-8 h-8" :is="tab.icon" />
                        <h3>{{ tab.name }}</h3>
                    </div>
                    </a>
                </li>
                </ul>
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
      name: "Home",
      route: "",
      icon: HomeIcon,
      selected: false,
    },
    {
      name: "About",
      route: "",
      icon: NewspaperIcon,
      selected: false,
    },
    {
      name: "Works",
      route: "",
      icon: WorkflowIcon,
      selected: false,
    },
    {
      name: "Contact",
      route: "",
      icon: AtSignIcon,
      selected: false,
    },
  ];

  return routes;
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
