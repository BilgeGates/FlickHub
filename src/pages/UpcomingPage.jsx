import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiChevronLeft } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";
import { useMovies } from "../hooks/useMovies";
import MovieGrid from "../components/movie/MovieGrid";

const UpcomingPage = () => {
  const { movies, loading, hasMore, loadMore } = useMovies("upcoming");

  return (
    <>
      <Helmet>
        <title>FlickHub | Upcoming Movies</title>
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

              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                  <FiCalendar className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-white">
                    Upcoming Movies
                  </h1>
                  <p className="text-sm text-gray-400">
                    Coming soon to theaters
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
            className="mb-8 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl"
          >
            <p className="text-white font-semibold mb-1">
              Latest Upcoming Releases
            </p>
            <p className="text-gray-400 text-sm">
              Get ready for the next big blockbusters!
            </p>
          </motion.div>

          <MovieGrid
            movies={movies}
            hasMore={hasMore}
            loadMore={loadMore}
            loading={loading}
            emptyMessage="No upcoming movies available"
          />
        </div>
      </div>
    </>
  );
};

export default UpcomingPage;



