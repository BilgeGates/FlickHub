/**
 * Get Smashystream embed URL
 * @param {string|number} movieId - Movie ID
 * @returns {string} Embed URL
 */
export const getSmashystreamUrl = (movieId) => {
  return `https://smashystream.com/embed/${movieId}`;
};

/**
 * Get Superembed embed URL
 * @param {string|number} movieId - Movie ID
 * @returns {string} Embed URL
 */
export const getSuperembedUrl = (movieId) => {
  return `https://www.2embed.cc/embed/${movieId}`;
};

/**
 * Get 2embed embed URL
 * @param {string|number} movieId - Movie ID
 * @returns {string} Embed URL
 */
export const get2embedUrl = (movieId) => {
  return `https://autoembed.cc/movie/tmdb/${movieId}`;
};

/**
 * Get all available embed URLs
 * @param {string|number} movieId - Movie ID
 * @returns {Object} Object with all embed URLs
 */
export const getAllEmbedUrls = (movieId) => {
  return {
    smashystream: getSmashystreamUrl(movieId),
    superembed: getSuperembedUrl(movieId),
    embed2: get2embedUrl(movieId),
  };
};



