import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          '700': '#1b3926',
          '800': '#162e1f',
          '950': '#0a1a0f',
        },
        'mint': {
          '50':  '#edfdf4',
          '400': '#3de3a3',
          '500': '#16d48e',
          '600': '#10b577',
          '700': '#0d8f5e',
        },
        'cream': {
          '50':  '#fefdf6',
          '100': '#fbf8ea',
        },
        'tint': {
          'light': '#f0f9f4',
        },
        'neutral': {
          '200': '#e5e3dc',
          '300': '#d4d1c8',
          '500': '#959083',
          '600': '#7a7568',
          '700': '#625e55',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 1px 2px rgba(26, 46, 34, 0.06)',
        'warm': '0 1px 3px rgba(26, 46, 34, 0.1), 0 1px 2px rgba(26, 46, 34, 0.06)',
        'warm-md': '0 4px 6px rgba(26, 46, 34, 0.07), 0 2px 4px rgba(26, 46, 34, 0.06)',
        'warm-lg': '0 10px 15px rgba(26, 46, 34, 0.08), 0 4px 6px rgba(26, 46, 34, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
