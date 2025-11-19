<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../common/Card.vue'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Encourager la créativité et l\'innovation technologique en Guinée'
  },
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Former des développeurs de classe mondiale avec les meilleures pratiques'
  },
  {
    icon: '🤝',
    title: 'Communauté',
    description: 'Construire un écosystème tech collaboratif et inclusif'
  },
  {
    icon: '🚀',
    title: 'Impact',
    description: 'Transformer des vies et accélérer la transformation digitale'
  }
]

onMounted(() => {
  gsap.from('.about-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%'
    }
  })

  gsap.from('.about-card', {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.about-cards',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="about" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="about-title text-4xl md:text-5xl font-bold mb-6">
          À Propos d'<span class="text-gradient">Unipod</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto">
          Unipod Guinée est une organisation dédiée à la formation de la prochaine génération
          de développeurs et d'innovateurs technologiques en Guinée. Notre mission est de
          démocratiser l'accès à l'éducation tech de qualité.
        </p>
      </div>

      <div class="about-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <Card
          v-for="(feature, index) in features"
          :key="index"
          class="about-card text-center"
        >
          <div class="text-5xl mb-4">{{ feature.icon }}</div>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-text-secondary">{{ feature.description }}</p>
        </Card>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-3xl font-bold mb-6">Notre Vision</h3>
          <p class="text-text-secondary mb-4">
            Nous croyons que la technologie est le catalyseur du développement économique
            et social. Notre vision est de faire de la Guinée un hub technologique en Afrique
            de l'Ouest.
          </p>
          <p class="text-text-secondary mb-4">
            À travers nos programmes intensifs de formation, nous équipons les jeunes
            talents guinéens avec les compétences techniques et professionnelles nécessaires
            pour exceller dans l'industrie tech mondiale.
          </p>
          <div class="flex space-x-8 mt-8">
            <div>
              <div class="text-3xl font-bold text-primary">2020</div>
              <div class="text-text-secondary">Année de création</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-secondary">5+</div>
              <div class="text-text-secondary">Programmes lancés</div>
            </div>
          </div>
        </div>

        <Card variant="gradient" :hover="false" class="p-8">
          <h3 class="text-2xl font-bold mb-6">Nos Valeurs</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <span class="text-accent mr-3">✓</span>
              <span class="text-text-secondary">Excellence et qualité dans tout ce que nous faisons</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3">✓</span>
              <span class="text-text-secondary">Accessibilité et inclusion pour tous</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3">✓</span>
              <span class="text-text-secondary">Innovation et adaptation constante</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3">✓</span>
              <span class="text-text-secondary">Collaboration et partage de connaissances</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3">✓</span>
              <span class="text-text-secondary">Impact social et transformation digitale</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
</template>
