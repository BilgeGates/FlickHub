import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChevronLeft } from 'react-icons/hi';
import { FiHeart, FiTrash2 } from 'react-icons/fi';
import { useFavorites } from '../hooks/useFavorites';
import MovieCard from '../components/movie/MovieCard';
import { EmptyState } from '../components/common/Loading';
import { toast } from 'react-toastify';

const FavoritesPage = () => {
  const { favorites, clearAllFavorites } = useFavorites();

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all favorites?')) {
      clearAllFavorites();
      toast.success('All favorites cleared!');
    }
  };

  return (
    <>
      <Helmet>
        <title>FlickHub | My Favorites</title>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="sticky top-16 lg:top-0 z-40 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
                  >
                    <HiChevronLeft className="w-5 h-5" />
                    <span className="text-sm font-medium hidden sm:inline">
                      Back
                    </span>
                  </motion.button>
                </Link>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 border border-red-500/30 rounded-full">
                    <FiHeart className="w-5 h-5 text-red-400 fill-red-400" />
                  </div>
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-white">
                      My Favorites
                    </h1>
                    <p className="text-sm text-gray-400">
                      {favorites.length}{' '}
                      {favorites.length === 1 ? 'movie' : 'movies'}
                    </p>
                  </div>
                </div>
              </div>

              {favorites.length > 0 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClearAll}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-full text-red-400 transition-all"
                >
                  <FiTrash2 className="w-4 h-4" />
                  <span className="text-sm font-medium hidden md:inline">
                    Clear All
                  </span>
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {favorites.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} index={index} />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={FiHeart}
              title="No Favorites Yet"
              message="Start building your collection by bookmarking movies you love"
              action={
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/50 transition-all"
                  >
                    Browse Movies
                  </motion.button>
                </Link>
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
