<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../common/Card.vue'
import Button from '../common/Button.vue'

gsap.registerPlugin(ScrollTrigger)

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'contact@unipod.gn',
    link: 'mailto:contact@unipod.gn'
  },
  {
    icon: '📱',
    title: 'Téléphone',
    value: '+224 XX XX XX XX',
    link: 'tel:+224XXXXXXXX'
  },
  {
    icon: '📍',
    title: 'Adresse',
    value: 'Conakry, Guinée',
    link: '#'
  }
]

const submitForm = () => {
  console.log('Contact form submitted:', formData.value)
}

onMounted(() => {
  gsap.from('.contact-card', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="contact" class="py-24 bg-surface/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Contactez-<span class="text-gradient">nous</span>
        </h2>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto">
          Une question ? Envie de rejoindre l'aventure ? N'hésitez pas à nous contacter
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <Card variant="gradient" :hover="false">
            <h3 class="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid md:grid-cols-2 gap-4">
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
              </div>
              <div>
                <input
                  v-model="formData.subject"
                  type="text"
                  placeholder="Sujet"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  v-model="formData.message"
                  placeholder="Votre message"
                  rows="6"
                  class="w-full px-4 py-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                  required
                />
              </div>
              <Button variant="primary" size="lg" class="w-full">
                Envoyer le message
              </Button>
            </form>
          </Card>
        </div>

        <div>
          <div class="contact-info space-y-6 mb-8">
            <Card
              v-for="info in contactInfo"
              :key="info.title"
              class="contact-card flex items-center"
            >
              <div class="text-4xl mr-4">{{ info.icon }}</div>
              <div>
                <div class="text-sm text-text-secondary mb-1">{{ info.title }}</div>
                <a
                  :href="info.link"
                  class="text-lg font-semibold hover:text-primary transition-colors"
                >
                  {{ info.value }}
                </a>
              </div>
            </Card>
          </div>

          <Card variant="glass" :hover="false">
            <h3 class="text-xl font-bold mb-4">Horaires d'ouverture</h3>
            <div class="space-y-2 text-text-secondary">
              <div class="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span class="font-semibold text-white">9h - 18h</span>
              </div>
              <div class="flex justify-between">
                <span>Samedi</span>
                <span class="font-semibold text-white">10h - 16h</span>
              </div>
              <div class="flex justify-between">
                <span>Dimanche</span>
                <span class="font-semibold text-accent">Fermé</span>
              </div>
            </div>
          </Card>

          <div class="mt-8">
            <h3 class="text-xl font-bold mb-4">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-primary transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-accent transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-secondary transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a
                href="#"
                class="w-12 h-12 flex items-center justify-center rounded-full bg-surface hover:bg-primary transition-all duration-300 transform hover:scale-110"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
