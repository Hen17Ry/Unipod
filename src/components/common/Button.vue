<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md'
})
</script>

<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :class="[
      'btn',
      `btn-${variant}`,
      `btn-${size}`,
      'relative overflow-hidden group'
    ]"
  >
    <span class="relative z-10">
      <slot />
    </span>
    <span class="btn-glow"></span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-decoration: none;
  border: none;
  position: relative;
}

.btn-sm {
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
}

.btn-md {
  padding: 0.75rem 2rem;
  font-size: 1rem;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.btn-primary {
  background: linear-gradient(135deg, #0066FF, #7B2FFF);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #7B2FFF, #00FFF0);
  color: white;
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(123, 47, 255, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid #0066FF;
  color: #0066FF;
}

.btn-outline:hover {
  background: rgba(0, 102, 255, 0.1);
  transform: translateY(-2px);
}

.btn-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover .btn-glow {
  width: 300px;
  height: 300px;
}
</style>
