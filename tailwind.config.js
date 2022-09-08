/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Overpass', 'sans-serif'],
                ubuntu: ['Ubuntu', 'sans-serif'],
            },
            colors: {
                primary: {
                    'light-red': '#FA525D',
                    'very-light-red': '#FB7F7D',
                    'very-dark-blue': '#1F3F5B',
                },
                neutral: {
                    'grayish-blue': '#C8C8CB',
                    'very-dark-grayish-blue': '#4B5862',
                    'very-dark-black-blue': '#25252C',
                },
                body: {
                    'very-dark-gray-blue': '#2C2D3F',
                    'very-dark-desaturated-blue': '#404163',
                },
            },
        },
    },
    plugins: [],
}
