/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '380px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'body': '#282c34',
        'elevated': '#abb2bf',
        'primary': '#e5c07b',
        'secondary': '#e06c75',
        'bold': '#61afef',
        'italic': '#c678dd',
        'link': '#56b6c2',
        'hover': '#98c379',
      },
      fontFamily: {
        "sans" : ['var(--font-sans)', 'sans-serif'],
        "mono" : ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}