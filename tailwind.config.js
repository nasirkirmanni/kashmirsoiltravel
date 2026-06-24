/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1f2a1d',
        'brand-med': '#2d3a2a',
        'brand-hover': '#2a3827',
        'brand-text': '#4b5b47',
        'brand-heading': '#336443',
        'brand-accent': '#85AB8B',
        'brand-bottom-text': '#3d5638',
        'brand-bottom-hover': '#2d4228',
      },
      fontFamily: {
        sans: ['"Neue Haas Grotesk Text Pro"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Neue Haas Grotesk Display Pro 55 Roman"', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
