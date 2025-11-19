<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../common/Card.vue'
import Button from '../common/Button.vue'

gsap.registerPlugin(ScrollTrigger)

const selectedCategory = ref('all')

const categories = ['all', 'Tech & Innovation', 'Success Stories', 'Bootcamp', 'Industrie']

const blogPosts = [
  {
    id: 1,
    title: 'L\'avenir de la Tech en Guinée',
    category: 'Tech & Innovation',
    excerpt: 'Découvrez comment la technologie transforme le paysage économique guinéen...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '15 Nov 2024',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'De débutant à développeur professionnel',
    category: 'Success Stories',
    excerpt: 'L\'histoire inspirante de Mamadou qui a décroché son premier emploi tech...',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '12 Nov 2024',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Les tendances JavaScript en 2024',
    category: 'Tech & Innovation',
    excerpt: 'Explorez les frameworks et outils JavaScript qui dominent l\'industrie...',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '10 Nov 2024',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Retour sur le Bootcamp Session 3',
    category: 'Bootcamp',
    excerpt: 'Découvrez les moments forts et les projets réalisés lors de notre dernière session...',
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '8 Nov 2024',
    readTime: '4 min'
  },
  {
    id: 5,
    title: 'Pourquoi apprendre Vue.js en 2024',
    category: 'Tech & Innovation',
    excerpt: 'Les avantages de Vue.js et pourquoi il reste un choix populaire...',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '5 Nov 2024',
    readTime: '5 min'
  },
  {
    id: 6,
    title: 'L\'écosystème startup en Guinée',
    category: 'Industrie',
    excerpt: 'Un état des lieux de l\'écosystème entrepreneurial tech guinéen...',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '3 Nov 2024',
    readTime: '8 min'
  }
]

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') {
    return blogPosts
  }
  return blogPosts.filter(post => post.category === selectedCategory.value)
})

onMounted(() => {
  gsap.from('.blog-card', {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.blog-grid',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="blog" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Notre <span class="text-gradient">Blog</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
          Actualités, tutoriels et insights sur la tech en Guinée
        </p>

        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full transition-all duration-300',
              selectedCategory === category
                ? 'bg-primary text-white shadow-glow'
                : 'bg-surface text-text-secondary hover:bg-surface/80'
            ]"
          >
            {{ category === 'all' ? 'Tous' : category }}
          </button>
        </div>
      </div>

      <div class="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="post in filteredPosts"
          :key="post.id"
          class="blog-card overflow-hidden p-0"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                {{ post.category }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center text-sm text-text-secondary mb-3">
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.readTime }} lecture</span>
            </div>

            <h3 class="text-xl font-semibold mb-3 hover:text-primary transition-colors">
              {{ post.title }}
            </h3>

            <p class="text-text-secondary mb-4">
              {{ post.excerpt }}
            </p>

            <button class="text-primary hover:text-accent transition-colors font-medium flex items-center">
              Lire la suite
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Card>
      </div>

      <div class="text-center mt-12">
        <Button variant="outline" size="lg" to="/blog">
          Voir tous les articles
        </Button>
      </div>
    </div>
  </section>
</template>
