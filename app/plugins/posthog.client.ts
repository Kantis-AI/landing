import posthog from 'posthog-js'
import { defineNuxtPlugin, useRuntimeConfig, useRouter } from '#imports'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const router = useRouter()
  const posthogClient = posthog.init(config.public.posthogPublicKey as string, {
    api_host: config.public.posthogHost as string,
    person_profiles: 'identified_only',
    capture_pageview: false, // We will manually trigger pageviews on route change
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') {
        posthog.debug()
      }
    }
  })

  // Watch route changes to track pageviews
  router.afterEach((to) => {
    posthog.capture('$pageview', {
      $current_url: to.fullPath
    })
  })

  return {
    provide: {
      posthog: () => posthogClient
    }
  }
})
