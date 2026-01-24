import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useMovieContext } from '../context/MovieContext';
import { useMovies } from '../hooks/useMovies';
import MovieGrid from '../components/movie/MovieGrid';
import SearchBar from '../components/search/SearchBar';
import GenreFilter from '../components/search/GenreFilter';
import { Loading } from '../components/common/Loading';

const Home = () => {
  const {
    genres,
    activeGenre,
    setActiveGenre,
    loading: genresLoading,
  } = useMovieContext();
  const { movies, loading, hasMore, loadMore } = useMovies('genre', {
    with_genres: activeGenre,
  });

  if (genresLoading) {
    return <Loading message="Loading genres..." />;
  }

  return (
    <>
      <Helmet>
        <title>FlickHub | Discover Movies</title>
        <meta name="description" content="Discover your next favorite movie" />
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Hero Section with Search */}
        <div className="bg-gradient-to-b from-black via-gray-900 to-black py-8 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Discover Your Next
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Favorite Movie
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Explore thousands of movies across all genres
              </p>
            </motion.div>

            <SearchBar />
          </div>
        </div>

        {/* Genre Filter */}
        <div className="sticky top-16 lg:top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <GenreFilter
              genres={genres}
              activeGenre={activeGenre}
              onGenreChange={setActiveGenre}
            />
          </div>
        </div>

        {/* Movies Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <MovieGrid
            movies={movies}
            hasMore={hasMore}
            loadMore={loadMore}
            loading={loading}
            emptyMessage="No movies found for this genre"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
