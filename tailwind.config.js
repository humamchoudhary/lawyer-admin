/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        prim: "#29221d",
        "prim-light": "#473b33",
        cta: "#fe6c00",
      },
    },
  },
  plugins: [],
};
