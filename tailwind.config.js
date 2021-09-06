module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "signin-image":
          "url('https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png')",
      }),
      colors: {
        primary: "#182277",
        primaryDark: "#10185e",
        secondary: "#FFB7E4",
        secondaryDark: "#de8cbf",
      },
    },
    fontFamily: {
      sans: ['"Inter"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
