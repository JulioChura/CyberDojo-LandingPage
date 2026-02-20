<template>
  <nav class="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0c1a]/80 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <LogoAnimated size="small" />
      </a>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA Button (Desktop) -->
      <button 
        class="hidden md:flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-neon hover:bg-primary-hover transition-all"
        @click="handleDemoRequest"
      >
        Solicitar demo
      </button>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden text-white"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-[#0b0c1a] border-t border-white/10"
      >
        <div class="px-6 py-4 space-y-4">
          <a 
            v-for="link in navLinks" 
            :key="link.href"
            :href="link.href"
            class="block text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </a>
          <button 
            class="w-full h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-neon hover:bg-primary-hover transition-all"
            @click="handleDemoRequest"
          >
            Solicitar demo
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const navLinks = [
  { label: 'Cómo funciona', href: '#solucion' },
  { label: 'Modos de Juego', href: '#experiencia' },
  { label: 'Público', href: '#piloto' },
  { label: 'Precios', href: '#precios' },
]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleDemoRequest = () => {
  // Aquí puedes implementar la lógica para abrir un modal o formulario
  console.log('Demo requested')
}
</script>
