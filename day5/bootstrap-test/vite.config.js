import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import visualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  rollupInputOptions: {
    plugins: [
      // 기존 플러그인들      
      visualizer({
        open: true,
        sourcemap: true,
        template: 'treemap' // 시각화 템플릿을 treemap으로 설정하거나 다른 원하는 템플릿을 선택할 수 있습니다.
      }),
    ],
  },


})
