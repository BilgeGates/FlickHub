import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HiChevronLeft } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { useMovies } from '../hooks/useMovies';
import MovieGrid from '../components/movie/MovieGrid';
import { EmptyState } from '../components/common/Loading';

const SearchPage = () => {
  const { query } = useParams();
  const { movies, loading, hasMore, loadMore } = useMovies('search', { query });

  return (
    <>
      <Helmet>
        <title>FlickHub | Search: {query}</title>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-xl border-b border-white/10">
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

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
                    <FiSearch className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h1 className="text-lg md:text-xl font-bold text-white">
                      Search Results
                    </h1>
                    <p className="text-sm text-gray-400">
                      Showing results for:{' '}
                      <span className="text-blue-400 font-medium">{query}</span>
                    </p>
                  </div>
                </div>
              </div>

              {!loading && movies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full"
                >
                  <span className="text-sm font-bold text-white">
                    {movies.length}
                  </span>
                  <span className="text-sm text-gray-400">
                    {movies.length === 1 ? 'Result' : 'Results'}
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          {!loading && movies.length === 0 ? (
            <EmptyState
              icon={FiSearch}
              title="No Results Found"
              message={
                <>
                  <p> We couldn&apos;t find any movies matching</p>
                  <span className="text-blue-400 font-semibold">{query}</span>
                  <br />
                  Try different keywords or check your spelling
                </>
              }
              action={
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/50 transition-all"
                  >
                    Back to Home
                  </motion.button>
                </Link>
              }
            />
          ) : (
            <>
              {!loading && movies.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl"
                >
                  <p className="text-white font-semibold mb-1">
                    Found {movies.length}{' '}
                    {movies.length === 1 ? 'movie' : 'movies'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Results are sorted by relevance and popularity
                  </p>
                </motion.div>
              )}

              <MovieGrid
                movies={movies}
                hasMore={hasMore}
                loadMore={loadMore}
                loading={loading}
                emptyMessage="No movies found"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;



