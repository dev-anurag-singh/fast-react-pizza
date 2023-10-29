/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      height: {
        screen: '100dvh',
      },
    },
    fontFamily: {
      sans: 'Roboto Mono, monospace',
      indie: 'Indie Flower, cursive',
    },
  },
  plugins: [],
};
