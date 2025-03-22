module.exports = {
    content: [
        // Paths to your templates...
        '../template-parts/**/*.php','../*.php', '../inc/**/*.php', './js/react-components/**/*.js'
    ],
    darkMode: 'media', // This allows manual control over dark mode via the 'dark' class
    plugins: [require("daisyui")],
    daisyui: {
    }
};
