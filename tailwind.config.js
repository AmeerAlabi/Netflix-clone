/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        sky : "#D2EDFF",
        dark : "  #0051B4" ,
        peach : " #FFE0EB",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        darker: " #001465"

      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'hero-bg': "url(./components/assets/Herobg.jpg)",
        'footer' : "url(./components/assets/footer.png)",
        'abt-bg' : "url(./components/assets/abtbg.svg)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs:{'max' : "480px"},
      md:{'max' :"768px" } ,
      lg:{'max' : "1440px"},
      xl: {'max': "1700px"}
    },
  },
  plugins: [],
};