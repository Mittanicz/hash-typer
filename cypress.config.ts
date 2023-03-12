import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    screenshotOnRunFailure: false,
    e2e: {
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
        baseUrl: "http://127.0.0.1:4173/",
        experimentalRunAllSpecs: true,
    },
    component: {
        devServer: {
            framework: "vue",
            bundler: "vite",
        },
    },
});
