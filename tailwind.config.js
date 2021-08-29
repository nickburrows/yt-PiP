const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "text-main": "var(--text-main)",
        transparent: "transparent",
        current: "currentColor",
        cyan: colors.cyan,
        teal: colors.teal,
        dark: colors.trueGray,
        red: colors.red,
        sky: colors.sky,
        amber: colors.amber
      }
    }
  },
  variants: {
    extend: {
      borderColor: ["responsive", "dark", "group-hover", "hover"],
      borderOpacity: ["responsive", "dark", "group-hover", "hover"],
      backgroundColor: ["responsive", "light", "dark"],
      fill: ["hover", "focus"],
      stroke: ["hover", "focus"]
    }
  },
  plugins: [
    require("tailwindcss-prefers-color-scheme")(),
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.md"),
          fontWeight: theme("fontWeight.600")
        },
        ".btn-blue": {
          backgroundColor: theme("colors.blue.500"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.blue.600")
          }
        },
        ".btn-yellow": {
          backgroundColor: theme("colors.yellow.500"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.yellow.600")
          }
        }
      }

      addComponents(buttons)
    })
  ]
}
