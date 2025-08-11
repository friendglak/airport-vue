<template>
  <div
    class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
  >
    <div class="p-6 flex flex-col h-full">
      <!-- Airport header -->
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-1">
            {{ airport.airport_name }}
          </h3>
          <p class="text-gray-600">
            {{ airport.city_iata_code }}, {{ airport.country_name }}
          </p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-blue-600">
            {{ airport.iata_code }}
          </div>
          <div class="text-sm text-gray-500">{{ airport.icao_code }}</div>
        </div>
      </div>

      <!-- Airport details -->
      <div class="grid grid-cols-2 gap-4 mb-4 flex-grow">
        <div>
          <p class="text-sm text-gray-500">Timezone</p>
          <p class="font-medium text-gray-900">{{ airport.timezone }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">GMT Offset</p>
          <p class="font-medium text-gray-900">GMT {{ airport.gmt }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Latitude</p>
          <p class="font-medium text-gray-900">{{ airport.latitude }}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500">Longitude</p>
          <p class="font-medium text-gray-900">{{ airport.longitude }}</p>
        </div>
      </div>

      <!-- Action buttons - always at bottom -->
      <div class="flex space-x-3 mt-auto">
        <NuxtLink
          :to="`/airport/${airport.id}`"
          class="flex-1 bg-blue-600 cursor-pointer hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-center"
        >
          Ver Detalles
        </NuxtLink>
        <button
          @click="viewOnMap"
          class="px-4 py-2 border border-blue-600 cursor-pointer text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200 font-medium"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Airport } from "../../types";

interface Props {
  airport: Airport;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  viewOnMap: [airport: Airport];
}>();

const viewOnMap = () => {
  emit("viewOnMap", props.airport);
};
</script>
