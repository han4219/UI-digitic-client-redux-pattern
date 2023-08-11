/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-right': {
          '0%, 100%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(0px)' }
        }
      },
      animation: {
        'go-right': 'bounce-right 1s linear infinite'
      },
      boxShadow: {
        outer: '0 0 10px lightgrey'
      },
      screens: {
        400: '400px',
        900: '900px'
      },
      backgroundImage: {
        'main-banner-1': "url('/assets/images/main-banner-1.jpg')",
        'main-banner-2': "url('/assets/images/main-banner-2.jpg')",
        'mini-banner-1': "url('/assets/images/catbanner-01.jpg')",
        'mini-banner-2': "url('/assets/images/catbanner-02.jpg')",
        'mini-banner-3': "url('/assets/images/catbanner-03.jpg')",
        'mini-banner-4': "url('/assets/images/catbanner-04.jpg')"
      },
      colors: {
        white: '#FFFFFF',
        primary: '#232F3E',
        secondary: '#131921',
        'dark-red': '#EF3939',
        'bg-body': '#F5F5F7',
        'light-brown': '#FEBD69'
      },
      textColor: {
        'red-brown': '#BF4800'
      }
    }
  },
  plugins: []
}
