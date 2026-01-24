import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiChevronLeft } from 'react-icons/hi';
import { FiTrendingUp } from 'react-icons/fi';
import { useMovies } from '../hooks/useMovies';
import MovieGrid from '../components/movie/MovieGrid';

const TrendingPage = () => {
  const { movies, loading, hasMore, loadMore } = useMovies('trending');

  return (
    <>
      <Helmet>
        <title>FlickHub | Trending Movies</title>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="sticky top-16 lg:top-0 z-40 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
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
                <motion.div
                  className="p-2 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiTrendingUp className="w-5 h-5 text-orange-400" />
                </motion.div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-white">
                    Trending Movies
                  </h1>
                  <p className="text-sm text-gray-400">
                    What&apos;s hot right now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl"
          >
            <p className="text-white font-semibold mb-1">
              Today&apos;s Most Popular Movies
            </p>
            <p className="text-gray-400 text-sm">
              Updated daily based on views, ratings, and social buzz
            </p>
          </motion.div>

          <MovieGrid
            movies={movies}
            hasMore={hasMore}
            loadMore={loadMore}
            loading={loading}
            emptyMessage="No trending movies available"
          />
        </div>
      </div>
    </>
  );
};

export default TrendingPage;
