<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Card from '../components/common/Card.vue'
import Button from '../components/common/Button.vue'

const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })

const formData = ref({
  name: '',
  email: '',
  phone: '',
  education: '',
  experience: '',
  motivation: '',
  availability: 'full-time'
})

const faq = [
  {
    question: 'Quels sont les prérequis pour rejoindre le bootcamp ?',
    answer: 'Aucune expérience en programmation n\'est requise. Nous recherchons des personnes motivées, curieuses et prêtes à s\'engager pleinement dans le programme.'
  },
  {
    question: 'Quel est le coût du bootcamp ?',
    answer: 'Le bootcamp est accessible à tous. Nous proposons des plans de paiement flexibles et des bourses pour les candidats méritants.'
  },
  {
    question: 'Quelle est la durée du programme ?',
    answer: 'Le bootcamp dure 20 semaines (5 mois) en mode intensif, avec des cours du lundi au vendredi.'
  },
  {
    question: 'Y a-t-il une garantie d\'emploi après la formation ?',
    answer: 'Nous offrons un accompagnement carrière complet et avons un réseau de partenaires qui recrutent nos diplômés. Le taux de placement est de 85%.'
  }
]

const submitApplication = () => {
  console.log('Application submitted:', formData.value)
}

onMounted(() => {
  const targetDate = new Date('2024-12-01').getTime()

  const updateCountdown = () => {
    const now = new Date().getTime()
    const distance = targetDate - now

    countdown.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    }
  }

  updateCountdown()
  setInterval(updateCountdown, 1000)

  gsap.from('.stat-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    delay: 0.5
  })
})
</script>

<template>
  <div class="min-h-screen pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Bootcamp <span class="text-gradient">2024</span>
        </h1>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-12">
          Transformez votre passion pour la tech en carrière professionnelle en 20 semaines
        </p>

        <Card variant="gradient" :hover="false" class="max-w-4xl mx-auto mb-12">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-6">Prochaine session commence dans</h3>
            <div class="grid grid-cols-4 gap-4">
              <div class="stat-card">
                <div class="text-4xl md:text-5xl font-bold text-primary">{{ countdown.days }}</div>
                <div class="text-text-secondary mt-2">Jours</div>
              </div>
              <div class="stat-card">
                <div class="text-4xl md:text-5xl font-bold text-secondary">{{ countdown.hours }}</div>
                <div class="text-text-secondary mt-2">Heures</div>
              </div>
              <div class="stat-card">
                <div class="text-4xl md:text-5xl font-bold text-accent">{{ countdown.minutes }}</div>
                <div class="text-text-secondary mt-2">Minutes</div>
              </div>
              <div class="stat-card">
                <div class="text-4xl md:text-5xl font-bold text-primary">{{ countdown.seconds }}</div>
                <div class="text-text-secondary mt-2">Secondes</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 class="text-3xl font-bold mb-6">Programme détaillé</h2>

          <div class="space-y-6">
            <Card>
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-2xl">1</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Fondamentaux Web (4 semaines)</h3>
                  <p class="text-text-secondary text-sm mb-2">
                    HTML5, CSS3, JavaScript ES6+, Git & GitHub, Responsive Design
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-primary/30 text-primary">HTML/CSS</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-primary/30 text-primary">JavaScript</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-primary/30 text-primary">Git</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-2xl">2</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Frontend Moderne (6 semaines)</h3>
                  <p class="text-text-secondary text-sm mb-2">
                    Vue.js 3, React, State Management, Tailwind CSS, API Integration
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-secondary/30 text-secondary">Vue.js</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-secondary/30 text-secondary">React</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-secondary/30 text-secondary">Tailwind</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-2xl">3</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Backend & Databases (6 semaines)</h3>
                  <p class="text-text-secondary text-sm mb-2">
                    Node.js, Express, REST APIs, PostgreSQL, Authentication, Security
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-accent/30 text-accent">Node.js</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-accent/30 text-accent">PostgreSQL</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-accent/30 text-accent">APIs</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div class="flex items-start">
                <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-2xl">4</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-semibold mb-2">Projet Final (4 semaines)</h3>
                  <p class="text-text-secondary text-sm mb-2">
                    Développement Full Stack, Déploiement, Testing, Présentation
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-primary/30 text-primary">Full Stack</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-primary/30 text-primary">Déploiement</span>
                    <span class="text-xs px-2 py-1 bg-background rounded-full border border-primary/30 text-primary">Portfolio</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <Card variant="gradient" :hover="false">
            <h2 class="text-3xl font-bold mb-6">Formulaire de candidature</h2>
            <form @submit.prevent="submitApplication" class="space-y-4">
              <div>
                <label class="block text-sm mb-2">Nom complet *</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label class="block text-sm mb-2">Email *</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label class="block text-sm mb-2">Téléphone *</label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label class="block text-sm mb-2">Niveau d'éducation *</label>
                <select
                  v-model="formData.education"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                  required
                >
                  <option value="">Sélectionner...</option>
                  <option value="lycee">Lycée</option>
                  <option value="licence">Licence</option>
                  <option value="master">Master</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label class="block text-sm mb-2">Expérience en programmation</label>
                <select
                  v-model="formData.experience"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                >
                  <option value="none">Aucune</option>
                  <option value="beginner">Débutant (auto-formation)</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="advanced">Avancé</option>
                </select>
              </div>

              <div>
                <label class="block text-sm mb-2">Disponibilité *</label>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input
                      v-model="formData.availability"
                      type="radio"
                      value="full-time"
                      class="mr-2"
                    />
                    <span>Temps plein (recommandé)</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availability"
                      type="radio"
                      value="part-time"
                      class="mr-2"
                    />
                    <span>Temps partiel</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm mb-2">Pourquoi voulez-vous rejoindre ce bootcamp ? *</label>
                <textarea
                  v-model="formData.motivation"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                  required
                />
              </div>

              <Button variant="primary" size="lg" class="w-full">
                Soumettre ma candidature
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">Questions Fréquentes</h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <Card v-for="(item, index) in faq" :key="index">
            <h3 class="text-lg font-semibold mb-2 text-primary">{{ item.question }}</h3>
            <p class="text-text-secondary">{{ item.answer }}</p>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
