/**
 * Format runtime in minutes to hours and minutes
 * @param {number} minutes - Runtime in minutes
 * @returns {string} Formatted runtime (e.g., "2h 30m")
 */
export const formatRuntime = (minutes) => {
  if (!minutes || minutes <= 0) return "N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

/**
 * Format money amount to USD currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency (e.g., "$1,000,000")
 */
export const formatMoney = (amount) => {
  if (!amount || amount <= 0) return "N/A";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format date to readable string
 * @param {string} dateString - Date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Get year from date string
 * @param {string} dateString - Date string
 * @returns {number|string} Year or 'N/A'
 */
export const getYear = (dateString) => {
  if (!dateString) return "N/A";
  return new Date(dateString).getFullYear();
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Get rating color based on value
 * @param {number} rating - Rating value (0-10)
 * @returns {string} Tailwind color class
 */
export const getRatingColor = (rating) => {
  if (rating >= 7) return "from-green-500 to-emerald-600";
  if (rating >= 5.5) return "from-orange-400 to-amber-500";
  return "from-red-500 to-rose-600";
};

/**
 * Get rating background color
 * @param {number} rating - Rating value (0-10)
 * @returns {string} Tailwind background class
 */
export const getRatingBg = (rating) => {
  if (rating >= 7) return "bg-green-500/20 border-green-500/30";
  if (rating >= 5.5) return "bg-orange-500/20 border-orange-500/30";
  return "bg-red-500/20 border-red-500/30";
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Generate image URL from TMDB path
 * @param {string} path - Image path
 * @param {string} size - Image size
 * @returns {string} Full image URL
 */
export const getImageUrl = (path, size = "w500") => {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

/**
 * Check if image exists
 * @param {string} url - Image URL
 * @returns {Promise<boolean>} True if image exists
 */
export const imageExists = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Local storage helpers with error handling
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error getting item ${key}:`, error);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting item ${key}:`, error);
      return false;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item ${key}:`, error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("Error clearing storage:", error);
      return false;
    }
  },
};

/**
 * Scroll to top smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Check if user is at bottom of page
 * @param {number} threshold - Distance from bottom in px
 * @returns {boolean} True if at bottom
 */
export const isAtBottom = (threshold = 100) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  return scrollHeight - scrollTop - clientHeight < threshold;
};



