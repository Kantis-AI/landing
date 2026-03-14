<template>
  <section id="team" class="bg-brand-grey-50 py-16 md:py-24 scroll-mt-20">
    <div class="max-w-[1000px] mx-auto px-6">
      
      <!-- Section Header -->
      <div class="text-center max-w-[640px] mx-auto mb-16 md:mb-20">
        <h2 class="font-serif text-[28px] md:text-[40px] leading-[1.2] text-brand-navy-deep">
          Built by founders who've<br class="hidden md:block"/>
          been through compliance
        </h2>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        <!-- Founder 1 -->
        <div class="bg-white border border-brand-border rounded-xl p-8 hover:shadow-brand-card-hover transition-shadow duration-300 flex flex-col items-center text-center sm:items-start sm:text-left">
          <div class="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center mb-6 overflow-hidden">
            <template v-if="true">
              <img src="/misha.jpeg" alt="Misha Kushka" class="w-full h-full object-cover"/>
            </template>
            <template v-else>
              <span class="font-sans font-bold text-[24px] text-white">MK</span>
            </template>
          </div>
          <h3 class="font-sans font-semibold text-[20px] text-brand-navy-deep mb-1">Misha Kushka</h3>
          <span class="inline-block px-3 py-1 bg-brand-mint-pale text-brand-mint text-[13px] font-sans font-medium rounded-full mb-6">Co-Founder & CEO</span>
          <p class="font-sans text-[16px] leading-[1.6] text-brand-grey-700 mb-6 flex-grow">
            Previously co-founded Stay Liquid, a stablecoin yield platform for institutions (Antler UK 2024). 10+ years engineering experience across smart contracts and full-stack infrastructure. Knows first-hand what compliance costs when you're not prepared.
          </p>
          <a href="https://www.linkedin.com/in/mkushka/" target="_blank" rel="noopener noreferrer" class="text-brand-grey-400 hover:text-brand-mint transition-colors" aria-label="LinkedIn profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        <!-- Founder 2 -->
        <div class="bg-white border border-brand-border rounded-xl p-8 hover:shadow-brand-card-hover transition-shadow duration-300 flex flex-col items-center text-center sm:items-start sm:text-left">
          <div class="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center mb-6 overflow-hidden">
            <template v-if="true">
              <img src="/feruzjon.jpeg" alt="Feruzjon Majidov" class="w-full h-full object-cover"/>
            </template>
            <template v-else>
              <span class="font-sans font-bold text-[24px] text-white">FN</span>
            </template>
          </div>
          <h3 class="font-sans font-semibold text-[20px] text-brand-navy-deep mb-1">Feruzjon Majidov</h3>
          <span class="inline-block px-3 py-1 bg-brand-mint-pale text-brand-mint text-[13px] font-sans font-medium rounded-full mb-6">Co-Founder & CTO</span>
          <p class="font-sans text-[16px] leading-[1.6] text-brand-grey-700 mb-6 flex-grow">
            Previously CTO at Neoeco, an AI-driven carbon reporting platform. Personally completed SOC 2 Type 1, Type 2, and ISO 27001 at prior companies. Knows exactly where the tools fail and how to automate what they leave manual.
          </p>
          <a href="https://www.linkedin.com/in/feruzjonmajidov/" target="_blank" rel="noopener noreferrer" class="text-brand-grey-400 hover:text-brand-mint transition-colors" aria-label="LinkedIn profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

      </div>



    </div>
  </section>
</template>
