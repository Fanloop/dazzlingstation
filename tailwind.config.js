/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*{.html, .js}"],
   theme: {
      extend: {
         colors: {
            color1: "#000000",
            color2: "#14213D",
            color3: "#FCA311",
            color4: "#E5E5E5",
            color5: "#FFFFFF",
         },
         fontFamily: {
            gabarito: ["Gabarito", "sans-serif"],
            Lexend: ["Lexend", "sans-serif"],
            "Tilt-Neon": ["Tilt Neon", "sans-serif"],
         },
      },
   },
   plugins: [],
};

// font-family: 'Gabarito', sans-serif;
// font-family: 'Lexend', sans-serif;
// font-family: 'Tilt Neon', sans-serif;
