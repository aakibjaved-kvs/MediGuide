/**
 * theme.js - Handles light/dark theme switching and persistence.
 */

(function () {
  // Initialize theme as early as possible to prevent flashing
  const STORAGE_KEY = 'mediguide_theme';
  
  function getThemePreference() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    const body = document.body;
    if (!body) return;

    // Add transitioning class if this is not the initial load to trigger smooth fade
    const isInitial = !body.dataset.themeInitialized;
    if (!isInitial) {
      body.classList.add('theme-transitioning');
    } else {
      body.dataset.themeInitialized = 'true';
    }

    if (theme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    
    // Remove transitioning class after the transition finishes (e.g. 600ms)
    if (!isInitial) {
      setTimeout(() => {
        body.classList.remove('theme-transitioning');
      }, 600);
    }
    
    // Dispatch custom event for parts of the UI that might need to redraw (e.g. charts, icons)
    window.dispatchEvent(new CustomEvent('themechanged', { detail: { theme } }));
  }

  // Set initial theme
  const currentTheme = getThemePreference();
  
  // Wait for DOM to be ready before applying class to body
  // to ensure body exists (since theme.js is loaded in head)
  if (document.body) {
    applyTheme(currentTheme);
  } else {
    document.addEventListener('DOMContentLoaded', () => applyTheme(currentTheme));
  }

  // Export functions to global scope
  window.ThemeManager = {
    getTheme: getThemePreference,
    
    toggleTheme: function () {
      const isDark = document.body.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem(STORAGE_KEY, newTheme);
      return newTheme;
    },
    
    setTheme: function (theme) {
      applyTheme(theme);
      localStorage.setItem(STORAGE_KEY, theme);
    }
  };
})();
