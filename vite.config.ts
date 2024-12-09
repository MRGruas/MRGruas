import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'
import { componentTagger } from 'lovable-tagger'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    outDir: 'docs',
    assetsInlineLimit: 0, // Ensures files aren't incorrectly inlined
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
      },
    },
    sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
    },
  },
  optimizeDeps: {
    exclude: ['lmdb'], // Exclude lmdb from optimization to prevent build issues
  },
})
