<template>
  <section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
    <!-- Video Background -->
    <video 
      class="hero-video" 
      autoplay 
      muted 
      loop 
      playsinline
      aria-hidden="true"
    >
      <source src="/video.mp4" type="video/mp4">
      Tu navegador no soporta videos HTML5.
    </video>
    
    <!-- Overlay oscuro para legibilidad -->
    <div class="hero-overlay"></div>
    
    <!-- Animated Grid Background -->
    <div 
      class="absolute inset-0 z-[2] opacity-20 pointer-events-none" 
      style="background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 40px 40px;"
    ></div>
    
    <!-- Content -->
    <div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 sm:gap-8 px-6 text-center lg:px-8">
    

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-mint opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-mint"></span>
        </span>
        <span class="text-xs font-medium text-accent-mint uppercase tracking-wider">En fase piloto</span>
      </div>

      <!-- Heading -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white">
        Entrena a estudiantes para enfrentar 
        <span class="text-primary bg-clip-text">riesgos digitales reales</span>
      </h1>

      <!-- Description -->
      <p class="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-400">
        Simulaciones seguras impulsadas por IA que preparan a las nuevas generaciones para el mundo digital. Detecta, decide y aprende.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col w-full sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
        <button 
          class="group relative flex h-12 sm:h-14 w-full sm:w-auto min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-[#ff8f5a] px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-neon"
          @click="handleSolicitarDemo"
        >
          <span class="relative z-10 flex items-center gap-2">
            Solicitar demo
            <span class="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
          </span>
        </button>
        <button 
          class="group flex h-12 sm:h-14 w-full sm:w-auto min-w-[200px] items-center justify-center rounded-full border border-accent-mint/30 bg-accent-mint/10 px-6 sm:px-8 text-sm sm:text-base font-bold text-accent-mint backdrop-blur-sm transition-all hover:bg-accent-mint/20 hover:border-accent-mint/50"
          @click="handleProbarPiloto"
        >
          Probar piloto
        </button>
      </div>
    </div>
    
    <!-- Bottom Fade -->
    <div class="absolute bottom-0 h-32 w-full bg-gradient-to-t from-[#0b0c1a] to-transparent z-20"></div>
  </section>
</template>

<script setup lang="ts">
const handleSolicitarDemo = () => {
  console.log('Solicitar demo')
  // Implementar lógica de solicitud de demo
}

const handleProbarPiloto = () => {
  console.log('Probar piloto')
  // Implementar lógica para probar el piloto
}
</script>
