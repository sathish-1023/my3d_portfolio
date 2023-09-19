import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/sathish-1023/my3d_portfolio.git",
  plugins: [react()],
})
