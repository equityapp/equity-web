/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [require("daisyui"), "flowbite/plugin"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0ea5e9",
          "primary-content": "#ffffff",
          secondary: "#22c55e",
          "secondary-content": "#ffffff",
          accent: "#3b82f6",
          "accent-content": "#ffffff",
          neutral: "#64748b",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-content": "#1f2937",
          info: "#60a5fa",
          "info-content": "#ffffff",
          success: "#a3e635",
          "success-content": "#ffffff",
          warning: "#fb923c",
          "warning-content": "#ffffff",
          error: "#f43f5e",
          "error-content": "#ffffff",
        },
        dark: {
          primary: "#0ea5e9",
          "primary-content": "#ffffff",
          secondary: "#22c55e",
          "secondary-content": "#ffffff",
          accent: "#3b82f6",
          "accent-content": "#ffffff",
          neutral: "#334155",
          "neutral-content": "#ffffff",
          "base-100": "#1f2937",
          "base-content": "#ffffff",
          info: "#60a5fa",
          "info-content": "#ffffff",
          success: "#a3e635",
          "success-content": "#ffffff",
          warning: "#fb923c",
          "warning-content": "#ffffff",
          error: "#f43f5e",
          "error-content": "#ffffff",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
