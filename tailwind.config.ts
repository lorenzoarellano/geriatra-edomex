import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.css',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    extend: {
      // ──────────────────────────────────────────────────────
      // Paleta de colores del Dr. Eduardo Pacheco
      // ──────────────────────────────────────────────────────
      colors: {
        primary: {
          50:  '#f0f5fa',
          100: '#dde9f4',
          200: '#bdd3ea',
          300: '#90b5d8',
          400: '#6592c3',
          500: '#4874a2', // ← Base principal (Azul Pizarra)
          600: '#3a5f8a',
          700: '#2f4d71',
          800: '#27405e',
          900: '#23364f',
          950: '#172235',
          DEFAULT: '#4874a2',
        },
        secondary: {
          50:  '#f5f7ee',
          100: '#e8edda',
          200: '#d3dcb7',
          300: '#b8c68c',
          400: '#a4b373', // ← Base principal (Verde Olivo)
          500: '#8a9957',
          600: '#6c7943',
          700: '#545f35',
          800: '#454e2c',
          900: '#3a4226',
          950: '#1e2313',
          DEFAULT: '#a4b373',
        },
        cream: {
          50:  '#f4f9fe',
          100: '#e5f1fb',
          200: '#cfe3f3', // ← Base (Azul Vibrante/Brillante)
          300: '#abdaee',
          400: '#7ec4e4',
          500: '#5aadd5',
          DEFAULT: '#cfe3f3',
        },
      },

      // ──────────────────────────────────────────────────────
      // Tipografía
      // ──────────────────────────────────────────────────────
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
        sans:    ['Open Sans', 'sans-serif'],
      },

      // ──────────────────────────────────────────────────────
      // Animaciones customizadas
      // ──────────────────────────────────────────────────────
      animation: {
        'fade-up':      'fadeUp 0.6s ease-out both',
        'fade-in':      'fadeIn 0.5s ease-out both',
        'slide-in-left':'slideInLeft 0.6s ease-out both',
        'bounce-subtle':'bounceSlight 2s ease-in-out infinite',
        'pulse-slow':   'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSlight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },

      // ──────────────────────────────────────────────────────
      // Sombras
      // ──────────────────────────────────────────────────────
      boxShadow: {
        'card':   '0 4px 24px rgba(72, 116, 162, 0.08)',
        'card-hover': '0 12px 40px rgba(72, 116, 162, 0.18)',
        'btn':    '0 4px 16px rgba(72, 116, 162, 0.30)',
        'glass':  '0 8px 32px rgba(72, 116, 162, 0.12)',
      },

      // ──────────────────────────────────────────────────────
      // Backdrop blur extra
      // ──────────────────────────────────────────────────────
      backdropBlur: { custom: '10px' },

      // ──────────────────────────────────────────────────────
      // Border radius
      // ──────────────────────────────────────────────────────
      borderRadius: { '4xl': '2rem' },

      // ──────────────────────────────────────────────────────
      // Spacing extra
      // ──────────────────────────────────────────────────────
      spacing: { '18': '4.5rem', '22': '5.5rem' },

      // ──────────────────────────────────────────────────────
      // Typography plugin config
      // ──────────────────────────────────────────────────────
      typography: (theme: (arg: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h2: { fontFamily: 'Oswald, sans-serif', color: theme('colors.primary.700') },
            h3: { fontFamily: 'Oswald, sans-serif', color: theme('colors.primary.600') },
            strong: { color: theme('colors.primary.700') },
            a: { color: theme('colors.primary.500'), textDecoration: 'none' },
          },
        },
      }),
    },
  },

  plugins: [forms, typography],
} satisfies Config
