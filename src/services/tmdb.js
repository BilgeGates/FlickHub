import { API_CONFIG } from "../utils/constants";

class TMDBService {
  constructor() {
    this.apiKey = import.meta.env.VITE_API_KEY;
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  async fetchData(endpoint, params = {}) {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    url.searchParams.append("api_key", this.apiKey);
    url.searchParams.append("language", "en-US");

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("API request failed");
      return await response.json();
    } catch (error) {
      console.error("TMDB API Error:", error);
      throw error;
    }
  }

  // Movie methods
  async getMovieDetails(id) {
    return this.fetchData(`/movie/${id}`);
  }

  async getMovieCredits(id) {
    return this.fetchData(`/movie/${id}/credits`);
  }

  async getMovieVideos(id) {
    return this.fetchData(`/movie/${id}/videos`);
  }

  async getMovieRecommendations(id) {
    return this.fetchData(`/movie/${id}/recommendations`);
  }

  // Discovery methods
  async discoverMovies(params) {
    return this.fetchData("/discover/movie", params);
  }

  async getTrendingMovies(page = 1) {
    return this.fetchData("/trending/movie/day", { page });
  }

  async getUpcomingMovies(page = 1) {
    return this.fetchData("/movie/upcoming", { page });
  }

  async getPopularMovies(page = 1) {
    return this.fetchData("/movie/popular", { page });
  }

  // Genre methods
  async getGenres() {
    return this.fetchData("/genre/movie/list");
  }

  // Search
  async searchMovies(query, page = 1) {
    return this.fetchData("/search/movie", { query, page });
  }
}

export default new TMDBService();



