<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCustomCursor } from './composables/useCursor'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

useCustomCursor()

onMounted(() => {
  document.title = 'Unipod Guinée - Bootcamp & Formation Tech'
})
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <RouterView v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
