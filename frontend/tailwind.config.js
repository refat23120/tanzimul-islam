/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ["titillium", "sans-serif"],
        Cascadia: ["Cascadia", "sans-serif"],
      },
    },
  },
  plugins: [],
}