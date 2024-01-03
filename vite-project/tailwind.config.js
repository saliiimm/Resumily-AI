/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'paragraphcolor': 'hsla(0, 0%, 100%, 0.4)',
      },
    },
  },
  plugins: [],
};
