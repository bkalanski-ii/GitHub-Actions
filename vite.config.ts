import { defineConfig, type UserConfig  } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    reporters: ['default', 'json-summary'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
    coverage: {
      thresholds: {
        lines: 75,
        branches: 75,
        functions: 60,
        statements: 60
      }
    }
  },
  base: '/'
} as UserConfig)
