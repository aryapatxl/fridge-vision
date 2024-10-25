/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      mono: ['Monaco', 'monospace'], // monospace is the fallback
      con: ['Consolas', 'monospace'],
    },
    colors: {
      // ...
      'blue': {
        light: '#2e338c',
        DEFAULT: '#2e338c',
        dark: '#a3a5d3', // lighter blue
      },
      'white': {
        light: '#e9e6d9',
        DEFAULT: '#e9e6d9',
        dark: '#1c190f', // black

      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
    },
  },
  plugins: [],
};