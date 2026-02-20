<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement
      if (entry.isIntersecting) {
        const delay = Number(el.dataset.revealDelay) || 0
        window.setTimeout(() => el.classList.add('in-view'), delay)
        observer.unobserve(el)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.classList.add('reveal')
    observer.observe(el)
  })
})
</script>
