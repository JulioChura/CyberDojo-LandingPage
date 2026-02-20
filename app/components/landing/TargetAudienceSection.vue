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
            <div class="glass-card rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col items-center text-center hover:scale-105 transition-transform h-56 sm:h-64 md:h-72 lg:h-80 justify-between">
              <div :class="['flex items-center justify-center rounded-full mb-4 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28', audience.iconBgClass]">
                <span class="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{{ audience.icon }}</span>
              </div>
              <div>
                <h3 class="font-bold text-white mb-2 text-base sm:text-lg md:text-xl">{{ audience.title }}</h3>
                <p class="text-sm sm:text-sm md:text-base text-slate-400">{{ audience.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second row: remaining cards centered (stack on small screens) -->
        <div v-if="secondRow.length" class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <div v-for="audience in secondRow" :key="audience.title" class="w-full sm:w-72 md:w-96">
            <div class="glass-card rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col items-center text-center hover:scale-105 transition-transform w-full h-56 sm:h-64 md:h-72 lg:h-80 justify-between">
              <div :class="['flex items-center justify-center rounded-full mb-4 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28', audience.iconBgClass]">
                <span class="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{{ audience.icon }}</span>
              </div>
              <div>
                <h3 class="font-bold text-white mb-2 text-base sm:text-lg md:text-xl">{{ audience.title }}</h3>
                <p class="text-sm sm:text-sm md:text-base text-slate-400">{{ audience.description }}</p>
              </div>
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
 
