import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
        "uw": "1920px", // Ultra Wide Support
      },
    },
    extend: {
      screens: {
        "uw": "1920px", // Ultra wide breakpoint
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Premium One Piece Design System Palette
        ocean: {
          DEFAULT: "#0b203a", // Deep Ocean Blue
          deep: "#051329",
          royal: "#1b365d", // Royal Navy
          foam: "#e6f4f8", // White Foam
          light: "#2b5c8f",
        },
        treasure: {
          DEFAULT: "#d4af37", // Treasure Gold
          light: "#f9e076",
          dark: "#aa820a",
          shimmer: "#fff3a8",
        },
        wood: {
          DEFAULT: "#3d2314", // Dark Wood
          light: "#5c3821",
          weathered: "#2b180d", // Weathered Brown
          plank: "#4a2e19",
        },
        paper: {
          DEFAULT: "#f5ecd8", // Old Paper Beige
          aged: "#e5d3b3",
          burnt: "#c8ad85",
          charcoal: "#2e251a",
        },
        sunset: {
          DEFAULT: "#ff6b35", // Sunset Orange
          bright: "#ff8c42",
          crimson: "#d90429", // Crimson Red
          blood: "#9b0014",
        },
        emerald: {
          DEFAULT: "#06d6a0", // Emerald Green
          dark: "#048a66",
          light: "#50ebd1",
        },
      },
      fontFamily: {
        cinematic: ["var(--font-cinematic)", "serif"],
        pirate: ["var(--font-pirate)", "cursive", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Fluid & Cinematic typography scale
        'hero': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'subtitle': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section': ['clamp(1.25rem, 2.2vw, 1.875rem)', { lineHeight: '1.25' }],
        'card': ['clamp(1.125rem, 1.8vw, 1.5rem)', { lineHeight: '1.3' }],
        'body': ['clamp(0.95rem, 1.1vw, 1.125rem)', { lineHeight: '1.6' }],
        'caption': ['clamp(0.8rem, 0.9vw, 0.95rem)', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'premium-gilded': '0 10px 30px -5px rgba(212, 175, 55, 0.25), 0 1px 3px 0 rgba(212, 175, 55, 0.5)',
        'premium-ocean': '0 20px 40px -10px rgba(11, 32, 58, 0.7), 0 4px 12px -2px rgba(0, 0, 0, 0.5)',
        'paper-lift': '0 15px 35px -5px rgba(46, 37, 26, 0.2), 0 5px 15px -3px rgba(46, 37, 26, 0.1)',
        'glowing-bounty': '0 0 25px 5px rgba(255, 107, 53, 0.35)',
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(180deg, #0b203a 0%, #051329 100%)',
        'wood-pattern': 'linear-gradient(rgba(61, 35, 20, 0.95), rgba(43, 24, 13, 0.98))',
        'paper-texture': 'linear-gradient(rgba(245, 236, 216, 0.92), rgba(229, 211, 179, 0.96))',
        'gold-foil': 'linear-gradient(135deg, #d4af37 0%, #fff3a8 50%, #aa820a 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "wave-swells": {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-12px) scaleY(1.05)' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        "shimmer": {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        "compass-spin": {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        "bird-glide": {
          '0%': { transform: 'translateX(-100vw) translateY(0) scale(0.8)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateX(100vw) translateY(-50px) scale(1.2)', opacity: '0' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave-swells": "wave-swells 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "compass-spin": "compass-spin 45s linear infinite",
        "bird-glide": "bird-glide 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
