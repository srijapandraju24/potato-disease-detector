
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#2D5A27',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#4A6B46',
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: '#991B1B',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#4B5563'
        },
        accent: {
          DEFAULT: '#E5E7EB',
          foreground: '#1F2937'
        },
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      },
      fontSize: {
        'chapter': '16px',
        'subtitle-1': '14px',
        'subtitle-2': '12px',
        'body': '12px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

