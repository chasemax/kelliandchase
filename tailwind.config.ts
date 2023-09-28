import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    extend: {
    },
    colors: {
      'dark-indigo': '#323a54',
      'hot-pink': '#e45485',
      'light-pink': '#eb8db3',
      'purple-cream': '#eedfea',
      'blackslate': '#2a3147'
    },
    fontFamily: {
      "serif": ["argesta", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
