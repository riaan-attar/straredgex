/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'rgb(54, 80, 63)',
        'brand-accent': 'rgb(254, 248, 197)',
        'neutral-background': 'rgb(247, 247, 247)',
        'text-primary': 'rgb(0, 0, 0)',
        'text-secondary': 'rgb(107, 112, 118)',
        'border-primary': 'rgb(205, 207, 208)',
        'plus-color': 'rgb(152, 153, 155)',
      },
      fontFamily: {
        'primary': ['Inter Tight', 'Inter', 'sans-serif'],
        'secondary': ['Inter Tight', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '-0.04em',
        'subheading': '-0.01em',
        'cta': '-0.01em',
        'nav': '0.05em',
        'card-text': '-0.02em',
      },
      lineHeight: {
        'heading': '1.1',
        'body': '33px',
        'card': '39px',
      },
      borderRadius: {
        'custom': '10px',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'nav-height': '64px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}
