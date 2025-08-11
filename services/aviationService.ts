import type { Airport } from '../types'
import { API_CONFIG } from '../constants'

interface AirportResponse {
  airports: Airport[];
  total: number;
}

interface SearchParams {
  page: number;
  pageSize: number;
  query?: string;
}

export class AviationService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_CONFIG.baseUrl;
  }

  async getAirports(
    page: number = 1,
    pageSize: number = 100,
    searchQuery?: string
  ): Promise<AirportResponse> {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
      });

      if (searchQuery) {
        params.append("q", searchQuery);
      }

      const response = await fetch(`${this.baseUrl}/airports?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(API_CONFIG.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching airports:", error);
      throw error;
    }
  }

  async getAirportById(id: string): Promise<Airport> {
    try {
      const response = await fetch(`${this.baseUrl}/airports/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(API_CONFIG.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching airport:", error);
      throw error;
    }
  }

  async searchAirports(
    query: string,
    page: number = 1,
    pageSize: number = 100
  ): Promise<AirportResponse> {
    return this.getAirports(page, pageSize, query);
  }

  async getAirportsByCountry(
    country: string,
    page: number = 1,
    pageSize: number = 100
  ): Promise<AirportResponse> {
    try {
      const params = new URLSearchParams({
        country: country,
        page: page.toString(),
        pageSize: pageSize.toString(),
      });

      const response = await fetch(
        `${this.baseUrl}/airports/country?${params}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          signal: AbortSignal.timeout(API_CONFIG.timeout),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching airports by country:", error);
      throw error;
    }
  }

  async getAirportsByCity(
    city: string,
    page: number = 1,
    pageSize: number = 100
  ): Promise<AirportResponse> {
    try {
      const params = new URLSearchParams({
        city: city,
        page: page.toString(),
        pageSize: pageSize.toString(),
      });

      const response = await fetch(`${this.baseUrl}/airports/city?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(API_CONFIG.timeout),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching airports by city:", error);
      throw error;
    }
  }
}

// Singleton instance of the service
export const aviationService = new AviationService();

// Convenience function to maintain compatibility
export const getAirports = (
  page: number,
  pageSize: number,
  searchQuery?: string
) => {
  return aviationService.getAirports(page, pageSize, searchQuery);
};
