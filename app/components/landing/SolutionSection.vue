<template>
  <section class="py-16 sm:py-20 lg:py-24 relative bg-[#0b0c1a]" id="solucion">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#0b0c1a] via-[#111224] to-[#0b0c1a]"></div>
    
    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        <!-- Left: Process Steps -->
        <div class="flex flex-col gap-8 lg:gap-10">
          <div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Cómo funciona
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-400">
              Aprendizaje activo en tiempo real. Nuestra IA no da lecciones, crea experiencias. El estudiante es el protagonista.
            </p>
          </div>

          <!-- Steps -->
          <div class="space-y-6 sm:space-y-8">
            <div 
              v-for="step in steps" 
              :key="step.number"
              class="flex gap-4 sm:gap-6 group"
            >
              <div class="flex-none">
                <span class="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {{ step.number }}
                </span>
              </div>
              <div>
                <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {{ step.title }}
                </h3>
                <p class="mt-2 text-sm sm:text-base text-slate-400">
                  {{ step.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Video Demonstration -->
        <div class="relative">
          <div class="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-primary to-accent-violet opacity-20 blur-xl"></div>
          <div class="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/10 bg-[#1e2030] shadow-2xl flex items-center justify-center">
            <video
              :src="videoSrc"
              class="w-full h-[350px] sm:h-[400px] object-cover"
              autoplay
              muted
              loop
              playsinline
            ></video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Simulación',
    description: 'El estudiante entra a un chat simulado con una IA entrenada para replicar escenarios de riesgo realistas.'
  },
  {
    number: '02',
    title: 'Decisión',
    description: 'Toma decisiones críticas eligiendo respuestas. Cada elección cambia el rumbo de la conversación.'
  },
  {
    number: '03',
    title: 'Feedback Inmediato',
    description: 'Recibe retroalimentación instantánea, entendiendo por qué una decisión fue segura o riesgosa.'
  }
]
import { ref, onMounted } from 'vue'

const videoSrc = ref('')
onMounted(() => {
    try {
    videoSrc.value = `${window.location.origin}/mainFunctionality/functionality.mp4`
  } catch (e) {
    videoSrc.value = '/mainFunctionality/functionality.mp4'
  }
})

</script>
