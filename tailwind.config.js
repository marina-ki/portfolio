module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      borderColor: ["responsive", "hover", "focus", "group-hover"],
      borderWidth: ["responsive", "hover", "focus", "group-hover"],
      margin: ["responsive", "hover", "focus", "group-hover"],
      padding: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
