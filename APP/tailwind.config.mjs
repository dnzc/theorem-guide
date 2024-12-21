/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xs': '200px',
      'xs': '270px',
      'sm': '380px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        body: 'var(--color-body)',
        'elevated': 'var(--color-elevated)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'bold': 'var(--color-bold)',
        'italic': 'var(--color-italic)',
        'link': 'var(--color-link)',
        'hover': 'var(--color-hover)',
      },
      fontFamily: {
        'sans' : ['var(--font-lato)'],
        'mono' : ['var(--font-fira)'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
