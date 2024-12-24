const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class', // or 'media' if you prefer
  plugins: [
    require('@tailwindcss/typography'),
    // Other plugins...
  ],
  theme: {
    extend: {
      colors: {
        myLightBg: '#e0e0e0',
        // myLightBg: '#F5F5F5',
        myDarkBg: '#000000',

        myLiteCardBg: '#ffffff',
        myDarkCardBg: '#002029',

        myLightTextLg: '#002029',
        myDarkTextLg: '#ffffff',

        myLiteTextSm: '#727477',
        myDarkTextSm: '#ffffff',

        myLightBar: '#ffffff',
        myDarkBar: '#0091d8',

        myBlueText: '#1E9BD4',
        myGreen: '#1DFBD3', 

        boxShadov: '0 0 18px #1DFBD3',
        myBlue300: 'rgba(30, 155, 212, .1)',

        myLightChat: "#2E8AF6",
        myDarkChat: '#1E9BD4',
        
        myDarkSelect: '#00161C'
      },
    },
  },
}
