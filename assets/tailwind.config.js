module.exports = {
    content: [
        // Paths to your templates...
        "../**.php", "../**/**.php",
    ],
    darkMode: 'class', // Enable dark mode based on 'dark' class
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#333333',
                    text: '#ffffff',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
}