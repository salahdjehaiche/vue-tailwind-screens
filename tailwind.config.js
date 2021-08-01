module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-blue': '#3f90ae',
        'darkgreen-blue': '#1a789a',
        'lightgreen-blue': '#5ea7be',
        'lightgray': "#f1f1f1",
        'lightgray-100': "#fafafa",
        'lightgray-600': "#f6f6f6",
        'gray-350':"#d1d1d1",
        'graylime': "#e9f4f7",
        'gray-250':"#c6c6c6"
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
