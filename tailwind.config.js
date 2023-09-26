/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { backgroundImage: {
      'gradient-fade': 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)',
    },},
  },
  plugins: [],
}

