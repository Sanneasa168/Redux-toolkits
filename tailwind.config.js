// /** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    // './src/**/*.{js,jsx,ts,tsx}',
    // 'node_modules/flowbite-react/lib/esm/**/*.js'
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

