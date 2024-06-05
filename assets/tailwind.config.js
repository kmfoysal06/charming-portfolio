module.exports = {
  content: [
    // Paths to your templates...
    "../**.php",
    "../**/**.php",
    "./src/js/**.js"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
