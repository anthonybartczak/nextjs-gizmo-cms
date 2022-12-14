const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        24: "6rem",
      },
      backgroundImage: {
        "hero-background": "url('/hero-background.webp')",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
