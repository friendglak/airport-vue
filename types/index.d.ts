import { ComputedRef, Ref } from "vue";

export interface Airport {
  id: string;
  airport_id: string;
  airport_name: string;
  country_name: string;
  iata_code: string;
  icao_code: string;
  latitude: string;
  longitude: string;
  timezone: string;
  city_iata_code: string;
  gmt: string;
}

export interface MapProps {
  latitude: number;
  longitude: number;
  airport?: Airport;
}

export interface UseAirportSearchReturn {
  input: Ref<string>;
  setInput: (value: string) => void;
  handleSearch: () => Promise<void>;
  handleKeyPress: (e: KeyboardEvent) => void;
  handleInputChange: () => void;
  loading: ComputedRef<boolean>;
  showHistory: Ref<boolean>;
  setShowHistory: (show: boolean) => void;
  searchHistory: ComputedRef<string[]>;
  selectFromHistory: (query: string) => Promise<void>;
}

export interface UseAirportDetailsReturn {
  airport: Ref<Airport | null>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  fetchAirportDetails: (id: string) => Promise<void>;
  clearAirport: () => void;
}

export interface UseAirportTabsReturn {
  activeTab: Ref<Tab>;
  setActiveTab: (tab: Tab) => void;
  tabs: Tab[];
}

export interface AirportCardDetails {
  title: string;
  children: any;
  icon: any;
}

export interface Tab {
  id: string;
  label: string;
  icon: string;
}
