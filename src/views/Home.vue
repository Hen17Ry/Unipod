<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useCounter } from '../composables/useGsapAnimation'
import ParticleBackground from '../components/three/ParticleBackground.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Bootcamp from '../components/sections/Bootcamp.vue'
import Blog from '../components/sections/Blog.vue'
import Projects from '../components/sections/Projects.vue'
import Team from '../components/sections/Team.vue'
import Contact from '../components/sections/Contact.vue'

const { animateCounter } = useCounter()

onMounted(() => {
  setTimeout(() => {
    const counters = document.querySelectorAll('.counter')
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      animateCounter(counter as HTMLElement, target)
    })
  }, 1000)
})
</script>

<template>
  <div class="relative">
    <ParticleBackground />
    <Hero />
    <About />
    <Bootcamp />
    <Projects />
    <Blog />
    <Team />
    <Contact />
  </div>
</template>
