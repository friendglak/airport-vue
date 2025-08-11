// Application configuration
export const APP_CONFIG = {
  name: "SkyConnect Explorer",
  version: "1.0.0",
  description: "Explora aeropuertos del mundo con información detallada",
  author: "SkyConnect Team",
  contact: "info@skyconnect.com",
};

// API configuration
export const API_CONFIG = {
  baseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  timeout: 10000,
  retries: 3,
};

// Pagination configuration
export const PAGINATION_CONFIG = {
  defaultPageSize: 100,
  maxPageSize: 1000,
  pageSizeOptions: [25, 50, 100, 200, 500],
};

// Search configuration
export const SEARCH_CONFIG = {
  minQueryLength: 2,
  debounceDelay: 300,
  maxHistoryItems: 10,
};

// Map configuration
export const MAP_CONFIG = {
  defaultZoom: 12,
  minZoom: 3,
  maxZoom: 18,
  defaultCenter: [40.7128, -74.006], // New York
  tileLayer: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

// Theme configuration
export const THEME_CONFIG = {
  light: {
    primary: "#006AFF",
    secondary: "#00F9FF",
    background: "#FFFFFF",
    surface: "#F5F9FF",
    text: "#171717",
  },
  dark: {
    primary: "#006AFF",
    secondary: "#00F9FF",
    background: "#0a0a0a",
    surface: "#1E2B4D",
    text: "#ededed",
  },
};

// Font configuration
export const FONT_CONFIG = {
  primary: "Gotham Black",
  fallback: ["Arial", "Helvetica", "sans-serif"],
};

// Breakpoint configuration
export const BREAKPOINT_CONFIG = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Animation configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
