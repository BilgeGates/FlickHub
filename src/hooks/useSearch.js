import { useState, useEffect, useCallback } from "react";
import tmdbService from "../services/tmdb";

export const useSearch = (initialQuery = "") => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const search = useCallback(async (searchQuery, pageNum = 1) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await tmdbService.searchMovies(searchQuery, pageNum);

      if (pageNum === 1) {
        setResults(data.results || []);
      } else {
        setResults((prev) => [...prev, ...(data.results || [])]);
      }

      setTotalPages(data.total_pages || 0);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (query) {
      setPage(1);
      search(query, 1);
    }
  }, [query, search]);

  const loadMore = () => {
    if (page < totalPages && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      search(query, nextPage);
    }
  };

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    page,
    totalPages,
    loadMore,
    hasMore: page < totalPages,
  };
};

export default useSearch;



