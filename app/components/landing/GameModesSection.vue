<template>
  <section class="py-16 sm:py-20 lg:py-24 relative overflow-hidden" id="experiencia">
    <!-- Background gradient -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-accent-violet/5 blur-[100px] pointer-events-none"></div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="mb-12 sm:mb-16 text-center">
        <span class="text-accent-violet font-semibold tracking-wider uppercase text-xs sm:text-sm">
          Gamificación Educativa
        </span>
        <h2 class="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Modos de Juego
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-400">
          Aprender nunca fue tan atrapante
        </p>
      </div>

      <!-- Game Modes Grid -->
      <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
        <div
          v-for="(mode, i) in gameModes"
          :key="mode.title"
          :class="['glass-card rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative overflow-hidden group', mode.featured ? 'border-primary/30 bg-primary/5' : '']"
          data-reveal
          :data-reveal-delay="i * 70"
        >
          <div class="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>

            <div class="w-full aspect-video mb-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <img :src="mode.image" :alt="mode.title" class="w-full h-full object-cover rounded-2xl" loading="lazy" decoding="async" fetchpriority="low" width="1600" height="900" />
          </div>

          <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">{{ mode.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 font-light leading-relaxed px-2">{{ mode.description }}</p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface GameMode {
  title: string
  description: string
  image: string
  featured?: boolean
}

const gameModes: GameMode[] = [
  {
    title: 'Modo Historia',
    description: 'Pon a prueba tus habilidades en una narrativa envolvente a través de escenarios de riesgo digital.',
    image: '/GamesMode/historyGif.webp'
  },
  {
    title: '¿Confías o no?',
    description: 'Mensajes cortos: elige si es seguro o peligroso. Desliza entre opciones para decidir rápido.',
    image: '/GamesMode/generic.jpg'
  },
  {
    title: 'El chat sospechoso',
    description: 'Un NPC te escribe: elige responder, preguntar o reportar para mantenerte a salvo.',
    image: '/GamesMode/generic.jpg'
  },
  {
    title: 'Caza el engaño',
    description: 'Marca frases peligrosas en publicaciones antes de que se acabe el tiempo.',
    image: '/GamesMode/generic.jpg'
  },
  {
    title: 'Quiz de Amenazas',
    description: 'Responde preguntas interactivas para poner a prueba tu ciber-instinto.',
    image: '/GamesMode/quiz.png'
  }
]
</script>
