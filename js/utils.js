/**
 * Utility Functions - Shared Across All Pages
 */

/**
 * Date and Time Functions
 */
function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
}

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  return Math.floor(diff / 86400) + 'd ago';
}

function getGreeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
}

/**
 * Data Formatting
 */
function formatNumber(num) {
  return new Intl.NumberFormat('en-US').format(num);
}

function calculatePercentage(current, total) {
  return total === 0 ? 0 : Math.round((current / total) * 100);
}

/**
 * DOM Utilities
 */
function showToast(message, duration = 3000) {
  const toast = document.getElementById('save-toast');
  if (!toast) return;
  
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.pointerEvents = 'auto';
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.pointerEvents = 'none';
  }, duration);
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Language Utilities
 */
const langFlags = {
  en: '🇺🇸', es: '🇪🇸', fr: '🇫🇷', de: '🇩🇪',
  it: '🇮🇹', pt: '🇧🇷', ru: '🇷🇺', zh: '🇨🇳',
  ja: '🇯🇵', ar: '🇸🇦', id: '🇮🇩'
};

function getLangFlag(langCode) {
  return langFlags[langCode] || '🌐';
}

/**
 * Export for use in other files
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    formatDate,
    timeAgo,
    getGreeting,
    formatNumber,
    calculatePercentage,
    showToast,
    debounce,
    throttle,
    getLangFlag
  };
}
