<template>
  <div>
    <SectionsHeroSection />
    <SectionsProblemSection class="reveal-on-scroll" />
    <SectionsHowItWorksSection class="reveal-on-scroll" />
    <SectionsFrameworksSection class="reveal-on-scroll" />
    <SectionsWhyKantisSection class="reveal-on-scroll" />
    <SectionsTeamSection class="reveal-on-scroll" />
    <SectionsCtaSection class="reveal-on-scroll" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '#imports'

useHead({
  title: 'Kantis — ISO 27001 & GDPR Compliance for European Startups',
  meta: [
    { name: 'description', content: 'Kantis automates ISO 27001 certification and GDPR compliance for European startups. Managed service. UKAS-accredited auditors. Built for certainty.' },
    { property: 'og:title', content: 'Kantis — Built for certainty.' },
    { property: 'og:description', content: 'ISO 27001 and GDPR compliance automation for EU startups. Get certified without consuming your engineering team.' },
    { property: 'og:image', content: '/kantis-squared.png' },
    { property: 'og:url', content: 'https://getkantis.com' }
  ],
  link: [
    { rel: 'canonical', href: 'https://getkantis.com/' }
  ]
})

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer?.unobserve(entry.target)
      }
    })
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  })

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer?.observe(el)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
