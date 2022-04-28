import { fileURLToPath, URL } from "url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            // https://rollupjs.org/guide/en/#outputmanualchunks
            // output: {
            //     manualChunks: {
            //         "group-admin": [
            //           "./src/views/admin/AdminStartView.vue", 
            //           "./src/views/admin/RemoveUserView.vue"
            //         ],
            //     },
            // },
        },
    },
})
