export const API_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: import.meta.env.VITE_TMDB_API_KEY || '',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  BACKDROP_SIZE: 'original',
  POSTER_SIZE: 'w500',
  PROFILE_SIZE: 'w185',
};

export const ROUTES = {
  HOME: '/',
  MOVIE_DETAIL: '/movie/:id',
  PLAYER: '/player/:id',
  TRENDING: '/trending',
  UPCOMING: '/upcoming',
  FAVORITES: '/favorites',
  SEARCH: '/search/:query',
};

export const EMBED_SERVERS = [
  { id: 'server1', name: 'Server 1', url: 'https://smashystream.com/embed/' },
  { id: 'server2', name: 'Server 2', url: 'https://www.2embed.cc/embed/' },
  { id: 'server3', name: 'Server 3', url: 'https://autoembed.cc/movie/tmdb/' },
];
