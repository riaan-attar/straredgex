/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-amber': '#FEBD59',
        'forest': '#1E3A2E',
        'rust': '#C9782E',
        'sage': '#4C7A5D',
        'bg-cream': '#F7F4EE',
        'cream': '#F7F4EE',
        'ink': '#22221F',
        'border-muted': '#D8D3C7',

        // Semantic Aliases
        'brand-primary': '#1E3A2E',
        'brand-secondary': '#1E3A2E',
        'brand-accent': '#FEBD59',
        'brand-sage': '#4C7A5D',
        'neutral-background': '#F7F4EE',
        'bg-secondary': '#F7F4EE',
        'text-primary': '#22221F',
        'text-secondary': 'rgba(34, 34, 31, 0.7)',
        'border-primary': '#D8D3C7',
        'plus-color': '#C9782E',
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
        'nav-height': '76px',
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
