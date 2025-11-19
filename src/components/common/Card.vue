<script setup lang="ts">
interface Props {
  variant?: 'glass' | 'gradient' | 'solid'
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'glass',
  hover: true
})
</script>

<template>
  <div
    :class="[
      'card',
      `card-${variant}`,
      { 'card-hover': hover }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-glass {
  background: rgba(21, 25, 51, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-gradient {
  background: linear-gradient(135deg, rgba(0, 102, 255, 0.1), rgba(123, 47, 255, 0.1));
  border: 1px solid rgba(0, 102, 255, 0.3);
}

.card-solid {
  background: #151933;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 102, 255, 0.3);
  border-color: rgba(0, 255, 240, 0.5);
}

.card-hover:hover.card-glass {
  background: rgba(21, 25, 51, 0.9);
}
</style>
