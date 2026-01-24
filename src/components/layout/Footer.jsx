import { Link } from 'react-router-dom';
import { FiFilm, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="lg:pl-72 bg-gradient-to-t from-black to-transparent border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FiFilm className="text-xl text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                FlickHub
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for discovering and streaming movies and
              series.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/trending"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Upcoming
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/BilgeGates"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                <FiGithub className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 FlickHub. All rights reserved. Built with Khatai Huseynzada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
