import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HiChevronLeft } from 'react-icons/hi';
import { FiMonitor, FiMaximize2, FiLoader } from 'react-icons/fi';
import tmdbService from '../services/tmdb';
import { EMBED_SERVERS } from '../utils/constants';

const PlayerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [selectedServer, setSelectedServer] = useState(EMBED_SERVERS[0].id);

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      const data = await tmdbService.getMovieDetails(id);
      setMovie(data);
    } catch (error) {
      console.error('Error fetching movie:', error);
    } finally {
      setLoading(false);
    }
  };

  const currentServer = EMBED_SERVERS.find((s) => s.id === selectedServer);
  const embedUrl = currentServer ? `${currentServer.url}${id}` : '';

  return (
    <>
      <Helmet>
        <title>FlickHub | {movie?.title || 'Player'}</title>
      </Helmet>

      <div className="min-h-screen bg-black flex flex-col">
        {/* Header */}
        <div className="relative z-50 bg-gradient-to-b from-black/95 to-transparent border-b border-white/10">
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            {/* Left: Back + Title */}
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
              >
                <HiChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">
                  Back
                </span>
              </motion.button>

              {movie && (
                <div className="hidden md:block">
                  <h1 className="text-lg font-bold text-white">
                    {movie.title}
                  </h1>
                  <p className="text-xs text-gray-400">Now Playing</p>
                </div>
              )}
            </div>

            {/* Right: Server Selection */}
            <div className="flex items-center gap-2">
              <FiMonitor className="w-4 h-4 text-gray-400 hidden sm:block" />
              <div className="flex gap-2">
                {EMBED_SERVERS.map((server) => (
                  <motion.button
                    key={server.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedServer(server.id);
                      setIsIframeLoading(true);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedServer === server.id
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {server.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Title */}
          {movie && (
            <div className="md:hidden px-4 pb-3">
              <h1 className="text-base font-bold text-white">{movie.title}</h1>
              <p className="text-xs text-gray-400">Now Playing</p>
            </div>
          )}
        </div>

        {/* Video Player */}
        <div className="flex-1 relative bg-black">
          {/* Loading Indicator */}
          {isIframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black z-40">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <FiLoader className="w-12 h-12 text-blue-500" />
              </motion.div>
              <p className="text-gray-400 text-sm">Loading player...</p>
            </div>
          )}

          {/* Video iframe */}
          <iframe
            key={selectedServer}
            src={embedUrl}
            onLoad={() => setIsIframeLoading(false)}
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full min-h-[calc(100vh-80px)] border-0"
          />
        </div>

        {/* Bottom Info */}
        <div className="bg-gradient-to-t from-black/95 to-transparent border-t border-white/10 px-4 md:px-6 py-3">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-4">
              <span>Server: {currentServer?.name}</span>
              {movie?.release_date && (
                <span className="hidden sm:inline">
                  Release: {new Date(movie.release_date).getFullYear()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <FiMaximize2 className="w-4 h-4" />
              <span>Press F for fullscreen</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPage;



