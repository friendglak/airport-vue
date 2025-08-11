<template>
  <div class="w-full max-w-6xl">
    <!-- Results header -->
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold text-white mb-2">
        {{ filteredAirports.length }} aeropuertos encontrados
      </h2>
      <p class="text-white/80">
        Explora la información detallada de cada aeropuerto
      </p>
    </div>

    <!-- Airport grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <AirportCard
        v-for="airport in filteredAirports"
        :key="airport.id"
        :airport="airport"
        @view-on-map="handleViewOnMap"
      />
    </div>

    <!-- Pagination -->
    <Pagination
      v-if="totalAirports > pageSize"
      :current-page="page"
      :total-pages="Math.ceil(totalAirports / pageSize)"
      :total-items="totalAirports"
      @page-change="handlePageChange"
    />

    <!-- No results message -->
    <div
      v-if="filteredAirports.length === 0 && !loading"
      class="text-center py-12"
    >
      <div class="text-white/60 text-lg">
        No se encontraron aeropuertos con los criterios de búsqueda.
      </div>
      <p class="text-white/40 mt-2">Intenta con otros términos de búsqueda.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Airport } from "../../types";

interface Props {
  filteredAirports: Airport[];
  loading?: boolean;
  page?: number;
  pageSize?: number;
  totalAirports?: number;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  page: 1,
  pageSize: 100,
  totalAirports: 0,
});

const emit = defineEmits<{
  viewOnMap: [airport: Airport];
  pageChange: [page: number];
}>();

const handleViewOnMap = (airport: Airport) => {
  emit("viewOnMap", airport);
};

const handlePageChange = (page: number) => {
  emit("pageChange", page);
};
</script>
