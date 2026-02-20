<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-[#0b0c1a]" id="piloto">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <!-- Section Header -->
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
        Para Colegios e Instituciones
      </h2>
      <p class="text-base sm:text-lg text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto">
        CyberDojo está diseñado para docentes, directivos y responsables de educación que buscan preparar a sus estudiantes para el mundo digital.
      </p>

      <!-- Audience Cards -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8 sm:mt-12">
        <div 
          v-for="audience in audiences" 
          :key="audience.title"
          class="glass-card rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
        >
          <div :class="['flex size-12 items-center justify-center rounded-full mb-4', audience.iconBgClass]">
            <span class="material-symbols-outlined text-2xl">{{ audience.icon }}</span>
          </div>
          <h3 class="font-bold text-white mb-2 text-base sm:text-lg">{{ audience.title }}</h3>
          <p class="text-xs sm:text-sm text-slate-400">{{ audience.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Audience {
  title: string
  description: string
  icon: string
  iconBgClass: string
}

const audiences: Audience[] = [
  {
    title: 'Colegios',
    description: 'Integra CyberDojo en tus clases de ciudadanía digital o informática.',
    icon: 'school',
    iconBgClass: 'bg-blue-500/20 text-blue-400'
  },
  {
    title: 'Instituciones Educativas',
    description: 'Académias, talleres y programas de formación digital.',
    icon: 'groups',
    iconBgClass: 'bg-purple-500/20 text-purple-400'
  },
  {
    title: 'Secretarías de Educación',
    description: 'Programas a escala municipal o estatal.',
    icon: 'account_balance',
    iconBgClass: 'bg-green-500/20 text-green-400'
  },
  {
    title: 'Fundaciones y ONGs',
    description: 'Iniciativas de protección digital y bienestar infantil.',
    icon: 'favorite',
    iconBgClass: 'bg-yellow-500/20 text-yellow-400'
  }
]
</script>
