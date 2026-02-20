<template>
  <div class="dark">
    <!-- Navigation Bar -->
    <LandingNavBar />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <LandingHeroSection />

      <!-- Problem Section -->
      <LandingProblemSection />

      <!-- Solution Section -->
      <LandingSolutionSection />

      <!-- Game Modes Section -->
      <LandingGameModesSection />

      <!-- Target Audience Section -->
      <LandingTargetAudienceSection />

      <!-- Pricing Section -->
      <LandingPricingSection />

      <!-- Final CTA -->
      <LandingFinalCTA />
    </main>

    <!-- Footer -->
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
// SEO Meta tags
useHead({
  title: 'CyberDojo - Entrenamiento en Ciudadanía Digital',
  meta: [
    { 
      name: 'description', 
      content: 'Simulaciones seguras impulsadas por IA que preparan a las nuevas generaciones para el mundo digital. Detecta, decide y aprende.' 
    },
    { 
      name: 'keywords', 
      content: 'ciudadanía digital, educación digital, ciberseguridad, simulaciones IA, grooming, phishing, ciberacoso' 
    },
    { property: 'og:title', content: 'CyberDojo - Entrenamiento en Ciudadanía Digital' },
    { 
      property: 'og:description', 
      content: 'Entrena a estudiantes para enfrentar riesgos digitales reales con simulaciones seguras impulsadas por IA.' 
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})
</script>
