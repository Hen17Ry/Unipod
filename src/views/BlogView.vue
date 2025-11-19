<script setup lang="ts">
import { ref } from 'vue'
import Card from '../components/common/Card.vue'
import Button from '../components/common/Button.vue'

const selectedCategory = ref('all')
const searchQuery = ref('')

const categories = ['all', 'Tech & Innovation', 'Success Stories', 'Bootcamp', 'Industrie', 'Tutoriels']

const allPosts = [
  {
    id: 1,
    title: 'L\'avenir de la Tech en Guinée',
    category: 'Tech & Innovation',
    excerpt: 'Découvrez comment la technologie transforme le paysage économique guinéen et ouvre de nouvelles opportunités pour la jeunesse...',
    content: 'Article complet ici...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '15 Nov 2024',
    readTime: '5 min',
    author: 'Amadou Barry'
  },
  {
    id: 2,
    title: 'De débutant à développeur professionnel',
    category: 'Success Stories',
    excerpt: 'L\'histoire inspirante de Mamadou qui a décroché son premier emploi tech après le bootcamp Unipod...',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '12 Nov 2024',
    readTime: '7 min',
    author: 'Fatoumata Camara'
  },
  {
    id: 3,
    title: 'Les tendances JavaScript en 2024',
    category: 'Tech & Innovation',
    excerpt: 'Explorez les frameworks et outils JavaScript qui dominent l\'industrie cette année...',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '10 Nov 2024',
    readTime: '6 min',
    author: 'Ousmane Diallo'
  },
  {
    id: 4,
    title: 'Retour sur le Bootcamp Session 3',
    category: 'Bootcamp',
    excerpt: 'Découvrez les moments forts et les projets réalisés lors de notre dernière session de formation...',
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '8 Nov 2024',
    readTime: '4 min',
    author: 'Aissatou Diallo'
  },
  {
    id: 5,
    title: 'Pourquoi apprendre Vue.js en 2024',
    category: 'Tutoriels',
    excerpt: 'Les avantages de Vue.js et pourquoi il reste un choix populaire pour les développeurs...',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '5 Nov 2024',
    readTime: '5 min',
    author: 'Fatoumata Camara'
  },
  {
    id: 6,
    title: 'L\'écosystème startup en Guinée',
    category: 'Industrie',
    excerpt: 'Un état des lieux de l\'écosystème entrepreneurial tech guinéen en 2024...',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '3 Nov 2024',
    readTime: '8 min',
    author: 'Amadou Barry'
  },
  {
    id: 7,
    title: 'Guide complet: Débuter avec React',
    category: 'Tutoriels',
    excerpt: 'Un guide pas à pas pour créer votre première application React moderne...',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '1 Nov 2024',
    readTime: '10 min',
    author: 'Ousmane Diallo'
  },
  {
    id: 8,
    title: 'Interview: Une développeuse guinéenne chez Google',
    category: 'Success Stories',
    excerpt: 'Rencontre avec Mariama, ancienne étudiante Unipod maintenant ingénieure chez Google...',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '28 Oct 2024',
    readTime: '6 min',
    author: 'Aissatou Diallo'
  }
]

const filteredPosts = ref(allPosts)

const filterPosts = () => {
  let posts = allPosts

  if (selectedCategory.value !== 'all') {
    posts = posts.filter(post => post.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    posts = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  filteredPosts.value = posts
}
</script>

<template>
  <div class="min-h-screen pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Blog <span class="text-gradient">Unipod</span>
        </h1>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto">
          Articles, tutoriels et actualités tech
        </p>
      </div>

      <div class="mb-8">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <input
            v-model="searchQuery"
            @input="filterPosts"
            type="text"
            placeholder="Rechercher un article..."
            class="w-full md:w-96 px-6 py-3 rounded-full bg-surface border border-white/10 focus:border-primary outline-none transition-colors"
          />

          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category; filterPosts()"
              :class="[
                'px-4 py-2 rounded-full text-sm transition-all duration-300',
                selectedCategory === category
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-surface text-text-secondary hover:bg-surface/80'
              ]"
            >
              {{ category === 'all' ? 'Tous' : category }}
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredPosts.length === 0" class="text-center py-20">
        <p class="text-text-secondary text-lg">Aucun article trouvé</p>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="post in filteredPosts"
          :key="post.id"
          class="overflow-hidden p-0"
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
              <span>{{ post.readTime }}</span>
            </div>

            <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
              {{ post.title }}
            </h3>

            <p class="text-text-secondary mb-4 text-sm">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-white/10">
              <span class="text-sm text-text-secondary">Par {{ post.author }}</span>
              <button class="text-primary hover:text-accent transition-colors font-medium text-sm flex items-center">
                Lire plus
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
