<template>
  <section class="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 sm:mb-16 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Los riesgos digitales ya están en las aulas
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-400">
          Identifica y previene amenazas antes de que ocurran en la vida real.
        </p>
      </div>

      <!-- Risk Cards Grid -->
      <div>
        <!-- First row: up to 3 cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="risk in firstRow"
            :key="risk.title"
            :class="['glass-card rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden group', risk.gridClass]"
          >
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>

            <div class="w-full aspect-video mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <img :src="risk.image" :alt="risk.title" class="w-full h-full object-cover rounded-2xl" />
            </div>

            <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">{{ risk.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 font-light leading-relaxed px-2">{{ risk.description }}</p>
          </div>
        </div>

        <!-- Second row: remaining cards centered, stack on small screens -->
        <div v-if="secondRow.length" class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <div
            v-for="risk in secondRow"
            :key="risk.title"
            class="w-full sm:w-[36rem] md:w-[28rem] lg:w-[32rem]"
          >
            <div :class="['glass-card rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden group']">
              <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>

              <div class="w-full aspect-video mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <img :src="risk.image" :alt="risk.title" class="w-full h-full object-cover rounded-2xl" />
              </div>

              <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">{{ risk.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400 font-light leading-relaxed px-2">{{ risk.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Risk {
  title: string
  description: string
  image: string
  gridClass?: string
}

const svgFor = (label: string, bg = '#E5E7EB', fg = '#0B0E14') => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 1200 675'><rect width='100%' height='100%' fill='${bg}' rx='20'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='56' fill='${fg}'>${label}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const risks: Risk[] = [
  {
    title: 'Grooming',
    description: 'Detección de perfiles falsos y adultos malintencionados.',
    image: '/DigitalRisks/grooming.webp'
  },
  {
    title: 'Phishing',
    description: 'Identificación de estafas, enlaces y correos fraudulentos diseñados para robar credenciales.',
    image: '/DigitalRisks/pishing.webp'
  },
  {
    title: 'Suplantación',
    description: 'Suplantación de identidad y perfiles falsos en plataformas digitales.',
    image: '/DigitalRisks/suplantacion.jpg'
  },
  {
    title: 'Manipulación',
    description: 'Reconocer presión social y técnicas de manipulación psicológica.',
    image: '/DigitalRisks/manipulacion.webp'
  },
  {
    title: 'Enlaces maliciosos',
    description: 'Ejemplo de enlace malicioso usado en campañas de phishing y páginas fraudulentas.',
    image: '/DigitalRisks/enlaces-maliciosos.avif'
  }
]

// split into first row (3) and second row (rest)
const firstRow = risks.slice(0, 3)
const secondRow = risks.slice(3)
</script>
