<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] bg-white border-b border-brand-border',
      isScrolled ? 'shadow-brand-nav' : ''
    ]"
  >
    <div class="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0">
        <img src="/kantis.png" alt="Kantis Logo" class="h-14 w-auto" />
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#how-it-works" @click.prevent="scrollTo('#how-it-works')" class="text-[15px] font-medium text-brand-grey-700 hover:text-brand-mint transition-colors">How it works</a>
        <a href="#why-kantis" @click.prevent="scrollTo('#why-kantis')" class="text-[15px] font-medium text-brand-grey-700 hover:text-brand-mint transition-colors">Why Kantis</a>
        <a href="#team" @click.prevent="scrollTo('#team')" class="text-[15px] font-medium text-brand-grey-700 hover:text-brand-mint transition-colors">Team</a>
      </nav>

      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <a href="https://cal.com/mkushka/30min" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center justify-center bg-brand-mint text-brand-navy-deep font-sans font-semibold text-[15px] rounded-lg px-4 h-10 hover:scale-[1.02] transition-transform">
          Book a call
        </a>
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-brand-navy" aria-label="Toggle menu">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-brand-border shadow-brand-nav px-6 py-4 flex flex-col gap-4">
      <a href="#how-it-works" @click.prevent="scrollTo('#how-it-works'); isMobileMenuOpen = false" class="text-[15px] font-medium text-brand-grey-700 hover:text-brand-mint transition-colors">How it works</a>
      <a href="#why-kantis" @click.prevent="scrollTo('#why-kantis'); isMobileMenuOpen = false" class="text-[15px] font-medium text-brand-grey-700 hover:text-brand-mint transition-colors">Why Kantis</a>
      <a href="#team" @click.prevent="scrollTo('#team'); isMobileMenuOpen = false" class="text-[15px] font-medium text-brand-grey-700 hover:text-brand-mint transition-colors">Team</a>
      <a href="https://cal.com/mkushka/30min" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-brand-mint text-brand-navy-deep font-sans font-semibold text-[15px] rounded-lg px-4 h-10 w-full hover:scale-[1.02] transition-transform mt-2">
        Book a call
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

const scrollTo = (target: string) => {
  const el = document.querySelector(target)
  if (el) {
    const headerOffset = 72
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - headerOffset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
