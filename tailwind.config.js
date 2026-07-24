import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'], 
      },
      colors: {
        'darkest':'#2C3333',
         'darker': '#395B64',
         'darke' : '#5e868f', 
         'dark': ' #A5C9CA',
         'light': '#E7F6F2'
      }
    },
  },
  plugins: [
    typography,
  ]
}
