/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        darkRaspberry: "hsl(332, 51%, 32%)",
        white: "hsl(0, 0%, 100%)",
        roseWhite: "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        lightGrey: "hsl(30, 18%, 87%)",
        wengeBrown: "hsl(30, 10%, 34%)",
        darkCharcoal: "hsl(24, 5%, 18%)",
      },
    },
  },
  plugins: [],
};
