/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0B",
        carbon: "#151517",
        carbonline: "#232326",
        brabus: "#C8102E",
        brabusdeep: "#8C0B1F",
        stone: "#F3EFE9",
        stonesurface: "#EAE4DA",
        ash: "#8A8A8E",
        graphite: "#5A5854",
        ivory: "#F8F6F2",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        label: ["'Oswald'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "carbon-weave":
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px)",
      },
    },
  },
  plugins: [],
};
