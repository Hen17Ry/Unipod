<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../common/Card.vue'

gsap.registerPlugin(ScrollTrigger)

const selectedTech = ref('all')

const technologies = ['all', 'Vue.js', 'React', 'Node.js', 'Full Stack']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plateforme de commerce électronique complète avec paiement mobile',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualisation de données',
    tech: ['React', 'D3.js', 'TailwindCSS'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'React'
  },
  {
    id: 3,
    title: 'API RESTful Service',
    description: 'Service backend robuste avec authentification JWT',
    tech: ['Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Node.js'
  },
  {
    id: 4,
    title: 'Social Media App',
    description: 'Application sociale avec messagerie en temps réel',
    tech: ['Vue.js', 'Socket.io', 'Redis'],
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Vue.js'
  },
  {
    id: 5,
    title: 'Learning Management System',
    description: 'Plateforme d\'apprentissage en ligne complète',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack'
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    description: 'Application bancaire mobile sécurisée',
    tech: ['Vue.js', 'Node.js', 'MySQL'],
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack'
  }
]

const filteredProjects = computed(() => {
  if (selectedTech.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === selectedTech.value)
})

onMounted(() => {
  gsap.from('.project-card', {
    opacity: 0,
    scale: 0.8,
    stagger: 0.15,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="projects" class="py-24 bg-surface/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Projets <span class="text-gradient">Réalisés</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          Découvrez les projets impressionnants créés par nos étudiants
        </p>

        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="tech in technologies"
            :key="tech"
            @click="selectedTech = tech"
            :class="[
              'px-6 py-2 rounded-full transition-all duration-300',
              selectedTech === tech
                ? 'bg-secondary text-white shadow-glow-secondary'
                : 'bg-background text-text-secondary hover:bg-background/80'
            ]"
          >
            {{ tech === 'all' ? 'Tous' : tech }}
          </button>
        </div>
      </div>

      <div class="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card overflow-hidden p-0 group"
        >
          <div class="relative h-56 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <button class="px-6 py-2 bg-primary rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Voir le projet
              </button>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-text-secondary mb-4 text-sm">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-background text-accent text-xs rounded-full border border-accent/30"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
