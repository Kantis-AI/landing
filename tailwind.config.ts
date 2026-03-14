/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1D3461',
          mint: '#68C9A0',
          'navy-deep': '#111E38',
          'navy-light': '#2D4A7A',
          'mint-light': '#A8E4CB',
          'mint-pale': '#EAF8F2',
          'grey-50': '#F7F8FA',
          'grey-400': '#9CA3AF',
          'grey-700': '#374151',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      boxShadow: {
        'brand-nav': '0 1px 12px rgba(0,0,0,0.08)',
        'brand-card-hover': '0 4px 24px rgba(29, 52, 97, 0.10)',
      }
    },
  },
  plugins: [],
}
