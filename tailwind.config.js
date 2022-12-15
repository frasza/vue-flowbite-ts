/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/src/flowbite.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
