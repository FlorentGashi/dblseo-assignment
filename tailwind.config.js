/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      animation: {
        'shine': 'shine 4s ease infinite',
        'shine-slow': 'shine 5s ease infinite',
        'shine-once': 'shine-once 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-100% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'shine-once': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
}
