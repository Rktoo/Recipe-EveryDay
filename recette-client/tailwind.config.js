/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, css}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-glow' : {
          '0%, 100%': { borderColor : 'rgba(255, 0, 0, 0.5)'},
          '50%': { borderColor : 'rgba(0, 0, 255, 0.5)'},
        },
      },
      animation: {
        'border-glow' : 'border-glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

