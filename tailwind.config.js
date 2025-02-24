/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#00ff88',
        'secondary': '#0a0a0a',
        'accent': '#ff0066',
        'background': '#000000',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px #00ff88',
            textShadow: '0 0 20px #00ff88'
          },
          '50%': { 
            boxShadow: '0 0 40px #00ff88',
            textShadow: '0 0 40px #00ff88'
          },
        }
      }
    },
  },
  plugins: [],
}
