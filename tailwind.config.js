/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#f7f0e3',
        sidebar: '#2a1f0e',
        appbg: '#1a1208',
        accent: '#8b5e3c',
        gold: '#f5c872',
        textdark: '#4a3728',
        // Trading module palette
        'neon-cyan': '#00f5ff',
        'neon-purp': '#c44fff',
        'neon-green': '#00ff88',
        'neon-pink': '#ff2d78',
        'tr-bg': '#09000f',
        'tr-card': '#0e0018',
        'tr-card2': '#160025',
        'tr-text': '#f5e6ff',
        'tr-dim': 'rgba(245,230,255,0.4)',
        'tr-border': 'rgba(196,79,255,0.15)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        spacemono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
