/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        "gemini-blue": "#4285F4",
        "gemini-dark": "#1a73e8",
        "gemini-light": "#e8f0fe",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
