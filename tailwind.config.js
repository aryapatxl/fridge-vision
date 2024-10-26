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
      con: ['Helvetica', 'monospace'],
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
      },
      'red': { // for errors
        light: '#B00020',
        DEFAULT: '#B00020',
        dark: '#CF6679',
      },
      'green': {
        DEFAULT: '#028A0F',
      },
    },
    extend: {
      fontSize: {
        '12xl': ['10rem', { lineHeight: '1' }], // You can adjust lineHeight as needed
        '15xl': ['12rem', { lineHeight: '1' }],
        '18xl': ['13rem', { lineHeight: '1' }],
        // Adding responsive sizes
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
    },
  },
  plugins: [],
};