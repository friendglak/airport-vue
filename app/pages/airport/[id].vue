<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-900 to-blue-950">
    <!-- Header -->
    <div class="bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/"
              class="text-white/80 hover:text-white transition-colors duration-200"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </NuxtLink>
            <h1 class="text-2xl font-bold text-white">
              Detalles del Aeropuerto
            </h1>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div v-if="loading" class="flex justify-center items-center py-20">
        <div
          class="animate-spin rounded-full h-16 w-16 border-b-2 border-white"
        ></div>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <div class="text-red-400 text-xl mb-4">{{ error }}</div>
        <button
          @click="fetchAirportDetails"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Reintentar
        </button>
      </div>

      <div v-else-if="airport" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Airport Information -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <div class="mb-6">
            <h2 class="text-3xl font-bold text-white mb-2">
              {{ airport.airport_name }}
            </h2>
            <p class="text-white/80 text-lg">
              {{ airport.city_iata_code }}, {{ airport.country_name }}
            </p>
          </div>

          <!-- Airport Codes -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-white/20 rounded-lg p-4">
              <p class="text-white/60 text-sm mb-1">Código IATA</p>
              <p class="text-2xl font-bold text-blue-400">
                {{ airport.iata_code }}
              </p>
            </div>
            <div class="bg-white/20 rounded-lg p-4">
              <p class="text-white/60 text-sm mb-1">Código ICAO</p>
              <p class="text-2xl font-bold text-cyan-400">
                {{ airport.icao_code }}
              </p>
            </div>
          </div>

          <!-- Airport Details -->
          <div class="space-y-4">
            <div
              class="flex justify-between items-center py-3 border-b border-white/20"
            >
              <span class="text-white/60">Timezone</span>
              <span class="text-white font-medium">{{ airport.timezone }}</span>
            </div>
            <div
              class="flex justify-between items-center py-3 border-b border-white/20"
            >
              <span class="text-white/60">GMT Offset</span>
              <span class="text-white font-medium">GMT {{ airport.gmt }}</span>
            </div>
            <div
              class="flex justify-between items-center py-3 border-b border-white/20"
            >
              <span class="text-white/60">Latitude</span>
              <span class="text-white font-medium">{{ airport.latitude }}</span>
            </div>
            <div
              class="flex justify-between items-center py-3 border-b border-white/20"
            >
              <span class="text-white/60">Longitude</span>
              <span class="text-white font-medium">{{
                airport.longitude
              }}</span>
            </div>
            <div
              class="flex justify-between items-center py-3 border-b border-white/20"
            >
              <span class="text-white/60">Airport ID</span>
              <span class="text-white font-medium">{{
                airport.airport_id
              }}</span>
            </div>
          </div>
        </div>

        <!-- Map Section -->
        <div
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <h3 class="text-xl font-bold text-white mb-4">
            Ubicación en el Mapa
          </h3>

          <!-- Map Placeholder -->
          <div
            class="bg-gray-800 rounded-lg h-96 flex items-center justify-center"
          >
            <div class="text-center">
              <svg
                class="w-16 h-16 text-white/40 mx-auto mb-4"
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
              <p class="text-white/60">Mapa interactivo</p>
              <p class="text-white/40 text-sm">
                Coordenadas: {{ airport.latitude }}, {{ airport.longitude }}
              </p>
            </div>
          </div>

          <!-- Coordinates Info -->
          <div class="mt-4 p-4 bg-white/20 rounded-lg">
            <h4 class="text-white font-medium mb-2">Coordenadas GPS</h4>
            <div class="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span class="text-white/60">Latitud:</span>
                <span class="text-white ml-2">{{ airport.latitude }}°</span>
              </div>
              <div>
                <span class="text-white/60">Longitud:</span>
                <span class="text-white ml-2">{{ airport.longitude }}°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Airport } from "../../../types";

// Route
const route = useRoute();
const airportId = route.params.id as string;

// State
const airport = ref<Airport | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

// Mock data for development
const mockAirports: Airport[] = [
  {
    id: "1",
    airport_id: "JFK",
    airport_name: "John F. Kennedy International Airport",
    country_name: "United States",
    iata_code: "JFK",
    icao_code: "KJFK",
    latitude: "40.6413",
    longitude: "-73.7781",
    timezone: "America/New_York",
    city_iata_code: "NYC",
    gmt: "-5",
  },
  {
    id: "2",
    airport_id: "LHR",
    airport_name: "London Heathrow Airport",
    country_name: "United Kingdom",
    iata_code: "LHR",
    icao_code: "EGLL",
    latitude: "51.4700",
    longitude: "-0.4543",
    timezone: "Europe/London",
    city_iata_code: "LON",
    gmt: "0",
  },
  {
    id: "3",
    airport_id: "CDG",
    airport_name: "Charles de Gaulle Airport",
    country_name: "France",
    iata_code: "CDG",
    icao_code: "LFPG",
    latitude: "49.0097",
    longitude: "2.5479",
    timezone: "Europe/Paris",
    city_iata_code: "PAR",
    gmt: "1",
  },
  {
    id: "4",
    airport_id: "MAD",
    airport_name: "Adolfo Suárez Madrid–Barajas Airport",
    country_name: "Spain",
    iata_code: "MAD",
    icao_code: "LEMD",
    latitude: "40.4983",
    longitude: "-3.5676",
    timezone: "Europe/Madrid",
    city_iata_code: "MAD",
    gmt: "1",
  },
  {
    id: "5",
    airport_id: "FCO",
    airport_name: "Leonardo da Vinci International Airport",
    country_name: "Italy",
    iata_code: "FCO",
    icao_code: "LIRF",
    latitude: "41.8045",
    longitude: "12.2508",
    timezone: "Europe/Rome",
    city_iata_code: "ROM",
    gmt: "1",
  },
];

// Methods
const fetchAirportDetails = async () => {
  loading.value = true;
  error.value = null;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Find airport in mock data
    const foundAirport = mockAirports.find(
      (a) => a.id === airportId || a.airport_id === airportId
    );

    if (foundAirport) {
      airport.value = foundAirport;
    } else {
      error.value = "Aeropuerto no encontrado";
    }
  } catch (err) {
    error.value = "Error al cargar los detalles del aeropuerto";
  } finally {
    loading.value = false;
  }
};

// Lifecycle
onMounted(() => {
  fetchAirportDetails();
});
</script>
