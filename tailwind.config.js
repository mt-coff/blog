module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*/.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "header-blue": {
          DEFAULT: "#00283c"
        },
        "mt-green": {
          DEFAULT: "#c0ffee",
        },
        "mt-cyan": {
          DEFAULT: "#0cffee",
        },
        "mt-magenta": {
          DEFAULT: "#ff0cee",
        },
        "mt-yellow-green": {
          DEFAULT: "#eeff0c",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
