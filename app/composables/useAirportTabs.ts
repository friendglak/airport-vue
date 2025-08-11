import { ref } from "vue";
import type { Tab, UseAirportTabsReturn } from "../../types";

export const useAirportTabs = (): UseAirportTabsReturn => {
  const tabs: Tab[] = [
    {
      id: "overview",
      label: "Overview",
      icon: "i-heroicons-information-circle",
    },
    {
      id: "details",
      label: "Details",
      icon: "i-heroicons-document-text",
    },
    {
      id: "map",
      label: "Map",
      icon: "i-heroicons-map",
    },
    {
      id: "weather",
      label: "Weather",
      icon: "i-heroicons-cloud",
    },
  ];

  const activeTab = ref<Tab>(tabs[0]);

  const setActiveTab = (tab: Tab) => {
    activeTab.value = tab;
  };

  return {
    activeTab: activeTab,
    setActiveTab,
    tabs,
  };
};
