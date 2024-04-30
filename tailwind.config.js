/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundWhite: "#F5F5F5",
        primaryPurple: "#6542F5",
        primaryBlack: "#181818",
        primaryBlue: "#2B93F3",
        primaryOrange: "#F37044",
        secondaryPurple: "#F7F5FF",
        primaryGray: "#333333",
        secondaryGray: "#868686",
        primaryGreen: "#3C9A4F",
        
        // secondaryPurple: "#494E65",
      },

      screens: {
        1440: "1400px",
      },
    },
  },
  plugins: [],
};
