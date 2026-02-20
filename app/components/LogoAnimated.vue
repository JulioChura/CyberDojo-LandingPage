<template>
  <div class="relative group cursor-pointer select-none ">
    <h1 :class="[
      'font-bold tracking-tight flex items-center',
      size === 'large' ? 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl' : 'text-3xl sm:text-4xl'
    ]">
      <span class="animate-color-shift-1 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">C</span>
      <span class="animate-color-shift-2 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">y</span>
      <span class="animate-color-shift-3 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">b</span>
      <span class="animate-color-shift-4 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">e</span>
      <span class="animate-color-shift-5 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">r</span>
      <span class="bg-gradient-to-b from-[#FDE68A] via-[#FDBA74] to-[#F97316] bg-clip-text text-transparent drop-shadow-[0_2px_0_rgba(0,0,0,0.5)] animate-pulse">
        Dojo
      </span>
    </h1>
    
    <!-- Efecto de brillo al hover -->
    <div class="absolute inset-0 bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'small' | 'large'
}

withDefaults(defineProps<Props>(), {
  size: 'large'
})
</script>

<style scoped>
h1 {
  font-family: 'Fredoka', sans-serif;
}

/* Animación de cambio de colores para cada letra */
@keyframes colorShift1 {
  0%, 100% { color: #A5F3FC; }
  25% { color: #E0F2FE; }
  50% { color: #DDD6FE; }
  75% { color: #C4B5FD; }
}

@keyframes colorShift2 {
  0%, 100% { color: #E0F2FE; }
  25% { color: #DDD6FE; }
  50% { color: #C4B5FD; }
  75% { color: #A78BFA; }
}

@keyframes colorShift3 {
  0%, 100% { color: #DDD6FE; }
  25% { color: #C4B5FD; }
  50% { color: #A78BFA; }
  75% { color: #A5F3FC; }
}

@keyframes colorShift4 {
  0%, 100% { color: #C4B5FD; }
  25% { color: #A78BFA; }
  50% { color: #A5F3FC; }
  75% { color: #E0F2FE; }
}

@keyframes colorShift5 {
  0%, 100% { color: #A78BFA; }
  25% { color: #A5F3FC; }
  50% { color: #E0F2FE; }
  75% { color: #DDD6FE; }
}

.animate-color-shift-1 {
  animation: colorShift1 8s ease-in-out infinite;
}

.animate-color-shift-2 {
  animation: colorShift2 8s ease-in-out infinite;
  animation-delay: 0.2s;
}

.animate-color-shift-3 {
  animation: colorShift3 8s ease-in-out infinite;
  animation-delay: 0.4s;
}

.animate-color-shift-4 {
  animation: colorShift4 8s ease-in-out infinite;
  animation-delay: 0.6s;
}

.animate-color-shift-5 {
  animation: colorShift5 8s ease-in-out infinite;
  animation-delay: 0.8s;
}
</style>
