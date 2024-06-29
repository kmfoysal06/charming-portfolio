module.exports = {
    content: [
        // Paths to your templates...
        "../**.php", "../**/**.php",
    ],
    darkMode: 'media', // Enable dark mode based on 'dark' class
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
}