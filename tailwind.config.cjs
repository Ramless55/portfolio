import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'main': '#1d232a',
        'pink': '#D926A9',
        "primary": "#5616C5",
        'neutral-focus': '#242B33'
      }
    },

    fontFamily: {
      chakra: ['Chakra Petch']
    },
  },
  plugins: [
    daisyui
  ]
}
