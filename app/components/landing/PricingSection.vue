<template>
  <section class="py-16 sm:py-20 lg:py-24 relative" id="precios">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Contacto
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
          Elige cómo empezar: prueba gratis, valida con tu institución, o expande a toda la red.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
        <div 
          v-for="plan in pricingPlans" 
          :key="plan.name"
          :class="[
            'glass-card rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col',
            plan.featured && 'relative border-primary/50 shadow-neon bg-[#151226]'
          ]"
        >
          <!-- Featured Badge -->
          <div 
            v-if="plan.featured"
            class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white shadow-sm"
          >
            Más Popular
          </div>

          <!-- Plan Name -->
          <h3 :class="['text-base sm:text-lg font-semibold', plan.featured ? 'text-primary' : 'text-white']">
            {{ plan.name }}
          </h3>

          <!-- Price -->
          <div class="mt-4 flex items-baseline gap-1">
            <span class="text-3xl sm:text-4xl font-bold text-white">{{ plan.price }}</span>
          </div>

          <!-- Description -->
          <p class="mt-2 text-sm text-slate-400">{{ plan.description }}</p>

          <!-- Features -->
          <ul class="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-300 flex-1">
            <li 
              v-for="feature in plan.features" 
              :key="feature"
              class="flex gap-2 sm:gap-3 items-start"
            >
              <span :class="['material-symbols-outlined text-lg flex-shrink-0', plan.featured ? 'text-primary' : 'text-accent-mint']">
                check
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            :class="[
              'mt-6 sm:mt-8 w-full rounded-full py-3 text-sm font-bold transition-colors',
              plan.featured 
                ? 'bg-primary text-white hover:bg-primary-hover shadow-lg' 
                : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
            ]"
            @click="handlePlanClick(plan.cta)"
          >
            {{ plan.cta }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Prueba Gratis',
    price: 'Acceso Demo',
    description: 'Experimenta un escenario completo.',
    features: [
      'Acceso inmediato',
      '1 Escenario completo',
      'Sin datos requeridos'
    ],
    cta: 'Probar Demo'
  },
  {
    name: 'Centro Educativo',
    price: 'Personalizado',
    description: 'Para escuelas que quieren validar con nosotros.',
    features: [
      'Múltiples estudiantes',
      'Escenarios disponibles',
      'Reportes de progreso',
      'Soporte directo'
    ],
    cta: 'Solicitar validación',
    featured: true
  },
  {
    name: 'Secretarías / Redes',
    price: 'Consultar',
    description: 'Para implementaciones en múltiples sedes.',
    features: [
      'Gestión centralizada',
      'Adaptable a LMS existentes',
      'Escenarios educativos',
      'Acompañamiento especializado'
    ],
    cta: 'Contactar'
  }
]

const handlePlanClick = (ctaText: string) => {
  console.log(`Plan clicked: ${ctaText}`)
  // Implementar lógica de contacto según el plan
}
</script>
