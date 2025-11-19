<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Facebook', url: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'Twitter', url: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'LinkedIn', url: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
  { name: 'Instagram', url: '#', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z' }
]

const footerLinks = [
  {
    title: 'Entreprise',
    links: [
      { name: 'À Propos', url: '#about' },
      { name: 'Équipe', url: '#team' },
      { name: 'Carrières', url: '#' },
      { name: 'Contact', url: '#contact' }
    ]
  },
  {
    title: 'Programmes',
    links: [
      { name: 'Bootcamp 2024', url: '/bootcamp' },
      { name: 'Formations', url: '#' },
      { name: 'Mentorat', url: '#' },
      { name: 'Projets', url: '#projects' }
    ]
  },
  {
    title: 'Ressources',
    links: [
      { name: 'Blog', url: '/blog' },
      { name: 'Documentation', url: '#' },
      { name: 'FAQ', url: '#' },
      { name: 'Support', url: '#' }
    ]
  }
]
</script>

<template>
  <footer class="bg-surface border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="text-2xl font-bold text-gradient">Unipod</div>
            <div class="text-sm text-accent">Guinée</div>
          </div>
          <p class="text-text-secondary mb-6 max-w-md">
            Façonner l'avenir technologique de la Guinée en formant la prochaine génération de développeurs et d'innovateurs.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary transition-colors duration-300"
              :aria-label="social.name"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <div v-for="section in footerLinks" :key="section.title">
          <h3 class="text-white font-semibold mb-4">{{ section.title }}</h3>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link.name">
              <a
                :href="link.url"
                class="text-text-secondary hover:text-primary transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-white/5">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-text-secondary text-sm">
            © {{ currentYear }} Unipod Guinée. Tous droits réservés.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-text-secondary hover:text-primary text-sm transition-colors duration-300">
              Politique de confidentialité
            </a>
            <a href="#" class="text-text-secondary hover:text-primary text-sm transition-colors duration-300">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
