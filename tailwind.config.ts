import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			'bay-of-many': {
        '50': '#f1f5fd',
        '100': '#dfe8fa',
        '200': '#c6d7f7',
        '300': '#a0bef0',
        '400': '#729ce8',
        '500': '#5179e0',
        '600': '#3c5dd4',
        '700': '#334bc2',
        '800': '#2b3990',
        '900': '#2b387d',
        '950': '#1e244d',
    },
  		},
  		animation: {
  			gradient: 'gradient 8s linear infinite'
  		},
  		keyframes: {
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			}
  		}
		
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-motion')], 
} satisfies Config;
