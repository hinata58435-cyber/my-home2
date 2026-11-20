/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8F3', // عاجي ivory
          100: '#E9E1D2', // بيج beige
          200: '#D8CDB8',
          300: '#B69B7D', // خشبي wood
          400: '#A6886A',
          500: '#8F7355',
          600: '#6F7E68', // سيج متوسط
          700: '#566755',
          800: '#829582', // سيج sage
          900: '#454D43', // داكن dark
        },
        sage: {
          light: '#A7B3A4',
          DEFAULT: '#829582',
          dark: '#566755',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
        display: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(69, 77, 67, 0.20)',
      },
    },
  },
  plugins: [],
};
