<template>
  <footer class="bg-brand-navy text-white pt-16 lg:pt-24 pb-8 px-6 relative overflow-hidden">
    <div class="max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
      
      <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 md:mb-32">
        <!-- Column 1 - Brand -->
        <div class="flex flex-col gap-4">
          <img src="/kantis-no-background.png" alt="Kantis Logo" class="h-9 w-auto brightness-0 invert self-start" />
          <p class="text-[16px] text-white/70 font-sans mt-2">Built for certainty.</p>
          <p class="text-[13px] text-white/40 font-sans font-medium mt-auto pt-6">© 2025 Kantis. All rights reserved.</p>
        </div>

        <!-- Column 2 - Contact -->
        <div class="flex flex-col gap-4 md:mt-0 mt-8">
          <h4 class="text-[13px] text-white font-sans font-medium uppercase tracking-wider mb-2">Get in touch</h4>
          <a href="mailto:support@getkantis.com" class="text-[16px] text-brand-mint-light hover:text-brand-mint transition-colors">support@getkantis.com</a>
          <a href="https://cal.com/mkushka/30min" target="_blank" rel="noopener noreferrer" class="text-[16px] text-brand-mint-light hover:text-brand-mint transition-colors">Book a call</a>
        </div>

        <!-- Column 3 - Links -->
        <div class="flex flex-col gap-4 md:mt-0 mt-8">
          <h4 class="text-[13px] text-white font-sans font-medium uppercase tracking-wider mb-2">Company</h4>
          <NuxtLink to="/privacy" class="text-[16px] text-white/70 hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="text-[16px] text-white/70 hover:text-white transition-colors">Terms of Service</NuxtLink>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-[16px] text-white/70 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>

      <!-- Huge Logo -->
      <div class="w-full pointer-events-none select-none flex justify-center mt-auto">
        <img src="/kantis-no-background.png" alt="Kantis" class="w-full h-auto brightness-0 invert opacity-10 object-contain" />
      </div>

    </div>
  </footer>
</template>
