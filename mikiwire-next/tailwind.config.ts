import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Digital Forge Palette
                void: "#0a0a0a",
                gunmetal: "#1f2937",
                titanium: "#f3f4f6",
                silver: "#9ca3af",
                molten: "#ff5722", // Accent
            },
            fontFamily: {
                oswald: ["var(--font-oswald)", "sans-serif"],
                space: ["var(--font-space)", "sans-serif"],
            },
            backgroundImage: {
                "forge-gradient": "linear-gradient(to bottom, #0a0a0a, #1a1a1a)",
            },
        },
    },
    plugins: [],
};
export default config;
