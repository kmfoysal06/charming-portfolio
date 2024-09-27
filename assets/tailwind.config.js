module.exports = {
    content: [
        // Paths to your templates...
        "../**.php", "../**/**.php",
    ],
    darkMode: 'class', // This allows manual control over dark mode via the 'dark' class
    plugins: [require("daisyui")],
    daisyui: {
        // Set the default theme to light mode
        themes: ["light"],
    },
};
