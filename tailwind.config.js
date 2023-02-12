/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", ],
  theme: {
    fontSize: {

      xs: ['0.6875rem', '1rem'], // 11px size, 16px line-height
      sm: ['0.75rem', '1.125rem'], // 12px, 18px
      base: ['0.875rem', '1.3125rem'], // 14px, 21px
      lg: ['1rem', '1.5rem'], // 16px, 24px
      xl: ['1.125rem', '1.6875rem'], // 18px, 27px
      '2xl': ['1.5rem', '2rem'], // 24px, 32px
      '3xl': ['1.875rem', '2.25rem'], // 30px, 36px
      '4xl': ['2.25rem', '2.5rem'], // 36px, 40px
      '5xl': ['3rem', '1'], // 48px, 16px
      '6xl': ['3.75rem', '1'], // 60px, 16px
      '7xl': ['4.5rem', '1'], // 72px, 16px
      '8xl': ['6rem', '1'], // 96px, 16px
      '9xl': ['8rem', '1'], // 128px, 16px
    },
    extend: {
      colors: {
        'primary-color': '#4099DA',
        'primary-color-light': '#EAF4FB', // for sidebar navigation link active and hover state
        'primary-color-dark': '#1D6396', // for bulb icon at Did You Know component
        'gray-color-50': '#f5f6f7', // for content background & card content background
        'gray-color-100': '#e5e8eb', // for card header background & user icon border
        'gray-color-200': '#b3bbc2', // for card header border
        'regular-color': '#3B4956', // for default text color
        'muted-color': '#99A4AE', // for muted color
        'success-color': '#117E36', // for Server status Icon inside Topbar
        'notification-color': '#E85757', // for Notification Icon inside Topbar

      },
      textColor: {
        'primary-color': '#4099DA',
        'primary-color-light': '#EAF4FB',
        'primary-color-dark': '#1D6396',
        'gray-color-50': '#f5f6f7',
        'gray-color-100': '#e5e8eb',
        'gray-color-200': '#b3bbc2',
        'regular-color': '#3B4956', // Default text color
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
        'gray-color-200': '#b3bbc2', // Border color for card
        'regular-color': '#3B4956',
        'muted-color': '#99A4AE',
        'success-color': '#117E36',
        'notification-color': '#E85757',
      },
    },
  },
  plugins: [],
}
