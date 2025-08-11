import { defineStore } from "pinia";
import { getAirports } from "../services/aviationService";
import type { Airport } from "../types";
import { ref } from "vue";

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
    gmt: "-5"
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
    gmt: "0"
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
    gmt: "1"
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
    gmt: "1"
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
    gmt: "1"
  },
  {
    id: "6",
    airport_id: "AMS",
    airport_name: "Amsterdam Airport Schiphol",
    country_name: "Netherlands",
    iata_code: "AMS",
    icao_code: "EHAM",
    latitude: "52.3086",
    longitude: "4.7639",
    timezone: "Europe/Amsterdam",
    city_iata_code: "AMS",
    gmt: "1"
  },
  {
    id: "7",
    airport_id: "BCN",
    airport_name: "Barcelona–El Prat Airport",
    country_name: "Spain",
    iata_code: "BCN",
    icao_code: "LEBL",
    latitude: "41.2974",
    longitude: "2.0833",
    timezone: "Europe/Madrid",
    city_iata_code: "BCN",
    gmt: "1"
  },
  {
    id: "8",
    airport_id: "MUC",
    airport_name: "Munich Airport",
    country_name: "Germany",
    iata_code: "MUC",
    icao_code: "EDDM",
    latitude: "48.3538",
    longitude: "11.7861",
    timezone: "Europe/Berlin",
    city_iata_code: "MUC",
    gmt: "1"
  },
  {
    id: "9",
    airport_id: "LAX",
    airport_name: "Los Angeles International Airport",
    country_name: "United States",
    iata_code: "LAX",
    icao_code: "KLAX",
    latitude: "33.9416",
    longitude: "-118.4085",
    timezone: "America/Los_Angeles",
    city_iata_code: "LAX",
    gmt: "-8"
  },
  {
    id: "10",
    airport_id: "ORD",
    airport_name: "O'Hare International Airport",
    country_name: "United States",
    iata_code: "ORD",
    icao_code: "KORD",
    latitude: "41.9786",
    longitude: "-87.9048",
    timezone: "America/Chicago",
    city_iata_code: "CHI",
    gmt: "-6"
  }
];

export const useAirportStore = defineStore("airport", () => {
  // State
  const airports = ref<Airport[]>([]);
  const filteredAirports = ref<Airport[]>([]);
  const searchQuery = ref("");
  const searchHistory = ref<string[]>([]);
  const page = ref(1);
  const pageSize = ref(100);
  const totalAirports = ref(0);
  const loading = ref(false);

  // Actions
  const fetchAirports = async () => {
    loading.value = true;
    try {
      // Use mock data for now
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      airports.value = mockAirports;
      filteredAirports.value = mockAirports;
      totalAirports.value = mockAirports.length;
    } catch (error) {
      console.error("Error fetching airports:", error);
    } finally {
      loading.value = false;
    }
  };

  const setSearchQuery = async (query: string) => {
    searchQuery.value = query;
    page.value = 1; // Reset to first page on new search

    if (query.trim()) {
      addToSearchHistory(query);
      const searchTerm = query.toLowerCase().trim();
      
      // Filter mock data with improved search logic
      filteredAirports.value = mockAirports.filter(airport => 
        airport.airport_name.toLowerCase().includes(searchTerm) ||
        airport.city_iata_code.toLowerCase().includes(searchTerm) ||
        airport.iata_code.toLowerCase().includes(searchTerm) ||
        airport.icao_code.toLowerCase().includes(searchTerm) ||
        airport.country_name.toLowerCase().includes(searchTerm) ||
        airport.airport_id.toLowerCase().includes(searchTerm)
      );
      totalAirports.value = filteredAirports.value.length;
    } else {
      filteredAirports.value = mockAirports;
      totalAirports.value = mockAirports.length;
    }
  };

  const setPage = async (newPage: number) => {
    page.value = newPage;
    // For mock data, we don't need to fetch again
  };

  const addToSearchHistory = (query: string) => {
    if (!query.trim()) return;

    searchHistory.value = [
      query,
      ...searchHistory.value.filter((q) => q !== query),
    ].slice(0, 5);
  };

  return {
    // State
    airports: airports,
    filteredAirports: filteredAirports,
    searchQuery: searchQuery,
    searchHistory: searchHistory,
    page: page,
    pageSize: pageSize,
    totalAirports: totalAirports,
    loading: loading,

    // Actions
    fetchAirports,
    setSearchQuery,
    setPage,
    addToSearchHistory,
  };
});
