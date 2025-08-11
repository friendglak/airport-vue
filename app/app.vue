<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Global application configuration
useHead({
  title: 'SkyConnect Explorer',
  meta: [
    { name: 'description', content: 'Explora aeropuertos del mundo con SkyConnect Explorer' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>
