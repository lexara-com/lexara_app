/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'lexara': {
          'dark-navy': '#1E2B3B',
          'light-navy': '#3B576C',
          'sky-blue': '#C6D8DB',
          'mahogany': '#76444B',
          'white-smoke': '#F3F0ED',
          'pure-white': '#FFFFFF',
        },
      },
      fontFamily: {
        'serif': ['Lora', 'Georgia', 'serif'],
        'sans': ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}