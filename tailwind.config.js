/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite-ts-test/dist/flowbite.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite-ts-test/plugin")],
};
