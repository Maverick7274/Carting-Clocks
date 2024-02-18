/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    extend: {
      colors: {
        heading: "#70B8FF",
        links: "#C2E6FF",
        primary: "#3E63DD",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        bg: {
          500: "#003362",
          700: "#141726",
          900: "#111927",
        },
        blue: {
          100: "#0D2847",
          200: "#003362",
          300: "#004074",
          400: "#104D87",
          500: "#70B8FF",
          700: "#2870BD",
          900: "#0090FF",
        },
        orange: {
          50: "#FFA057",
          100: "#331E0B",
          200: "#462100",
          300: "#562800",
          400: "#66350C",
          500: "#7E451D",
          700: "#A35829",
          900: "#F76B15",
          950: "#FF801F",
        },
        },
      },
  },
	plugins: [],
};
