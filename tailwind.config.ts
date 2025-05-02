import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Status colors
        status: {
          completed: "hsl(var(--status-completed))",
          pending: "hsl(var(--status-pending))",
          overdue: "hsl(var(--status-overdue))",
        },
        
        // Neutral colors
        neutral: {
          dark: "hsl(var(--neutral-dark))",
          medium: "hsl(var(--neutral-medium))",
          light: "hsl(var(--neutral-light))",
        },
        
        // Ministry colors
        ministry: {
          louvor: "hsl(var(--ministry-louvor))",
          pregadores: "hsl(var(--ministry-pregadores))",
          midia: "hsl(var(--ministry-midia))",
          kids: "hsl(var(--ministry-kids))",
          obreiros: "hsl(var(--ministry-obreiros))",
          cantina: "hsl(var(--ministry-cantina))",
          ebd: "hsl(var(--ministry-ebd))",
          recepcao: "hsl(var(--ministry-recepcao))",
        },
        
        // Chart colors for data visualization
        chart: {
          "1": "hsl(var(--primary))",
          "2": "hsl(var(--secondary))",
          "3": "hsl(var(--accent))",
          "4": "hsl(var(--status-completed))",
          "5": "hsl(var(--status-pending))",
        },
        
        // Sidebar
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
