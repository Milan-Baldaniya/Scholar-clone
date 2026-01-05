import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",

                // Primary Brand Colors
                'primary-background': 'var(--primary-background)',
                'primary-foreground': 'var(--primary-foreground)',
                'primary-light': 'var(--primary-light)',
                'primary-dark': 'var(--primary-dark)',

                // Secondary Colors
                'secondary-background': 'var(--secondary-background)',
                'secondary-foreground': 'var(--secondary-foreground)',
                'secondary-light': 'var(--secondary-light)',
                'secondary-dark': 'var(--secondary-dark)',

                // Success/Green Colors
                'success-background': 'var(--success-background)',
                'success-foreground': 'var(--success-foreground)',
                'success-light': 'var(--success-light)',
                'success-medium': 'var(--success-medium)',
                'success-muted': 'var(--success-muted)',

                // Accent Colors
                'accent-purple': 'var(--accent-purple)',
                'accent-gold': 'var(--accent-gold)',
                'accent-dark': 'var(--accent-dark)',
                'accent-teal': 'var(--accent-teal)',

                // Neutral Colors
                'neutral-background': 'var(--neutral-background)',
                'neutral-foreground': 'var(--neutral-foreground)',
                'neutral-light': 'var(--neutral-light)',
                'neutral-medium': 'var(--neutral-medium)',
                'neutral-dark': 'var(--neutral-dark)',
                'neutral-overlay': 'var(--neutral-overlay)',
                'neutral-muted': 'var(--neutral-muted)',

                // Border Colors
                'border-primary': 'var(--border-primary)',
                'border-secondary': 'var(--border-secondary)',

                // Component-specific Colors
                'header-background': 'var(--header-background)',
                'header-text': 'var(--header-text)',

                'button-primary-background': 'var(--button-primary-background)',
                'button-primary-text': 'var(--button-primary-text)',
                'button-success-background': 'var(--button-success-background)',
                'button-success-text': 'var(--button-success-text)',
                'button-light-background': 'var(--button-light-background)',
                'button-light-text': 'var(--button-light-text)',

                'chip-background': 'var(--chip-background)',
                'chip-text': 'var(--chip-text)',
                'chip-border': 'var(--chip-border)',

                'footer-background': 'var(--footer-background)',
                'footer-text': 'var(--footer-text)',

                'link-primary': 'var(--link-primary)',
                'link-secondary': 'var(--link-secondary)',

                'input-background': 'var(--input-background)',

                // Legacy colors (keep for compatibility)
                primary: {
                    DEFAULT: "#0066CC",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "#76B900",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                footer: {
                    DEFAULT: "#1E293B",
                    foreground: "#ffffffff",
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                xs: '3px',
                '2xl': '20px',
                '3xl': '24px',
                '4xl': '30px',
                '5xl': '32px',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
export default config;
