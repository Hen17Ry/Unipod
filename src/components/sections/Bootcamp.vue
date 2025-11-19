<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../common/Card.vue'
import Button from '../common/Button.vue'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  { phase: 'Phase 1', title: 'Fondamentaux Web', duration: '4 semaines', topics: ['HTML/CSS', 'JavaScript ES6+', 'Git & GitHub'] },
  { phase: 'Phase 2', title: 'Frontend Moderne', duration: '6 semaines', topics: ['Vue.js 3', 'React', 'Tailwind CSS'] },
  { phase: 'Phase 3', title: 'Backend & Databases', duration: '6 semaines', topics: ['Node.js', 'Express', 'PostgreSQL'] },
  { phase: 'Phase 4', title: 'Projet Final', duration: '4 semaines', topics: ['Full Stack', 'Déploiement', 'Presentation'] }
]

const testimonials = [
  { name: 'Mamadou Diallo', role: 'Développeur Full Stack', text: 'Unipod a transformé ma carrière. J\'ai appris plus en 6 mois qu\'en 2 ans d\'auto-formation.' },
  { name: 'Aissatou Bah', role: 'Frontend Developer', text: 'L\'accompagnement et la qualité de formation sont exceptionnels. Je recommande vivement!' },
  { name: 'Ibrahima Sow', role: 'Backend Developer', text: 'Grâce à Unipod, j\'ai décroché un emploi dans une startup internationale.' }
]

const formData = ref({
  name: '',
  email: '',
  phone: '',
  motivation: ''
})

const submitForm = () => {
  console.log('Form submitted:', formData.value)
}

onMounted(() => {
  gsap.from('.timeline-item', {
    opacity: 0,
    x: -100,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.timeline-container',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="bootcamp" class="py-24 bg-surface/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Bootcamp <span class="text-gradient">2025</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto">
          Un programme intensif de 20 semaines pour devenir développeur Full Stack
        </p>
      </div>

      <div class="timeline-container mb-20">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            v-for="(item, index) in timeline"
            :key="index"
            class="timeline-item"
          >
            <div class="text-accent font-bold mb-2">{{ item.phase }}</div>
            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
            <div class="text-text-secondary mb-4">{{ item.duration }}</div>
            <ul class="space-y-2">
              <li v-for="topic in item.topics" :key="topic" class="flex items-center text-sm">
                <span class="text-primary mr-2">→</span>
                {{ topic }}
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h3 class="text-3xl font-bold mb-6">Ce que vous allez apprendre</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-2xl">💻</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Développement Full Stack</h4>
                <p class="text-text-secondary text-sm">Maîtrisez le frontend et backend pour créer des applications complètes</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-2xl">🛠️</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Outils Professionnels</h4>
                <p class="text-text-secondary text-sm">Git, Docker, CI/CD et autres outils utilisés en entreprise</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-2xl">🚀</span>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Projets Réels</h4>
                <p class="text-text-secondary text-sm">Travaillez sur des projets concrets pour constituer votre portfolio</p>
              </div>
            </div>
          </div>
        </div>

        <Card variant="gradient">
          <h3 class="text-2xl font-bold mb-6">Candidatez maintenant</h3>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Nom complet"
                class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                required
              />
            </div>
            <div>
              <input
                v-model="formData.phone"
                type="tel"
                placeholder="Téléphone"
                class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                v-model="formData.motivation"
                placeholder="Pourquoi voulez-vous rejoindre le bootcamp?"
                rows="4"
                class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                required
              />
            </div>
            <Button variant="primary" size="lg" class="w-full">
              Envoyer ma candidature
            </Button>
          </form>
        </Card>
      </div>

      <div>
        <h3 class="text-3xl font-bold mb-8 text-center">Témoignages</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <Card v-for="(testimonial, index) in testimonials" :key="index">
            <div class="mb-4">
              <div class="text-accent text-3xl">"</div>
              <p class="text-text-secondary italic">{{ testimonial.text }}</p>
            </div>
            <div class="border-t border-white/10 pt-4">
              <div class="font-semibold">{{ testimonial.name }}</div>
              <div class="text-sm text-text-secondary">{{ testimonial.role }}</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
