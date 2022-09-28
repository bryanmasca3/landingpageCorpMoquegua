/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {           
        extend: { 
          colors: {    
          'main': '#33a490',
          'second':'#16375c',
          'thrid':'#161616',
          'four':'#fcfcfc'
        },
        fontFamily: {
          Baskerville: ["Barlow", ...defaultTheme.fontFamily.sans],
      },
      }        
      },
      plugins: [
        require('tw-elements/dist/plugin')
      ]
  }