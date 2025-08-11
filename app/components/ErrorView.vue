<template>
  <div class="flex flex-col items-center justify-center py-12">
    <div
      class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4"
    >
      <svg
        class="w-8 h-8 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
        ></path>
      </svg>
    </div>

    <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
    <p class="text-white/80 text-center max-w-md mb-6">{{ message }}</p>

    <div class="flex space-x-3">
      <button
        v-if="retryAction"
        @click="retryAction"
        class="bg-blue-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
      >
        Reintentar
      </button>

      <button
        v-if="goBackAction"
        @click="goBackAction"
        class="px-6 py-2 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
      >
        Volver
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  message?: string;
  retryAction?: () => void;
  goBackAction?: () => void;
}

withDefaults(defineProps<Props>(), {
  title: "Algo salió mal",
  message: "Ha ocurrido un error inesperado. Por favor intenta de nuevo.",
});
</script>
