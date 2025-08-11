import type { Airport } from "../../types";
import { ref } from "vue";

export const useAirports = () => {
  const airports = ref<Airport[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchAirports = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Mock data for now - replace with actual API call
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
      ];

      airports.value = mockAirports;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : "Unknown error occurred";
    } finally {
      loading.value = false;
    }
  };

  return {
    airports: airports,
    loading: loading,
    error: error,
    fetchAirports,
  };
};
