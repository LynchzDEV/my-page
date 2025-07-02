/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // darkMode: 'selector', // This ensures dark mode only activates with explicit dark class
  // Alternative: set darkMode to false to completely disable dark mode
  darkMode: false,
};
