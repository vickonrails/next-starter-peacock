/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-page-pattern': "url('/images/background-pattern.jpg')"
      },
      colors: {
        primary: '#b94c50'
      },
      boxShadow: {
        glow: '0 0 3px 2px #3c1516'
      },
      animation: {
        'slide-in': 'slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(-10px)',
            opacity: .3
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: [],
}

