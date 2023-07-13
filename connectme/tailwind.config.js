/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#828df8',
        accent: '#f471b5',
        neutral: '#1d283a',
        'base-100': '#0f1729',
        info: '#3b82f6',
        success: '#2bd4bd',
        warning: '#f4c152',
        error: '#fb6f84',
      },
    },
  },
  plugins: [],
}
