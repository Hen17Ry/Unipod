<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Button from './Button.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const router = useRouter()

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Bootcamp', path: '/bootcamp' },
  { name: 'Blog', path: '/blog' },
  { name: 'À Propos', path: '/#about' },
  { name: 'Projets', path: '/#projects' },
  { name: 'Contact', path: '/#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const scrollToSection = (path: string) => {
  if (path.includes('#')) {
    const [route, hash] = path.split('#')
    if (route === '' || route === '/') {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(path)
    }
  } else {
    router.push(path)
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <router-link to="/" class="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo Unipod Guinée"
            class="h-10 w-auto object-contain"
          />
          <span class="sr-only">Unipod Guinée</span>
        </router-link>

        <div class="hidden md:flex items-center space-x-8">
          <button
            v-for="link in navLinks"
            :key="link.path"
            @click="scrollToSection(link.path)"
            class="text-text-secondary hover:text-primary transition-colors duration-300 font-medium"
          >
            {{ link.name }}
          </button>

          <Button variant="primary" size="sm" to="/bootcamp">
            Candidater
          </Button>
        </div>

        <button
          class="md:hidden text-white"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-surface/95 backdrop-blur-lg border-t border-white/10"
    >
      <div class="px-4 py-6 space-y-4">
        <button
          v-for="link in navLinks"
          :key="link.path"
          @click="scrollToSection(link.path)"
          class="block w-full text-left text-text-secondary hover:text-primary transition-colors duration-300 py-2"
        >
          {{ link.name }}
        </button>

        <Button variant="primary" size="sm" to="/bootcamp" class="w-full">
          Candidater
        </Button>
      </div>
    </div>
  </nav>
</template>
