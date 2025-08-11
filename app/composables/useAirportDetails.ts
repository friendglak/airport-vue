import type { Airport, UseAirportDetailsReturn } from "../../types";
import { aviationService } from "../../services/aviationService";
import { readonly, ref } from "vue";

export const useAirportDetails = (
  airportId?: string
): UseAirportDetailsReturn => {
  const airport = ref<Airport | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchAirportDetails = async (id: string) => {
    loading.value = true;
    error.value = null;

    try {
      const airportData = await aviationService.getAirportById(id);
      airport.value = airportData;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Failed to fetch airport details";
    } finally {
      loading.value = false;
    }
  };

  const clearAirport = () => {
    airport.value = null;
    error.value = null;
  };

  // Fetch airport details if ID is provided
  if (airportId) {
    fetchAirportDetails(airportId);
  }

  return {
    airport: readonly(airport),
    loading: readonly(loading),
    error: readonly(error),
    fetchAirportDetails,
    clearAirport,
  };
};
