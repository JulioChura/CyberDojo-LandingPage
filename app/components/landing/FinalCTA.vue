<template>
  <section class="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-primary/10"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-[#0b0c1a] to-transparent"></div>
    
    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
        Entrena hoy la <span class="text-primary">ciudadanía digital</span> del futuro
      </h2>
      <p class="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
        Sé parte de la validación. Prueba CyberDojo en tu institución y ayúdanos a perfeccionar las simulaciones.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button 
          v-for="cta in ctas" 
          :key="cta.text"
          :class="[
            'flex h-12 w-full sm:w-auto min-w-[160px] items-center justify-center rounded-full px-6 text-sm font-bold transition-all',
            cta.variant === 'primary' && 'bg-primary text-white shadow-neon hover:bg-primary-hover',
            cta.variant === 'secondary' && 'border border-white/20 bg-white/5 text-white hover:bg-white/10',
            cta.variant === 'outline' && 'border border-white/20 bg-transparent text-white hover:border-primary hover:text-primary'
          ]"
          @click="handleCTAClick(cta.action)"
        >
          {{ cta.text }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CTA {
  text: string
  variant: 'primary' | 'secondary' | 'outline'
  action: string
}

const ctas: CTA[] = [
  {
    text: 'Agendar Demo',
    variant: 'primary',
    action: 'schedule-demo'
  },
  {
    text: 'Descargar Brochure',
    variant: 'secondary',
    action: 'download-brochure'
  },
  {
    text: 'Ver Video',
    variant: 'outline',
    action: 'watch-video'
  }
]

const handleCTAClick = (action: string) => {
  console.log(`CTA clicked: ${action}`)
  // Implementar lógica según la acción
}
</script>
