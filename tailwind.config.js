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
      fontFamily: {
        body: ['Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont']
      },
      backgroundImage: {
        'home-page-pattern': "url('/images/background-pattern.jpg')",
      },
      backgroundColor: {
        light: 'var(--background-light)',
        body: 'var(--background)'
      },
      colors: {
        primary: 'var(--prim-color)',
        bright: 'var(--text-color-bright)',
        'body-text': 'var(--text-color)'
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

