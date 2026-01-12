import { useState, useEffect, useCallback, useRef } from 'react';
import tmdbService from '../services/tmdb';

export const useMovies = (type = 'popular', params = {}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Use ref to store params and avoid dependency issues
  const paramsRef = useRef(params);

  // Update ref when params actually change
  useEffect(() => {
    paramsRef.current = params;
  }, [params]); // Only update when stringified params change

  const fetchMovies = useCallback(
    async (pageNum) => {
      try {
        setLoading(true);
        let data;
        const currentParams = paramsRef.current;

        switch (type) {
          case 'trending':
            data = await tmdbService.getTrendingMovies(pageNum);
            break;
          case 'upcoming':
            data = await tmdbService.getUpcomingMovies(pageNum);
            break;
          case 'genre':
            data = await tmdbService.discoverMovies({
              ...currentParams,
              page: pageNum,
            });
            break;
          case 'search':
            data = await tmdbService.searchMovies(currentParams.query, pageNum);
            break;
          default:
            data = await tmdbService.getPopularMovies(pageNum);
        }

        if (pageNum === 1) {
          setMovies(data.results || []);
        } else {
          setMovies((prev) => [...prev, ...(data.results || [])]);
        }

        setTotalPages(data.total_pages || 0);
        setHasMore(pageNum < (data.total_pages || 0));
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    },
    [type] // Only depend on type, not params
  );

  useEffect(() => {
    setPage(1);
    setMovies([]);
    fetchMovies(1);
  }, [fetchMovies, type]); // Use stringified params to detect real changes

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchMovies(nextPage);
    }
  }, [hasMore, loading, page, fetchMovies]);

  const refresh = useCallback(() => {
    setPage(1);
    setMovies([]);
    fetchMovies(1);
  }, [fetchMovies]);

  return {
    movies,
    loading,
    error,
    page,
    totalPages,
    hasMore,
    loadMore,
    refresh,
  };
};
