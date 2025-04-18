import { heroui } from '@heroui/react';
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    heroui({
      addCommonColors: false,
      defaultTheme: 'light',
      themes: {
        light: {
          layout: {},
          colors: {
            primary: '#006FEE',
            secondary: '#C4841D',
            foreground: '#E4E4E7',
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: '#27272A',
            secondary: '#F0FCFF',
            foreground: '#FFFFFF',
          },
        },
      },
    }),
  ],
};
export default config;
