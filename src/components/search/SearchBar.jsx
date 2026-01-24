import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import slugify from 'slugify';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);
  const navigate = useNavigate();

  const popularSearches = ['Action', 'Comedy', 'Thriller', 'Sci-Fi', 'Horror'];

  const handleSearch = (searchQuery) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      if (searchQuery.trim()) {
        navigate(`/search/${slugify(searchQuery.trim())}`);
      }
    }, 500);

    setTypingTimeout(timeout);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${slugify(query.trim())}`);
    }
  };

  const handleQuickSearch = (term) => {
    setQuery(term);
    navigate(`/search/${slugify(term)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-4xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

          {/* Search Input */}
          <div className="relative flex items-center">
            <FiSearch className="absolute left-6 w-5 h-5 text-gray-400 pointer-events-none z-10" />

            <input
              type="search"
              placeholder="Search for movies, genres, actors..."
              className="w-full pl-14 pr-6 py-4 md:py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl outline-none text-white placeholder-gray-400 focus:border-blue-500/50 focus:bg-white/15 transition-all"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handleSearch(e.target.value);
              }}
            />

            {query && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="absolute right-3 px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-500/50 transition-all"
              >
                Search
              </motion.button>
            )}
          </div>
        </div>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex flex-wrap gap-2 justify-center"
        >
          <span className="text-xs text-gray-500">Popular:</span>
          {popularSearches.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => handleQuickSearch(term)}
              className="text-xs px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all"
            >
              {term}
            </button>
          ))}
        </motion.div>
      </form>
    </motion.div>
  );
};

export default SearchBar;
