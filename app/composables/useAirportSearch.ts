import type { UseAirportSearchReturn } from "../../types";
import { useAirportStore } from "../../store/airportStore";
import { ref, computed, onUnmounted } from "vue";

export const useAirportSearch = (): UseAirportSearchReturn => {
  const airportStore = useAirportStore();

  const input = ref("");
  const showHistory = ref(false);
  const searchTimeout = ref<NodeJS.Timeout>();

  const loading = computed(() => airportStore.loading);
  const searchHistory = computed(() => airportStore.searchHistory);

  const setInput = (value: string) => {
    input.value = value;
  };

  const handleInputChange = () => {
    // Debounce search input
    clearTimeout(searchTimeout.value);
    searchTimeout.value = setTimeout(() => {
      if (input.value.trim()) {
        airportStore.setSearchQuery(input.value);
      }
    }, 300);
  };

  const handleSearch = async () => {
    if (input.value.trim()) {
      await airportStore.setSearchQuery(input.value);
      setShowHistory(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setShowHistory(false);
    }
  };

  const setShowHistory = (show: boolean) => {
    showHistory.value = show;
  };

  const selectFromHistory = async (query: string) => {
    input.value = query;
    await airportStore.setSearchQuery(query);
    setShowHistory(false);
  };

  // Cleanup timeout on unmount
  onUnmounted(() => {
    if (searchTimeout.value) {
      clearTimeout(searchTimeout.value);
    }
  });

  return {
    input,
    setInput,
    handleSearch,
    handleKeyPress,
    handleInputChange,
    loading,
    showHistory,
    setShowHistory,
    searchHistory,
    selectFromHistory,
  };
};
