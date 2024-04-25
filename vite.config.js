import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    port: 4173
  },
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      // Descomenta y ajusta según sea necesario
      "CO2": "@tgwf/co2",
    },
  }
})
