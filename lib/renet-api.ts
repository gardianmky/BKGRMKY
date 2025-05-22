import type { Listing } from "@/types/listing"

interface ApiResponse<T> {
  data: T
  status: number
  success: boolean
}

export class RenetApiClient {
  private static instance: RenetApiClient
  private baseUrl: string
  private token: string

  private constructor(token: string, baseUrl?: string) {
    this.baseUrl = baseUrl || "https://api.renet.app/Website"
    this.token = token
    
    if (!this.token) {
      throw new Error("API token is required")
    }
  }

  public static getInstance(token: string, baseUrl?: string): RenetApiClient {
    if (!RenetApiClient.instance) {
      RenetApiClient.instance = new RenetApiClient(token, baseUrl)
    }
    return RenetApiClient.instance
  }

  private getHeaders(): HeadersInit {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  async fetchListings(params?: {
    type?: 'forSale' | 'forRent' | 'commercial'
    limit?: number
    offset?: number
  }): Promise<Listing[]> {
    try {
      const url = new URL(`${this.baseUrl}/Listings`)
      
      if (params?.type) url.searchParams.append('type', params.type)
      if (params?.limit) url.searchParams.append('limit', params.limit.toString())
      if (params?.offset) url.searchParams.append('offset', params.offset.toString())

      const response = await fetch(url.toString(), {
        headers: this.getHeaders(),
        cache: 'no-store'
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const result: ApiResponse<Listing[]> = await response.json()
      return result.data
    } catch (error) {
      console.error('Error fetching listings:', error)
      throw error
    }
  }

  async fetchListingById(id: string): Promise<Listing> {
    try {
      const response = await fetch(`${this.baseUrl}/Listings/${id}`, {
        headers: this.getHeaders(),
        cache: 'no-store'
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const result: ApiResponse<Listing> = await response.json()
      return result.data
    } catch (error) {
      console.error(`Error fetching listing ${id}:`, error)
      throw error
    }
  }

  async searchListings(
    query: string, 
    filters?: Record<string, string | number | boolean>
  ): Promise<Listing[]> {
    try {
      const url = new URL(`${this.baseUrl}/Listings/search`)
      url.searchParams.append('query', query)

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          url.searchParams.append(key, value.toString())
        })
      }

      const response = await fetch(url.toString(), {
        headers: this.getHeaders(),
        cache: 'no-store'
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const result: ApiResponse<Listing[]> = await response.json()
      return result.data
    } catch (error) {
      console.error('Error searching listings:', error)
      throw error
    }
  }
}

// Export a function to initialize the API client
export function initRenetApi(token: string, baseUrl?: string) {
  return RenetApiClient.getInstance(token, baseUrl)
}
