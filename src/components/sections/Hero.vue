<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import Button from '../common/Button.vue'
import HeroScene from '../three/HeroScene.vue'

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.hero-title .char', {
    opacity: 0,
    y: 100,
    rotateX: -90,
    stagger: 0.02,
    duration: 0.8,
    delay: 0.5
  })
  .from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1
  }, '-=0.3')
  .from('.hero-cta', {
    opacity: 0,
    y: 30,
    duration: 0.8
  }, '-=0.5')

  const title = document.querySelector('.hero-title')
  if (title) {
    const text = title.textContent || ''
    title.innerHTML = text
      .split('')
      .map(char => `<span class="char inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')
  }
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <HeroScene />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
        Unipod Guinée
      </h1>

      <p class="hero-subtitle text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
        Façonner l'avenir technologique de la Guinée
      </p>

      <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant="primary" size="lg" to="/bootcamp">
          Découvrir le Bootcamp 2024
        </Button>
        <Button variant="outline" size="lg" href="#about">
          En savoir plus
        </Button>
      </div>

      <div class="mt-16 flex justify-center space-x-12">
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-gradient counter" data-target="100">0</div>
          <div class="text-text-secondary mt-2">Étudiants formés</div>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-5xl font-bold text-gradient counter" data-target="50">0</div>
          <div class="text-text-secondary mt-2">Projets réalisés</div>
        </div>
        <div class="text-center hidden sm:block">
          <div class="text-4xl md:text-5xl font-bold text-gradient counter" data-target="95">0</div>
          <div class="text-text-secondary mt-2">% Satisfaction</div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.char {
  display: inline-block;
  transform-origin: 0% 50% -50px;
}
</style>
