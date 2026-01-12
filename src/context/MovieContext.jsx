import { createContext, useContext, useState, useEffect } from 'react';
import tmdbService from '../services/tmdb';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      setLoading(true);
      const data = await tmdbService.getGenres();
      setGenres(data.genres || []);
      if (data.genres && data.genres.length > 0) {
        setActiveGenre(data.genres[0].id);
      }
    } catch (error) {
      console.error('Error fetching genres:', error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    genres,
    activeGenre,
    setActiveGenre,
    loading,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within MovieProvider');
  }
  return context;
};
