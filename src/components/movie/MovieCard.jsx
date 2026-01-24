import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FiPlay, FiInfo, FiCalendar } from 'react-icons/fi';
import { useFavorites } from '../../hooks/useFavorites';
import { toast } from 'react-toastify';
import noImage from '../../assets/images/no-image.jpg';
import { API_CONFIG } from '../../utils/constants';

const MovieCard = memo(({ movie, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const isBookmarked = isFavorite(movie.id);

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const success = toggleFavorite(movie);
    if (success) {
      toast.success(
        isBookmarked ? 'Removed from favorites' : 'Added to favorites',
        { position: 'bottom-right', autoClose: 2000 }
      );
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 7) return 'from-green-500 to-emerald-600';
    if (rating >= 5.5) return 'from-orange-400 to-amber-500';
    return 'from-red-500 to-rose-600';
  };

  const getRatingBg = (rating) => {
    if (rating >= 7) return 'bg-green-500/20 border-green-500/30';
    if (rating >= 5.5) return 'bg-orange-500/20 border-orange-500/30';
    return 'bg-red-500/20 border-red-500/30';
  };

  const rating = (movie.vote_average || 0).toFixed(1);
  const posterUrl = movie.poster_path
    ? `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.POSTER_SIZE}${movie.poster_path}`
    : noImage;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.05 },
    },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative w-full cursor-pointer"
    >
      <Link to={`/movie/${movie.id}`} className="block">
        <motion.div
          className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-zinc-900 shadow-xl"
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Movie Poster */}
          <div className="relative h-full w-full overflow-hidden">
            <LazyLoadImage
              effect="blur"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={posterUrl}
              alt={movie.title || movie.name}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Favorite Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute top-3 right-3 z-30 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
              isBookmarked
                ? 'bg-yellow-500/30 border border-yellow-500/50 text-yellow-400'
                : 'bg-black/40 border border-white/20 text-white hover:bg-black/60'
            }`}
            onClick={handleBookmark}
          >
            {isBookmarked ? (
              <AiFillStar className="w-5 h-5 drop-shadow-lg" />
            ) : (
              <AiOutlineStar className="w-5 h-5" />
            )}
          </motion.button>

          {/* Rating Badge */}
          <div
            className={`absolute top-3 left-3 z-30 px-3 py-1.5 rounded-full backdrop-blur-md border ${getRatingBg(
              movie.vote_average || 0
            )}`}
          >
            <div className="flex items-center gap-1.5">
              <AiFillStar
                className={`w-4 h-4 bg-gradient-to-r ${getRatingColor(
                  movie.vote_average || 0
                )} bg-clip-text text-transparent`}
              />
              <span
                className={`text-sm font-bold bg-gradient-to-r ${getRatingColor(
                  movie.vote_average || 0
                )} bg-clip-text text-transparent`}
              >
                {rating}
              </span>
            </div>
          </div>

          {/* Hover Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3 px-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50"
                >
                  <FiPlay className="w-8 h-8 text-white ml-1" />
                </motion.div>

                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2"
                  >
                    <FiInfo className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-medium">
                      Details
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Movie Info */}
          <div className="absolute bottom-0 inset-x-0 p-4 z-20">
            <motion.div
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white text-base md:text-lg font-bold line-clamp-2 mb-2 drop-shadow-lg">
                {movie.title || movie.name}
              </h2>

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      {movie.release_date && (
                        <span className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 backdrop-blur-sm">
                          <FiCalendar className="w-3 h-3" />
                          {new Date(movie.release_date).getFullYear()}
                        </span>
                      )}
                      {movie.vote_count > 0 && (
                        <span className="flex items-center gap-1">
                          <AiFillStar className="w-3 h-3 text-yellow-400" />
                          {movie.vote_count.toLocaleString()} votes
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.6 }}
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;
