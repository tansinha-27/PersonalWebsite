// 

import type { Config } from "tailwindcss";

const config: Config = {
	
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	  
  theme: {
    extend: {
		colors: {
			border: 'oklch(var(--border))',
			input: 'oklch(var(--input))',
			ring: 'oklch(var(--ring))',
			background: 'oklch(var(--background))',
			foreground: 'oklch(var(--foreground))',
			primary: {
				DEFAULT: 'oklch(var(--primary))',
				foreground: 'oklch(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'oklch(var(--secondary))',
				foreground: 'oklch(var(--secondary-foreground))'
			},
			destructive: {
				DEFAULT: 'oklch(var(--destructive))',
				foreground: 'oklch(var(--destructive-foreground))'
			},
			muted: {
				DEFAULT: 'oklch(var(--muted))',
				foreground: 'oklch(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'oklch(var(--accent))',
				foreground: 'oklch(var(--accent-foreground))'
			},
			popover: {
				DEFAULT: 'oklch(var(--popover))',
				foreground: 'oklch(var(--popover-foreground))'
			},
			card: {
				DEFAULT: 'oklch(var(--card))',
				foreground: 'oklch(var(--card-foreground))'
			},
			sidebar: {
				DEFAULT: 'oklch(var(--sidebar))',
				foreground: 'oklch(var(--sidebar-foreground))',
				primary: 'oklch(var(--sidebar-primary))',
				'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
				accent: 'oklch(var(--sidebar-accent))',
				'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
				border: 'oklch(var(--sidebar-border))',
				ring: 'oklch(var(--sidebar-ring))'
			},
			dashboard: {
				accent: 'oklch(var(--dashboard-accent))',
				surface: 'oklch(var(--dashboard-surface))',
				border: 'oklch(var(--dashboard-border))'
			},
			success: 'oklch(var(--success))',
			warning: 'oklch(var(--warning))',
			chart: {
				primary: 'oklch(var(--chart-primary))',
				secondary: 'oklch(var(--chart-secondary))',
				tertiary: 'oklch(var(--chart-tertiary))'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		}
	},
	
  },

  plugins: [require("tailwindcss-animate")],
  safelist: ["text-muted-foreground"],

};

export default config as any;