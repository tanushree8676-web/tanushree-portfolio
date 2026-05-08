import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f5f8", // Light silver
        foreground: "#1f2937", // Darker for text
        lavender: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // Soft lavender
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        violet: {
          light: '#e9d5ff', // Pale violet
          DEFAULT: '#a855f7',
          dark: '#7e22ce',
        },
        blue: {
          frosted: '#bae6fd', // Frosted blue
        },
        purple: {
          pastel: '#e9d5ff', // Light pastel purple
        },
        cyan: {
          soft: '#a5f3fc', // Soft cyan
        },
        glow: '#38bdf8', // Subtle neon glow accent
        glass: 'rgba(255, 255, 255, 0.4)',
        glassDark: 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 15px rgba(56, 189, 248, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
