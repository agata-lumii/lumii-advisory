import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'near-black': '#1E1C1A',
        'charcoal': '#3A3834',
        'gold': '#C9A96E',
        'gold-light': '#E8D5B0',
        'slate-warm': '#7A776F',
        'ash': '#B8B4AC',
        'parchment': '#DDD9D2',
        'stone': '#EAE7E1',
        'ivory': '#F9F7F4',
        'warm-white': '#FDFCFA',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1180px',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}

export default config
