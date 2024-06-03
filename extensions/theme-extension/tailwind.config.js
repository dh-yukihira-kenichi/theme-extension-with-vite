/** @type {import('tailwindcss').Config} */
export default {
  content: ["./frontend/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Shopifyとの競合を避けるため、プレフィクスを追加
  prefix: "tw-",
};
