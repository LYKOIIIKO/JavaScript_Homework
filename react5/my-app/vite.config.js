import { defineConfig } from 'vite'
import {react, svgr} from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
