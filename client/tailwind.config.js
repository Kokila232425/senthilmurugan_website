/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interLight: ['Inter-light', 'sans-serif'],
        interItalic: ['Inter-italic', 'sans-serif'],
      },
      fontWeight: {
        'inter-medium': '500',
      },
    
    },
    screens:{
      lg: '1280px', 
    },
  },
  plugins: [],
}

