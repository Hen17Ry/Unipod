<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../common/Card.vue'

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: 'Dr. Amadou Barry',
    role: 'Directeur & Fondateur',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert en transformation digitale avec 15+ ans d\'expérience',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Fatoumata Camara',
    role: 'Lead Instructor Frontend',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Passionnée par Vue.js et React, mentor de 100+ étudiants',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Ousmane Diallo',
    role: 'Lead Instructor Backend',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Architecte backend spécialisé en Node.js et microservices',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Mariama Sow',
    role: 'Career Coach',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Aide les étudiants à décrocher leur premier emploi tech',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Ibrahima Bah',
    role: 'UI/UX Designer',
    image: 'https://images.pexels.com/photos/3779511/pexels-photo-3779511.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Designer créatif avec une passion pour l\'expérience utilisateur',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Aissatou Diallo',
    role: 'Community Manager',
    image: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Anime la communauté et organise les événements tech',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
]

onMounted(() => {
  gsap.from('.team-card', {
    opacity: 0,
    y: 80,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.team-grid',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="team" class="py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Notre <span class="text-gradient">Équipe</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto">
          Des experts passionnés dédiés à votre réussite
        </p>
      </div>

      <div class="team-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="member in team"
          :key="member.name"
          class="team-card text-center group"
        >
          <div class="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <h3 class="text-xl font-semibold mb-1">{{ member.name }}</h3>
          <div class="text-accent text-sm font-medium mb-3">{{ member.role }}</div>
          <p class="text-text-secondary text-sm mb-4">{{ member.bio }}</p>

          <div class="flex justify-center space-x-3">
            <a
              :href="member.social.linkedin"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              :href="member.social.twitter"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-accent transition-all duration-300 transform hover:scale-110"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>
