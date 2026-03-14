<template>
  <section class="bg-white py-16 md:py-24 min-h-[600px] flex items-center scroll-mt-20">
    <div class="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
      <!-- Left Column: Content -->
      <div class="flex flex-col items-start gap-6 hero-content opacity-0 translate-y-5">
        
        <!-- Badge -->
        <div class="inline-flex items-center px-3 py-1 bg-brand-mint-pale border border-brand-mint-light rounded-full">
          <span class="text-[13px] font-sans font-medium text-brand-navy">EU-first compliance automation</span>
        </div>

        <!-- Headline -->
        <h1 class="font-serif text-[36px] md:text-[56px] leading-[1.1] text-brand-navy-deep -tracking-wide">
          ISO 27001 and GDPR<br class="hidden md:block"/>
          certification — without<br class="hidden md:block"/>
          the engineering tax.
        </h1>

        <!-- Subheadline -->
        <p class="text-[18px] leading-[1.6] text-brand-grey-700 font-sans max-w-[540px]">
          Kantis helps European B2B startups achieve compliance
          certification in weeks, not months — with automated evidence
          collection and expert guidance, so your team stays focused
          on the product.
        </p>

        <!-- CTA Group -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto mt-2">
          <a href="https://cal.com/mkushka/30min" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-brand-mint text-brand-navy-deep font-sans font-semibold text-[15px] h-[48px] px-4 rounded-lg hover:scale-[1.02] transition-transform w-full sm:w-auto whitespace-nowrap">
            Book a free gap assessment
          </a>
          <a href="#how-it-works" @click.prevent="scrollTo('#how-it-works')" class="inline-flex items-center justify-center bg-transparent border-[1.5px] border-brand-navy text-brand-navy font-sans font-semibold text-[15px] h-[48px] px-4 rounded-lg hover:scale-[1.02] transition-transform w-full sm:w-auto whitespace-nowrap">
            See how it works
          </a>
        </div>

        <!-- Micro-copy -->
        <p class="text-[13px] text-brand-grey-400 font-sans mt-2">
          Free for the first session. No credit card. No commitment.
        </p>

      </div>

      <!-- Right Column: Visual -->
      <div class="hero-visual opacity-0 translate-y-5 flex justify-center md:justify-end">
        <div class="bg-white border border-brand-border rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[480px] p-8">
          <h3 class="font-sans font-semibold text-[20px] text-brand-navy-deep mb-6">ISO 27001 Readiness Report</h3>
          
          <div class="flex flex-col gap-4 mb-8">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center flex-shrink-0">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L13 1" stroke="#111E38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="font-sans text-[16px] text-brand-grey-700">Access Control</span>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center flex-shrink-0">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L13 1" stroke="#111E38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="font-sans text-[16px] text-brand-grey-700">Incident Response</span>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center flex-shrink-0">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5L5 9L13 1" stroke="#111E38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="font-sans text-[16px] text-brand-grey-700">Supplier Relationships</span>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="w-full bg-brand-grey-50 rounded-full h-2 mb-2">
            <div class="bg-brand-mint h-2 rounded-full w-[75%]"></div>
          </div>
          <p class="text-[13px] font-sans font-medium text-brand-grey-400 text-right">75% Complete</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

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
  // Simple reveal for hero immediately on load
  setTimeout(() => {
    const content = document.querySelector('.hero-content')
    const visual = document.querySelector('.hero-visual')
    if (content) {
      content.classList.remove('opacity-0', 'translate-y-5')
      content.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500', 'ease-out')
    }
    if (visual) {
      setTimeout(() => {
        visual.classList.remove('opacity-0', 'translate-y-5')
        visual.classList.add('opacity-100', 'translate-y-0', 'transition-all', 'duration-500', 'ease-out')
      }, 150)
    }
  }, 100)
})
</script>
