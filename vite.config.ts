import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./env", // Environment Variables 設定檔資料夾
  base: "/react-typescript-chatgpt",
});
