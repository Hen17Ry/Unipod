<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useParticleScene } from '../../composables/useThreeScene'

const canvasRef = ref<HTMLCanvasElement>()
const { init, animate, cleanup } = useParticleScene()

onMounted(() => {
  if (canvasRef.value) {
    init(canvasRef.value)
    animate()
  }
})

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
  />
</template>
