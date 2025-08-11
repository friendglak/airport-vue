<template>
  <div class="relative w-full max-w-2xl">
    <!-- Search input -->
    <div class="relative">
      <input
        v-model="input"
        type="text"
        placeholder="Buscar aeropuertos por nombre, ciudad o código..."
        class="w-full px-6 py-4 text-lg mb-2.5 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-full shadow-lg focus:border-brand-blue focus:outline-none transition-all duration-300 placeholder-gray-500"
        @input="handleInputChange"
        @keydown.enter="handleSearch"
        @keydown.escape="setShowHistory(false)"
        @focus="setShowHistory(true)"
      />

      <!-- Search button -->
      <button
        @click="handleSearch"
        :disabled="loading"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-blue hover:bg-brand-cyan text-white px-6 py-2 rounded-full transition-colors duration-300 disabled:opacity-50"
      >
        <span v-if="!loading">Buscar</span>
        <span v-else class="flex items-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Buscando...
        </span>
      </button>
    </div>

    <!-- Search history -->
    <div
      v-if="showHistory && searchHistory.length > 0"
      class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
    >
      <div class="p-2">
        <h3 class="text-sm font-semibold text-gray-700 mb-2 px-3">
          Búsquedas recientes
        </h3>
        <div class="space-y-1">
          <button
            v-for="query in searchHistory"
            :key="query"
            @click="selectFromHistory(query)"
            class="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            {{ query }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAirportSearch } from "../composables/useAirportSearch";
const {
  input,
  loading,
  showHistory,
  searchHistory,
  handleInputChange,
  handleSearch,
  setShowHistory,
  selectFromHistory,
} = useAirportSearch();
</script>
