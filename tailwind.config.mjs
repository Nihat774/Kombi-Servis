/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateY(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateY(-2px)' },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        shake: 'shake .6s ease-in-out infinite',
        slideIn: "slideIn 1s ease-out forwards",
      },
       },
  },
  plugins: [],
};
