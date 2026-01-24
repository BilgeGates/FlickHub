import { motion } from 'framer-motion';

const GenreFilter = ({ genres, activeGenre, onGenreChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {genres.map((genre, index) => {
        const isActive = activeGenre === genre.id;

        return (
          <motion.button
            key={genre.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onGenreChange(genre.id)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all ${
              isActive
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            {genre.name}
          </motion.button>
        );
      })}
    </div>
  );
};

export default GenreFilter;
