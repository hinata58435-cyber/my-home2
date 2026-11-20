/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f4ef',
          100: '#ece6d8',
          200: '#d9ccb3',
          300: '#c1ab85',
          400: '#a88d5e',
          500: '#8f7346',
          600: '#735a36',
          700: '#5a4630',
          800: '#463729',
          900: '#2e261e',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
        display: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(70, 55, 41, 0.18)',
      },
    },
  },
  plugins: [],
};
