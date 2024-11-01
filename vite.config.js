import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import i18n from "laravel-vue-i18n/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js"],
            ssr: "resources/js/ssr.js",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
                compilerOptions: {
                    // treat all tags with a dash as custom elements
                    isCustomElement: (tag) => tag.includes("-"),
                },
            },
        }),
        i18n(),
    ],
    server: {
        host: true,
        hmr: {
            host: "localhost",
        },
    },
});
