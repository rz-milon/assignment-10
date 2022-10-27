/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, trs, ts, tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
