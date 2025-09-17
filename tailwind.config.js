/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          // shadcn-style tokens (read from CSS variables you set in index.css)
          border: 'hsl(var(--border) / <alpha-value>)',
          input: 'hsl(var(--input) / <alpha-value>)',
          ring: 'hsl(var(--ring) / <alpha-value>)',
          background: 'hsl(var(--background) / <alpha-value>)',
          foreground: 'hsl(var(--foreground) / <alpha-value>)',
          primary: {
            DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
            foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
            foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
            foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
            foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
            foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
            foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
          },
          card: {
            DEFAULT: 'hsl(var(--card) / <alpha-value>)',
            foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
          },
  
          // optional: chart palette if you use bg-chart-1 / text-chart-2 etc.
          'chart-1': 'hsl(var(--chart-1) / <alpha-value>)',
          'chart-2': 'hsl(var(--chart-2) / <alpha-value>)',
          'chart-3': 'hsl(var(--chart-3) / <alpha-value>)',
          'chart-4': 'hsl(var(--chart-4) / <alpha-value>)',
          'chart-5': 'hsl(var(--chart-5) / <alpha-value>)',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        fontFamily: {
          // optional: lets you use font-display / font-sans utilities
          display: ['"Tenor Sans"', 'serif'],
          sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [],
  };
  