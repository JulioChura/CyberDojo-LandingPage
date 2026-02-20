<template>
  <footer class="border-t border-white/10 bg-[#080912] py-8 sm:py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
        <!-- Logo -->
        <a href="#" class="flex items-center">
          <LogoAnimated size="small" />
        </a>

        <!-- Links -->
        <div class="flex gap-6 sm:gap-8 text-sm text-slate-400">
          <a 
            v-for="link in footerLinks" 
            :key="link.text"
            :href="link.href"
            class="hover:text-white transition-colors"
          >
            {{ link.text }}
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-sm text-slate-500">
          © {{ currentYear }} CyberDojo Inc. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FooterLink {
  text: string
  href: string
}

const footerLinks: FooterLink[] = [
  { text: 'Privacidad', href: '#' },
  { text: 'Términos', href: '#' },
  { text: 'Precios', href: '#' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>
