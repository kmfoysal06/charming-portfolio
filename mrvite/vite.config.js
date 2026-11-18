const path = require('node:path');
export default {
    build: {
        outDir: 'build',
        emptyOutDir: false,
        manifest: true,
        cssCodeSplit: true,
        lib: {
            entry: {
                main: 'src/main.js',
                charming_v2: 'src/charming-v2.js',
                charming_v3: 'src/charming-v3.js',
                admin: 'src/assets/js/admin.js',
            },

            fileName: (format, entryName) => `${entryName}.${format}.js`,
        },


    },
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, 'src'),
        }
    }
}
