import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieProvider } from "./context/MovieContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import TrendingPage from "./pages/TrendingPage";
import UpcomingPage from "./pages/UpcomingPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import PlayerPage from "./pages/PlayerPage";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <MovieProvider>
        <BrowserRouter>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastClassName="backdrop-blur-xl bg-gray-900/90 border border-white/10"
          />

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="trending" element={<TrendingPage />} />
              <Route path="upcoming" element={<UpcomingPage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="search/:query" element={<SearchPage />} />
              <Route path="movie/:id" element={<MovieDetailPage />} />
              <Route path="player/:id" element={<PlayerPage />} />
              <Route path="player/:id/:title" element={<PlayerPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </ErrorBoundary>
  );
}

export default App;



