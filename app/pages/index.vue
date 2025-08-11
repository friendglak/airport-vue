<template>
  <div class="flex flex-col items-center min-h-screen relative">
    <!-- Background with gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950 opacity-25 z-0"
    />

    <!-- Main content -->
    <div
      :class="`relative z-10 flex flex-col items-center w-full px-4 ${
        filteredAirports.length > 0 ? 'pt-4 sm:pt-8' : 'h-screen justify-center'
      }`"
    >
      <h1
        class="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#006AFF] to-[#00F9FF] text-transparent bg-clip-text mb-4 sm:mb-8 text-center"
      >
        SkyConnect Explorer
      </h1>

      <SearchInput />

      <LoadingView
        v-if="loading"
        message="Buscando aeropuertos..."
        subtitle="Estamos procesando tu búsqueda"
      />

      <AirportList
        v-else-if="filteredAirports.length > 0"
        :filtered-airports="filteredAirports"
        :loading="loading"
        :page="page"
        :page-size="pageSize"
        :total-airports="totalAirports"
        @view-on-map="handleViewOnMap"
        @page-change="handlePageChange"
      />

      <ErrorView
        v-else-if="error"
        :title="'Error en la búsqueda'"
        :message="error"
        :retry-action="fetchAirports"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useAirportStore } from "../../store/airportStore";

// Store
const airportStore = useAirportStore();

// Computed properties
const filteredAirports = computed(() => airportStore.filteredAirports);
const loading = computed(() => airportStore.loading);
const page = computed(() => airportStore.page);
const pageSize = computed(() => airportStore.pageSize);
const totalAirports = computed(() => airportStore.totalAirports);
const error = ref<string | null>(null);

// Methods
const handleViewOnMap = (airport: any) => {
  // Navigate to map view
  console.log("View on map:", airport);
};

const handlePageChange = async (newPage: number) => {
  await airportStore.setPage(newPage);
};

const fetchAirports = async () => {
  try {
    error.value = null;
    await airportStore.fetchAirports();
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Error desconocido";
  }
};

// Fetch airports on mount
onMounted(async () => {
  await fetchAirports();
});
</script>
