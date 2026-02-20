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

      <!-- Audience Cards: responsive grid (3 per row, remaining centered) -->
      <div class="mt-8 sm:mt-12">
        <!-- First row: up to 3 cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="audience in firstRow" :key="audience.title">
            <div class="glass-card rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <div :class="['flex size-14 items-center justify-center rounded-full mb-4 w-16 h-16', audience.iconBgClass]">
                <span class="material-symbols-outlined text-4xl">{{ audience.icon }}</span>
              </div>
              <h3 class="font-bold text-white mb-2 text-lg">{{ audience.title }}</h3>
              <p class="text-sm text-slate-400">{{ audience.description }}</p>
            </div>
          </div>
        </div>

        <!-- Second row: remaining cards centered -->
        <div v-if="secondRow.length" class="mt-6 flex justify-center gap-6">
          <div v-for="audience in secondRow" :key="audience.title" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div class="glass-card rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
              <div :class="['flex size-14 items-center justify-center rounded-full mb-4 w-16 h-16', audience.iconBgClass]">
                <span class="material-symbols-outlined text-4xl">{{ audience.icon }}</span>
              </div>
              <h3 class="font-bold text-white mb-2 text-lg">{{ audience.title }}</h3>
              <p class="text-sm text-slate-400">{{ audience.description }}</p>
            </div>
          </div>
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
    description: 'Escuelas que integran la formación en ciudadanía digital en el aula.',
    icon: 'school',
    iconBgClass: 'bg-blue-500/20 text-blue-400'
  },
  {
    title: 'Talleres / Academias',
    description: 'Talleres de formación, academias y capacitaciones especializadas.',
    icon: 'co_present',
    iconBgClass: 'bg-purple-500/20 text-purple-400'
  },
  {
    title: 'Programas locales / Municipios',
    description: 'Proyectos educativos municipales y programas públicos.',
    icon: 'account_balance',
    iconBgClass: 'bg-green-500/20 text-green-400'
  },
  {
    title: 'Fundaciones / ONGs',
    description: 'Organizaciones que trabajan en bienestar infantil y protección digital.',
    icon: 'volunteer_activism',
    iconBgClass: 'bg-amber-400/20 text-amber-400'
  },
  {
    title: 'Familias / Uso en casa',
    description: 'Recursos y actividades para familias y uso doméstico.',
    icon: 'family_restroom',
    iconBgClass: 'bg-yellow-500/20 text-yellow-400'
  }
]

// split into first row (3) and second row (rest)
const firstRow = audiences.slice(0, 3)
const secondRow = audiences.slice(3)
</script>
 
