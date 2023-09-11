/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.8rem, min(1.5dvw, 1.5dvh), 8rem)",
      },
      colors: {
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-gradient-from": "hsl(37, 97%, 70%)",
        "instagram-gradient-to": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",
        "dark-theme-toggle-from": "hsl(210, 78%, 56%)",
        "dark-theme-toggle-to": "hsl(146, 68%, 55%)",
        "light-theme-toggle": "hsl(230, 22%, 74%)",
        "dark-theme-bg": "hsl(230, 17%, 14%)",
        "dark-theme-top-bg-pattern": "hsl(232, 19%, 15%)",
        "dark-theme-card-bg": "hsl(228, 28%, 20%)",
        "dark-theme-text": "hsl(228, 34%, 66%)",
        "dark-theme-white-text": "hsl(0, 0%, 100%)",
        "light-theme-bg": "hsl(0, 0%, 100%)",
        "light-theme-top-bg-pattern": "hsl(225, 100%, 98%)",
        "light-theme-card-bg": "hsl(227, 47%, 96%)",
        "light-theme-text": "hsl(228, 12%, 44%)",
        "light-theme-text-dark-blue": "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
