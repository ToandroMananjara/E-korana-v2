/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        "grey-secondary": "#9BA5B3",
        "blue-primary": "#027AFF",
        "grey-bg-secondary": "#F6F6F6",
        "grey-border-primary": "D9D9D9",
        "red-primary": "#FF0000",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
