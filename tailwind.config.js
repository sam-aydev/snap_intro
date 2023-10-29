/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "hsl(0, 0%, 98%)",
        secondary: "hsl(0, 0%, 41%)",
        tertiary: "hsl(0, 0%, 8%)",
      }
    },
  },
  plugins: [],
}

