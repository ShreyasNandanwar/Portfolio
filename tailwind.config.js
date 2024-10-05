export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        'gradient-move': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        'gradient-animation': 'gradient-move 5s ease infinite',
      },
      fontFamily: {
        playfair: ['playfair Display', 'serif'],  
        roboto: ['Roboto', 'san-serif'],
      },
      backgroundImage: {
        'light-hero' : "url('/light-hero.jpg')",  // light-mode background
        'dark-hero' : "url('/dark-hero.jpg')",    // dark-mode background
      }

    },
    
  },
  plugins: [],
};
