import { useState, useEffect, useCallback } from "react";

const FAVORITES_KEY = "flickhub_favorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    try {
      const stored = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!isNaN(key)) {
          const movie = JSON.parse(localStorage.getItem(key));
          stored.push(movie);
        }
      }
      setFavorites(stored);
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  const isFavorite = useCallback((movieId) => {
    return localStorage.getItem(String(movieId)) !== null;
  }, []);

  const addFavorite = (movie) => {
    try {
      localStorage.setItem(String(movie.id), JSON.stringify(movie));
      loadFavorites();
      return true;
    } catch (error) {
      console.error("Error adding favorite:", error);
      return false;
    }
  };

  const removeFavorite = (movieId) => {
    try {
      localStorage.removeItem(String(movieId));
      loadFavorites();
      return true;
    } catch (error) {
      console.error("Error removing favorite:", error);
      return false;
    }
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      return removeFavorite(movie.id);
    } else {
      return addFavorite(movie);
    }
  };

  const clearAllFavorites = () => {
    try {
      favorites.forEach((movie) => {
        localStorage.removeItem(String(movie.id));
      });
      setFavorites([]);
      return true;
    } catch (error) {
      console.error("Error clearing favorites:", error);
      return false;
    }
  };

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    clearAllFavorites,
    refresh: loadFavorites,
  };
};



