import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenuAlt1,
  HiX,
  HiHome,
  HiTrendingUp,
  HiCalendar,
  HiHeart,
  HiSearch,
} from "react-icons/hi";
import { FiFilm } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: HiHome,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Trending",
      path: "/trending",
      icon: HiTrendingUp,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      name: "Upcoming",
      path: "/upcoming",
      icon: HiCalendar,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "Favorites",
      path: "/favorites",
      icon: HiHeart,
      color: "from-red-500 to-pink-500",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-gradient-to-b from-black/95 via-black/90 to-black/95 backdrop-blur-xl border-r border-white/10 flex-col z-50">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 p-6 border-b border-white/10 group"
        >
          <motion.div
            className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiFilm className="text-2xl text-white" />
          </motion.div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              FlickHub
            </h1>
            <p className="text-xs text-gray-400 -mt-1">Movies & Series</p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.id}
                to={item.path}
                className="relative group/link block"
              >
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? `bg-gradient-to-r ${item.color} bg-opacity-20 text-white border border-white/20 shadow-lg`
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${active ? "animate-pulse" : ""}`}
                  />
                  <span className="text-sm font-medium">{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-white/10">
          <div className="px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
            <p className="text-gray-400 text-sm font-semibold">FlickHub</p>
            <p className="text-xs text-gray-500 mt-1">
              © 2025 All rights reserved
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 via-black/90 to-transparent backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <FiFilm className="text-xl text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                FlickHub
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/search")}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <HiSearch className="w-5 h-5 text-white" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <HiMenuAlt1 className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col"
            >
              {/* Mobile Logo */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <FiFilm className="text-xl text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      FlickHub
                    </h1>
                    <p className="text-xs text-gray-400 -mt-1">
                      Movies & Series
                    </p>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <HiX className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          active
                            ? `bg-gradient-to-r ${item.color} bg-opacity-20 text-white border border-white/20`
                            : "text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile Footer */}
              <div className="p-4 border-t border-white/10">
                <div className="px-4 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl text-center">
                  <p className="text-gray-400 text-sm">FlickHub</p>
                  <p className="text-xs text-gray-500 mt-1">© 2025</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;



