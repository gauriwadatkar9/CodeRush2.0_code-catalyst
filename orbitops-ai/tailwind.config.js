/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03060d',
          900: '#060b16',
          850: '#080f1c',
          800: '#0b1424',
          700: '#101c33',
          600: '#16233f',
          500: '#1f3155',
        },
        cyan: {
          accent: '#22d3ee',
        },
        blue: {
          accent: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.15), 0 0 24px -4px rgba(34,211,238,0.25)',
        'glow-blue': '0 0 0 1px rgba(59,130,246,0.15), 0 0 24px -4px rgba(59,130,246,0.3)',
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.08), transparent 40%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.08), transparent 40%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
