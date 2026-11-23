import path from "node:path";
import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/fonts/",
                    dest: "./",
                    rename: {
                        stripBase: 2
                    }
                }
            ]
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
        },
    },

    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            input: {
                main: "@/main.js",
                admin: "@/assets/js/admin.js",
                charming_v2: "@/charming-v2.js",
                charming_v3: "@/charming-v3.js",
            },
            output: {
                entryFileNames: `js/[name].js`,
                chunkFileNames: `js/chunks/[name].js`,
                assetFileNames: (file) => {
                    const names = file['names'];
                    if (names.length) {
                        const name = names[0];
                        const file_name_sep = name.split(".");

                        const fontFiles = ['ttf', 'woff', 'woff2'];
                        const imageFiles = ['jpg', 'png', 'jpeg', 'webp', 'avif'];

                        const extension = file_name_sep[file_name_sep.length - 1];
                        if (fontFiles.includes(extension)) {
                            return `fonts/[name].[ext]`;
                        }
                        if (imageFiles.includes(extension)) {
                            return `img/[name].[ext]`;
                        }
                        if (extension == 'css') {
                            return `css/[name].[ext]`;
                        }
                    }


                    return `assets/[name].[ext]`;
                },
            },
        },
    },
});

