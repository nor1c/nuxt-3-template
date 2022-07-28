/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-1deg)'
          },
          '50%': {
            transform: 'rotate(1deg)'
          }
        }
      },
      animation: {
        wigglefast: 'wiggle 0.5s ease-in-out infinite',
        wigglemedium: 'wiggle 0.8s ease-in-out infinite',
        wiggleslow: 'wiggle 1s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-focus', 'dark-group-hover', 'dark-even', 'dark-odd'],
      borderColor: ['dark', 'dark-hover', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
      fontWeight: ['hover']
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
