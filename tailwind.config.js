/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        userDarkText: "hsl(229, 25%, 31%)",
        userScoreText: "hsl(229, 64%, 46%)",
        userHeaderOutline: "hsl(217, 16%, 45%)",

        userBgGradient1: "hsl(214, 47%, 23%)",
        userBgGradient2: "hsl(237, 49%, 15%)",

        userScissorsGradient1: "hsl(39, 89%, 49%)",
        userScissorsGradient2: "hsl(40, 84%, 53%)",

        userPaperGradient1: "hsl(230, 89%, 62%)",
        userPaperGradient2: "hsl(230, 89%, 65%)",

        userRockGradient1: "hsl(349, 71%, 52%)",
        userRockGradient2: "hsl(349, 70%, 56%)",

        userLizardGradient1: "hsl(261, 73%, 60%)",
        userLizardGradient2: "hsl(261, 72%, 63%)",

        userSpockGradient1: "hsl(189, 59%, 53%)",
        userSpockGradient2: "hsl(189, 58%, 57%)",
      },
      backgroundImage: {
        userRadialBg:
          "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        userPentagonBg: "url('/bg-pentagon.svg')",
      },
    },
  },
  plugins: [],
};
