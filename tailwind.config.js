// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "about-smile": "url('/smile.jpg')",
        worker: "url('/black.jpg')",
        woman: "url('/abcd1.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
