import React from "react";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading } from "../common/Loading";

export const MovieGrid = ({
  movies,
  hasMore,
  loadMore,
  loading,
  emptyMessage = "No movies found",
}) => {
  if (loading && movies.length === 0) {
    return <Loading message="Loading movies..." />;
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center py-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
          />
        </div>
      }
      scrollThreshold={0.9}
      style={{ overflow: "visible" }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
    >
      {movies.map((movie, index) => (
        <MovieCard key={`${movie.id}-${index}`} movie={movie} index={index} />
      ))}
    </InfiniteScroll>
  );
};

export default MovieGrid;



