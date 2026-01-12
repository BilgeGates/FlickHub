import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  HiChevronLeft,
  HiStar,
  HiClock,
  HiCalendar,
  HiCurrencyDollar,
} from 'react-icons/hi';
import { FiPlay, FiHeart } from 'react-icons/fi';
import { BiWorld } from 'react-icons/bi';
import tmdbService from '../services/tmdb';
import { useFavorites } from '../hooks/useFavorites';
import { API_CONFIG } from '../utils/constants';
import { Loading, EmptyState } from '../components/common/Loading';
import noImage from '../assets/images/movies.jpg';
import slugify from "slugify";
import { toast } from 'react-toastify';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isFavorite, toggleFavorite } = useFavorites();
  const isBookmarked = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovieData();
  }, [id]);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [movieData, creditsData, videosData, recommendationsData] =
        await Promise.all([
          tmdbService.getMovieDetails(id),
          tmdbService.getMovieCredits(id),
          tmdbService.getMovieVideos(id),
          tmdbService.getMovieRecommendations(id),
        ]);

      setMovie(movieData);
      setCast(creditsData.cast?.slice(0, 12) || []);
      setVideos(videosData.results?.filter((v) => v.type === 'Trailer') || []);
      setRecommendations(recommendationsData.results?.slice(0, 6) || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = () => {
    if (movie) {
      toggleFavorite(movie);
      toast.success(
        isBookmarked ? 'Removed from favorites' : 'Added to favorites'
      );
    }
  };

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatMoney = (amount) => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  if (loading) return <Loading message="Loading movie details..." />;
  if (error) {
    return (
      <EmptyState
        title="Error Loading Movie"
        message={error}
        action={
          <Link to="/">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold">
              Back to Home
            </button>
          </Link>
        }
      />
    );
  }
  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.BACKDROP_SIZE}${movie.backdrop_path}`
    : noImage;

  return (
    <>
      <Helmet>
        <title>FlickHub | {movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-[60vh] md:h-[70vh] overflow-hidden"
          >
            <LazyLoadImage
              src={backdropUrl}
              alt={movie.title}
              effect="blur"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = noImage;
              }}
            />
          </motion.div>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm text-white rounded-lg hover:bg-black/80 transition"
          >
            <HiChevronLeft className="text-xl" />
            <span>Back</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="relative z-20 -mt-40 px-4 md:px-8 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Poster */}
              {movie.poster_path && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-shrink-0"
                >
                  <LazyLoadImage
                    src={`${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.POSTER_SIZE}${movie.poster_path}`}
                    alt={movie.title}
                    effect="blur"
                    className="w-full md:w-80 rounded-xl shadow-2xl"
                  />
                </motion.div>
              )}

              {/* Movie Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex-1"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {movie.title}
                </h1>

                {movie.tagline && (
                  <p className="text-gray-400 text-lg italic mb-6">
                    {movie.tagline}
                  </p>
                )}

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {movie.vote_average > 0 && (
                    <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1.5 rounded-lg">
                      <HiStar className="text-yellow-500" />
                      <span className="text-white font-semibold">
                        {movie.vote_average.toFixed(1)}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({movie.vote_count?.toLocaleString()})
                      </span>
                    </div>
                  )}

                  {movie.release_date && (
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg">
                      <HiCalendar className="text-gray-400" />
                      <span className="text-white">
                        {new Date(movie.release_date).getFullYear()}
                      </span>
                    </div>
                  )}

                  {movie.runtime > 0 && (
                    <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg">
                      <HiClock className="text-gray-400" />
                      <span className="text-white">
                        {formatRuntime(movie.runtime)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Genres */}
                {movie.genres?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    to={`/player/${id}/${slugify(movie.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition shadow-lg"
                  >
                    <FiPlay />
                    Watch Now
                  </Link>

                  <button
                    onClick={handleBookmark}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition ${
                      isBookmarked
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <FiHeart className={isBookmarked ? 'fill-current' : ''} />
                    {isBookmarked ? 'Favorited' : 'Add to Favorites'}
                  </button>

                  {videos.length > 0 && (
                    <a
                      href={`https://www.youtube.com/watch?v=${videos[0].key}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      <FiPlay />
                      Watch Trailer
                    </a>
                  )}
                </div>

                {/* Overview */}
                {movie.overview && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-3">
                      Overview
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {movie.overview}
                    </p>
                  </div>
                )}

                {/* Additional Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {movie.budget > 0 && (
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <HiCurrencyDollar />
                        <span className="text-sm">Budget</span>
                      </div>
                      <p className="text-white font-semibold">
                        {formatMoney(movie.budget)}
                      </p>
                    </div>
                  )}

                  {movie.revenue > 0 && (
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <HiCurrencyDollar />
                        <span className="text-sm">Revenue</span>
                      </div>
                      <p className="text-white font-semibold">
                        {formatMoney(movie.revenue)}
                      </p>
                    </div>
                  )}

                  {movie.original_language && (
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <BiWorld />
                        <span className="text-sm">Language</span>
                      </div>
                      <p className="text-white font-semibold uppercase">
                        {movie.original_language}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Cast Section */}
            {cast.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Top Cast</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {cast.map((actor) => (
                    <div
                      key={actor.id}
                      className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition"
                    >
                      {actor.profile_path ? (
                        <LazyLoadImage
                          src={`${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.PROFILE_SIZE}${actor.profile_path}`}
                          alt={actor.name}
                          effect="blur"
                          className="w-full aspect-[2/3] object-cover"
                        />
                      ) : (
                        <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                      <div className="p-3">
                        <p className="text-white font-semibold text-sm truncate">
                          {actor.name}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          {actor.character}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  You May Also Like
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {recommendations.map((rec) => (
                    <Link
                      key={rec.id}
                      to={`/movie/${rec.id}`}
                      className="group"
                    >
                      <div className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-500 transition">
                        <LazyLoadImage
                          src={
                            rec.poster_path
                              ? `${API_CONFIG.IMAGE_BASE_URL}/${API_CONFIG.POSTER_SIZE}${rec.poster_path}`
                              : noImage
                          }
                          alt={rec.title}
                          effect="blur"
                          className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="p-3">
                          <p className="text-white font-semibold text-sm truncate">
                            {rec.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailPage;



