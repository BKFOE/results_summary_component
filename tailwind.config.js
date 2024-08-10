const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { colors: {
      primary: {
        lightRed: "#FF5757", 
        lightOrange: "#FFB01F",
        greenTeal: "#00BD91",
        cobaltBlue: "#1125D4"
      },
      gradients: {
        lightSlateblue: "#7857FF",
        lightRoyalblue: "#2E2BE9",
        violetBlue: "#4E21CA",
        persianBlue: "#2421CA"
      },
      secondary: {
        paleBlue: "#EBF1FF",
        lightLavender: "#C8C7FF",
        darkGrayblue: "#303B5A"
      }
    }, 
    fontFamily: {
      bodyCopy:
      "Hanken-Grotesk, sans-serif"
    }, 
    screens: {
      'xxs': '375px'
    }
    }
  },
  plugins: [],
  safelist: [
    'bg-primary-lightRed/10',
    'text-primary-lightRed',
    'bg-primary-lightOrange/10',
    'text-primary-lightOrange',
    'bg-primary-greenTeal/10',
    'text-primary-greenTeal',
    'bg-primary-cobaltBlue/10',
    'text-primary-cobaltBlue',
  ]
}

