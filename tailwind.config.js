/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", ],
  theme: {
    fontSize: {
      xs: ['0.6875rem', '1rem'],
      sm: ['0.75rem', '1.125rem'],
      base: ['0.875rem', '1.3125rem'],
      lg: ['1rem', '1.5rem'],
      xl: ['1.125rem', '1.6875rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    extend: {
      colors: {
        'primary-color': '#4099DA',
        'primary-color-light': '#EAF4FB',
        'primary-color-dark': '#1D6396',
        'gray-color-50': '#f5f6f7', // for content background & card content background
        'gray-color-100': '#e5e8eb', // for card header background & user icon border
        'gray-color-200': '#b3bbc2', // for card header border
        'regular-color': '#3B4956',
        'muted-color': '#99A4AE',
        'success-color': '#117E36',
        'notification-color': '#E85757',

      },
      textColor: {
        'primary-color': '#4099DA',
        'primary-color-light': '#EAF4FB',
        'primary-color-dark': '#1D6396',
        'gray-color-50': '#f5f6f7',
        'gray-color-100': '#e5e8eb',
        'gray-color-200': '#b3bbc2',
        'regular-color': '#3B4956',
        'muted-color': '#99A4AE',
        'success-color': '#117E36',
        'notification-color': '#E85757',
      },
      borderColor: {
        'primary-color': '#4099DA',
        'primary-color-light': '#EAF4FB',
        'primary-color-dark': '#1D6396',
        'gray-color-50': '#f5f6f7',
        'gray-color-100': '#e5e8eb',
        'gray-color-200': '#b3bbc2',
        'regular-color': '#3B4956',
        'muted-color': '#99A4AE',
        'success-color': '#117E36',
        'notification-color': '#E85757',
      },
    },
  },
  plugins: [],
}
