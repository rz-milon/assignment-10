/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, trs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
