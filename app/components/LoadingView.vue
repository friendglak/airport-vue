<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div
      class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mb-4"
    ></div>
    <p class="text-white/80 text-lg font-medium">{{ message }}</p>
    <p class="text-white/60 text-sm mt-2">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  message: "Cargando...",
  subtitle: "Por favor espera un momento",
});
</script>
