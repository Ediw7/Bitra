/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        'bitra-green': 'var(--color-bitra-green)',
        'bitra-green-hover': 'var(--color-bitra-green-hover)',
        gray: {
          DEFAULT: 'var(--color-gray)',
          light: 'var(--color-gray-light)',
        },
        surface: 'var(--color-surface)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
