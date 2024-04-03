/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          50:"#FDF3F4",
          100:"#F8E8E4",
          200:"#F6D5D9",
          300:"#EFB2BB",
          400:"#E58796",
          500:"#D96479",
          600:"#C23C5B",
          700:"#A22E4B",
          800:"#882944",
          900:"#75263F",
          950:"#41101E",
        },
        secondary:{
          50:"#F3F5FB",
          100:"#E4E7F5",
          200:"#D0D6ED",
          300:"#AFBBE1",
          400:"#8997D1",
          500:"#6D78C4",
          600:"#5460B6",
          700:"#4C4D9F",
          800:"#464588",
          900:"#3B3C6D",
          950:"#272744",
        },
      }
    },
  },
  plugins: [],
}

