/**
 * app.js - SPA Router and Page Renderer for MediGuide.
 * Handles hash-based routing, templates, and UI interactions.
 */

const App = {
  // Application State
  state: {
    currentRoute: '',
    searchQuery: '',
    categoryFilter: 'all'
  },

  // Initialize the Application
  init: function () {
    // Listen for hash changes and popstate (back/forward navigation)
    window.addEventListener('hashchange', () => this.handleRouting());
    window.addEventListener('popstate', () => this.handleRouting());
    window.addEventListener('load', () => this.handleRouting());
    
    // Set up global elements and listeners
    this.setupGlobalEvents();
    this.setupHeaderSearch();
    this.renderFooterDisclaimer();
  },

  // Route handler
  handleRouting: function () {
    const hash = decodeURIComponent(window.location.hash || '#/');
    this.state.currentRoute = hash;
    
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Close mobile menu if open
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) navMenu.classList.remove('mobile-open');

    // Route matching
    if (hash === '#/') {
      this.renderHome();
    } else if (hash.startsWith('#/diseases/')) {
      const id = hash.split('#/diseases/')[1].split('?')[0];
      this.renderDiseaseDetail(id);
    } else if (hash.startsWith('#/diseases')) {
      this.renderDiseases();
    } else if (hash.startsWith('#/categories/')) {
      const category = hash.split('#/categories/')[1].split('?')[0];
      this.renderCategoryPage(category);
    } else if (hash === '#/first-aid') {
      this.renderFirstAid();
    } else if (hash === '#/healthy-living') {
      this.renderHealthyLiving();
    } else if (hash === '#/medicines') {
      this.renderMedicines();
    } else if (hash === '#/faq') {
      this.renderFAQ();
    } else {
      // Fallback to home
      window.location.hash = '#/';
    }

    this.updateActiveNav();
  },

  // Set up global event listeners (mobile hamburger, theme, etc.)
  setupGlobalEvents: function () {
    // Mobile Hamburger Menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    if (hamburgerBtn && navMenu) {
      hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-open');
      });
    }

    // Global Theme Toggle Click
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const newTheme = window.ThemeManager.toggleTheme();
        this.updateThemeIcon(newTheme);
      });
      // Initial icon state
      this.updateThemeIcon(window.ThemeManager.getTheme());
    }

    // Logo click goes home
    const logo = document.getElementById('logo-container');
    if (logo) {
      logo.addEventListener('click', () => {
        window.location.hash = '#/';
      });
    }

    // Close mega menu dropdown when a link inside it is clicked (UX fix)
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu) {
      megaMenu.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
          // Temporarily hide to close dropdown, then restore for hover
          megaMenu.style.visibility = 'hidden';
          megaMenu.style.opacity = '0';
          megaMenu.style.transform = 'translateY(8px)';
          setTimeout(() => {
            megaMenu.style.visibility = '';
            megaMenu.style.opacity = '';
            megaMenu.style.transform = '';
          }, 300);
        }
      });
    }
  },

  // Update theme toggle button icon
  updateThemeIcon: function (theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.innerHTML = `<path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4 5.39 5.39 0 0 1 2.26-4.4C12.92 3.04 12.46 3 12 3Z"/>`; // Moon
      } else {
        themeIcon.innerHTML = `<path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM3.22 4.64a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42Zm13.44 13.44a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm16 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM4.64 16.78a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0Zm13.44-13.44a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.42l.7-.7a1 1 0 0 1 1.42 0Z"/>`; // Sun
      }
    }
  },

  // Highlight current active tab in navbar
  updateActiveNav: function () {
    const links = document.querySelectorAll('.nav-link');
    const hash = this.state.currentRoute;
    
    links.forEach(link => {
      const linkHash = link.getAttribute('href');
      if (hash === linkHash || (linkHash === '#/diseases' && (hash.startsWith('#/diseases') || hash.startsWith('#/categories/')))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  // Search input handling in the navbar header
  setupHeaderSearch: function () {
    const input = document.getElementById('header-search-input');
    const suggestions = document.getElementById('header-search-suggestions');
    const clearBtn = document.getElementById('header-search-clear');
    
    if (!input || !suggestions) return;

    let selectedIndex = -1;
    let currentResults = [];

    // Helper to hide suggestions
    const hideSuggestions = () => {
      setTimeout(() => {
        suggestions.style.display = 'none';
      }, 200); // Small delay to allow click events to register
    };

    // Input events
    input.addEventListener('input', Utils.debounce((e) => {
      const val = e.target.value;
      if (val.length > 0) {
        clearBtn.style.display = 'flex';
      } else {
        clearBtn.style.display = 'none';
      }

      if (val.trim().length < 2) {
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
        return;
      }

      // Query local search engine
      currentResults = SearchEngine.search(val).slice(0, 6); // Top 6 results
      
      if (currentResults.length === 0) {
        suggestions.innerHTML = `<div class="search-suggestion-item" style="cursor: default;">No results found for "${Utils.escapeHTML(val)}"</div>`;
      } else {
        suggestions.innerHTML = currentResults.map((res, idx) => `
          <div class="search-suggestion-item" data-id="${res.item.id}" data-index="${idx}">
            <div class="search-suggestion-info">
              <span class="search-suggestion-title">${SearchEngine.highlightText(res.item.title, val)}</span>
              <span class="search-suggestion-category">${res.item.category}</span>
            </div>
            <span class="badge badge-${res.item.category}">${res.item.category}</span>
          </div>
        `).join('');
      }
      suggestions.style.display = 'block';
      selectedIndex = -1;
    }, 200));

    // Clear Button
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      suggestions.innerHTML = '';
      suggestions.style.display = 'none';
      input.focus();
    });

    // Suggestion click
    suggestions.addEventListener('click', (e) => {
      const item = e.target.closest('.search-suggestion-item');
      if (item && item.dataset.id) {
        window.location.hash = `#/diseases/${item.dataset.id}`;
        input.value = '';
        clearBtn.style.display = 'none';
        hideSuggestions();
      }
    });

    // Keyboard Navigation
    input.addEventListener('keydown', (e) => {
      const items = suggestions.querySelectorAll('.search-suggestion-item');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        this.highlightSuggestion(items, selectedIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        this.highlightSuggestion(items, selectedIndex);
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          const targetId = items[selectedIndex].dataset.id;
          if (targetId) {
            window.location.hash = `#/diseases/${targetId}`;
            input.value = '';
            clearBtn.style.display = 'none';
            hideSuggestions();
          }
        }
      } else if (e.key === 'Escape') {
        hideSuggestions();
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2 && suggestions.children.length > 0) {
        suggestions.style.display = 'block';
      }
    });

    input.addEventListener('blur', hideSuggestions);
  },

  highlightSuggestion: function (items, index) {
    items.forEach(item => item.classList.remove('focused'));
    if (index >= 0 && index < items.length) {
      items[index].classList.add('focused');
      items[index].scrollIntoView({ block: 'nearest' });
    }
  },

  // Dynamic injection of persistent medical disclaimer
  renderFooterDisclaimer: function () {
    const disclaimerBox = document.getElementById('footer-disclaimer');
    if (disclaimerBox) {
      disclaimerBox.innerHTML = `
        <div class="footer-disclaimer-panel">
          <span class="footer-disclaimer-icon">⚠️</span>
          <div class="footer-disclaimer-text">
            <strong>Medical Disclaimer:</strong> The content provided on MediGuide, including text, graphics, search results, and RAG chatbot responses, is for <strong>educational and informational purposes only</strong>. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </div>
        </div>
      `;
    }
  },

  /* ==================== PAGE RENDERERS ==================== */

  // 1. HOME PAGE VIEW
  renderHome: function () {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';
    mainContent.innerHTML = `
      <div class="home-hero-section">
        <h1 style="font-size: 2.75rem; margin-bottom: var(--spacing-s); font-weight: 500;">Your Trusted Medical Guide</h1>
        <p style="font-size: 1.125rem; margin-bottom: var(--spacing-xl);">Accurate, plain-language medical education and instant RAG-powered guidance.</p>
        
        <!-- Big Hero Search -->
        <div class="input-container" style="max-width: 600px; margin: 0 auto;">
          <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="home-search-input" class="input-field" placeholder="Search diseases, symptoms, treatments..." style="height: 48px; padding-left: 44px; font-size: 1.1rem; border-radius: var(--radius-large);">
          <button id="home-search-clear" class="input-clear-btn" style="right: 14px; height: 24px; width: 24px; display: none;">✕</button>
          <div id="home-search-suggestions" class="search-suggestions" style="border-radius: var(--radius-large);"></div>
        </div>

        <div style="margin-top: var(--spacing-l); display: flex; flex-wrap: wrap; justify-content: center; gap: var(--spacing-xs); align-items: center;">
          <span style="font-size: 0.875rem; color: var(--color-text-tertiary);">Try asking:</span>
          <button class="btn btn-secondary btn-pill home-suggested-q">What are the symptoms of Type 2 Diabetes?</button>
          <button class="btn btn-secondary btn-pill home-suggested-q">How is Malaria prevented?</button>
          <button class="btn btn-secondary btn-pill home-suggested-q">First aid step-by-step for Burns</button>
        </div>
      </div>

      <!-- Quick Access Categories Grid -->
      <div style="margin-top: var(--spacing-xxl);">
        <h2 style="text-align: center; margin-bottom: var(--spacing-xl); font-weight: 500;">Browse by Category</h2>
        <div class="home-grid">
          <div class="card hover-lift" onclick="window.location.hash='#/categories/infectious'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
              <span style="font-size: 2rem;">🦠</span>
              <span class="badge badge-infectious">Infectious</span>
            </div>
            <h3 style="margin-bottom: var(--spacing-xs);">Infectious Diseases</h3>
            <p>Fever, common cold, flu, COVID-19, dengue, malaria, tuberculosis, and more contagions.</p>
          </div>

          <div class="card hover-lift" onclick="window.location.hash='#/categories/chronic'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
              <span style="font-size: 2rem;">❤️</span>
              <span class="badge badge-chronic">Chronic</span>
            </div>
            <h3 style="margin-bottom: var(--spacing-xs);">Chronic Conditions</h3>
            <p>Long-term health management including Diabetes, Hypertension, Asthma, Arthritis, and Obesity.</p>
          </div>

          <div class="card hover-lift" onclick="window.location.hash='#/categories/digestive'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
              <span style="font-size: 2rem;">🍎</span>
              <span class="badge badge-digestive">Digestive Health</span>
            </div>
            <h3 style="margin-bottom: var(--spacing-xs);">Digestive & Gut</h3>
            <p>Acid Reflux / GERD, food poisoning, stomach pain, constipation, and diarrhoea management.</p>
          </div>

          <div class="card hover-lift" onclick="window.location.hash='#/categories/mental'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
              <span style="font-size: 2rem;">🧠</span>
              <span class="badge badge-mental">Mental Health</span>
            </div>
            <h3 style="margin-bottom: var(--spacing-xs);">Neurological & Mental</h3>
            <p>Understanding Migraines, managing Anxiety, dealing with Depression, and resolving Insomnia.</p>
          </div>

          <div class="card hover-lift" onclick="window.location.hash='#/categories/skin'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
              <span style="font-size: 2rem;">🛡️</span>
              <span class="badge badge-skin">Skin / Other</span>
            </div>
            <h3 style="margin-bottom: var(--spacing-xs);">Skin & Integumentary</h3>
            <p>Common issues like Acne breakouts, dry itchy Eczema, and Urinary Tract Infections (UTIs).</p>
          </div>

          <div class="card hover-lift" onclick="window.location.hash='#/first-aid'">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
              <span style="font-size: 2rem;">🚨</span>
              <span class="badge badge-other" style="background-color: var(--color-danger-bg); color: var(--color-danger);">Emergency</span>
            </div>
            <h3 style="margin-bottom: var(--spacing-xs);">First Aid Guide</h3>
            <p>Step-by-step instructions for CPR, choking, burns, bleeding, poisoning, and heat emergencies.</p>
          </div>
        </div>
      </div>
    `;

    // Hook up home page search input
    this.setupHomeSearch();
    this.setupHomeSuggestedQuestions();
  },

  setupHomeSearch: function () {
    const input = document.getElementById('home-search-input');
    const suggestions = document.getElementById('home-search-suggestions');
    const clearBtn = document.getElementById('home-search-clear');
    
    if (!input || !suggestions) return;

    let selectedIndex = -1;
    let currentResults = [];

    const hideSuggestions = () => {
      setTimeout(() => {
        suggestions.style.display = 'none';
      }, 200);
    };

    input.addEventListener('input', Utils.debounce((e) => {
      const val = e.target.value;
      if (val.length > 0) {
        clearBtn.style.display = 'flex';
      } else {
        clearBtn.style.display = 'none';
      }

      if (val.trim().length < 2) {
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
        return;
      }

      currentResults = SearchEngine.search(val).slice(0, 6);
      
      if (currentResults.length === 0) {
        suggestions.innerHTML = `<div class="search-suggestion-item" style="cursor: default;">No results found for "${Utils.escapeHTML(val)}"</div>`;
      } else {
        suggestions.innerHTML = currentResults.map((res, idx) => `
          <div class="search-suggestion-item" data-id="${res.item.id}" data-index="${idx}">
            <div class="search-suggestion-info">
              <span class="search-suggestion-title">${SearchEngine.highlightText(res.item.title, val)}</span>
              <span class="search-suggestion-category">${res.item.category}</span>
            </div>
            <span class="badge badge-${res.item.category}">${res.item.category}</span>
          </div>
        `).join('');
      }
      suggestions.style.display = 'block';
      selectedIndex = -1;
    }, 200));

    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.style.display = 'none';
      suggestions.innerHTML = '';
      suggestions.style.display = 'none';
      input.focus();
    });

    suggestions.addEventListener('click', (e) => {
      const item = e.target.closest('.search-suggestion-item');
      if (item && item.dataset.id) {
        window.location.hash = `#/diseases/${item.dataset.id}`;
        hideSuggestions();
      }
    });

    input.addEventListener('keydown', (e) => {
      const items = suggestions.querySelectorAll('.search-suggestion-item');
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        this.highlightSuggestion(items, selectedIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        this.highlightSuggestion(items, selectedIndex);
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          const targetId = items[selectedIndex].dataset.id;
          if (targetId) {
            window.location.hash = `#/diseases/${targetId}`;
            hideSuggestions();
          }
        }
      } else if (e.key === 'Escape') {
        hideSuggestions();
      }
    });

    input.addEventListener('focus', () => {
      if (input.value.trim().length >= 2 && suggestions.children.length > 0) {
        suggestions.style.display = 'block';
      }
    });

    input.addEventListener('blur', hideSuggestions);
  },

  // Click suggested home questions to open chatbot
  setupHomeSuggestedQuestions: function () {
    const btns = document.querySelectorAll('.home-suggested-q');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.textContent;
        // Open chatbot panel if global Chatbot exists
        if (window.ChatbotUI) {
          window.ChatbotUI.openChatPanel();
          window.ChatbotUI.sendUserQuery(query);
        }
      });
    });
  },

  // 2. DISEASES CATALOG VIEW
  renderDiseases: function () {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';
    
    // Parse category filter from URL search params if present (e.g. #/diseases?cat=chronic)
    const urlParts = this.state.currentRoute.split('?');
    let categoryParam = 'all';
    if (urlParts.length > 1) {
      const params = new URLSearchParams(urlParts[1]);
      categoryParam = params.get('cat') || 'all';
    }
    this.state.categoryFilter = categoryParam;

    mainContent.innerHTML = `
      <div class="page-header">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <span>Diseases A–Z</span>
        </div>
        <h1>Diseases A–Z</h1>
        <p>Comprehensive health library with symptoms, causes, prevention, and treatment guides.</p>
      </div>

      <!-- Filter Controls -->
      <div class="filter-pills-row">
        <a href="#/diseases" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'all' ? 'active' : ''}">All</a>
        <a href="#/categories/infectious" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'infectious' ? 'active' : ''}">Infectious</a>
        <a href="#/categories/chronic" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'chronic' ? 'active' : ''}">Chronic</a>
        <a href="#/categories/digestive" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'digestive' ? 'active' : ''}">Digestive</a>
        <a href="#/categories/mental" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'mental' ? 'active' : ''}">Neurological & Mental</a>
        <a href="#/categories/skin" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'skin' ? 'active' : ''}">Skin</a>
        <a href="#/categories/other" class="btn btn-secondary btn-pill filter-pill ${categoryParam === 'other' ? 'active' : ''}">Other</a>
      </div>

      <!-- Search inside catalog -->
      <div class="input-container" style="max-width: 100%; margin-bottom: var(--spacing-xl);">
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="catalog-search-input" class="input-field" placeholder="Filter this list by title or keyword...">
      </div>

      <!-- Disease Cards Grid -->
      <div id="disease-cards-grid" class="home-grid" style="margin-top: 0;">
        <!-- Injected by JS -->
      </div>
    `;

    this.filterCatalogCards();
    this.setupCatalogSearch();
  },

  filterCatalogCards: function (searchText = '') {
    const grid = document.getElementById('disease-cards-grid');
    if (!grid || !window.knowledgeBase) return;

    const cat = this.state.categoryFilter;
    const query = searchText.trim().toLowerCase();
    const normalizedQuery = Utils.normalizeText(query);
    
    // Filter the knowledge base array
    const filtered = window.knowledgeBase.filter(item => {
      // Category filter
      const matchesCat = (cat === 'all' || item.category === cat);
      // Search filter using normalization
      const matchesSearch = !query || 
                            Utils.normalizeText(item.title).includes(normalizedQuery) || 
                            item.keywords.some(kw => Utils.normalizeText(kw).includes(normalizedQuery)) ||
                            Utils.normalizeText(item.summary).includes(normalizedQuery);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xxl) 0;">
          <span style="font-size: 3rem;">🔍</span>
          <h3 style="margin-top: var(--spacing-m); color: var(--color-text-secondary);">No matching conditions found</h3>
          <p>Try refining your search terms or choosing a different category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <div class="card hover-lift" onclick="window.location.hash='#/diseases/${item.id}'">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--spacing-m);">
          <span class="badge badge-${item.category}">${item.category}</span>
        </div>
        <h3 style="margin-bottom: var(--spacing-xs);">${item.title}</h3>
        <p style="font-size: 0.9rem; line-height: 1.5; margin-bottom: var(--spacing-m); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${item.summary}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: var(--spacing-m);">
          ${item.keywords.slice(0, 3).map(kw => `<span style="font-size: 0.75rem; background-color: var(--color-border); padding: 2px 6px; border-radius: var(--radius-small); color: var(--color-text-secondary);">${kw}</span>`).join('')}
        </div>
        <div class="card-footer" style="margin-top: auto; padding-top: var(--spacing-s); border-top: 1px solid var(--color-border); justify-content: space-between; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--color-text-tertiary);">Educational Guide</span>
          <span style="color: var(--color-brand); font-weight: 500; font-size: 0.875rem; display: flex; align-items: center; gap: 4px;">Read Guide ➔</span>
        </div>
      </div>
    `).join('');
  },

  setupCatalogSearch: function () {
    const input = document.getElementById('catalog-search-input');
    if (input) {
      input.addEventListener('input', Utils.debounce((e) => {
        this.filterCatalogCards(e.target.value);
      }, 150));
    }
  },

  renderCategoryPage: function (category) {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';

    const categoryNames = {
      'infectious': 'Infectious Diseases',
      'chronic': 'Chronic Conditions',
      'digestive': 'Digestive & Gut Health',
      'mental': 'Neurological & Mental Health',
      'skin': 'Skin Conditions',
      'other': 'Other Conditions'
    };

    const categoryDescriptions = {
      'infectious': 'Educational guides on viral, bacterial, and parasitic infections including symptoms, treatments, and prevention.',
      'chronic': 'Long-term health conditions requiring continuous management, lifestyle adjustments, and care guides.',
      'digestive': 'Gastrointestinal and gut health guides covering common disorders, symptoms, and dietary management.',
      'mental': 'Guides on mental wellness, sleep hygiene, and common neurological conditions.',
      'skin': 'Guides on dermatological issues, symptoms, skin care, and treatment options.',
      'other': 'Miscellaneous medical conditions and educational health resources.'
    };

    const name = categoryNames[category] || 'Medical Category';
    const description = categoryDescriptions[category] || 'Educational health guide resources.';

    mainContent.innerHTML = `
      <div class="page-header">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/diseases">Diseases</a>
          <span class="breadcrumbs-separator">/</span>
          <span>${name}</span>
        </div>
        <h1>${name}</h1>
        <p>${description}</p>
      </div>

      <!-- Filter Controls (Links to dedicated category pages) -->
      <div class="filter-pills-row">
        <a href="#/diseases" class="btn btn-secondary btn-pill filter-pill">All A–Z</a>
        <a href="#/categories/infectious" class="btn btn-secondary btn-pill filter-pill ${category === 'infectious' ? 'active' : ''}">Infectious</a>
        <a href="#/categories/chronic" class="btn btn-secondary btn-pill filter-pill ${category === 'chronic' ? 'active' : ''}">Chronic</a>
        <a href="#/categories/digestive" class="btn btn-secondary btn-pill filter-pill ${category === 'digestive' ? 'active' : ''}">Digestive</a>
        <a href="#/categories/mental" class="btn btn-secondary btn-pill filter-pill ${category === 'mental' ? 'active' : ''}">Neurological & Mental</a>
        <a href="#/categories/skin" class="btn btn-secondary btn-pill filter-pill ${category === 'skin' ? 'active' : ''}">Skin</a>
        <a href="#/categories/other" class="btn btn-secondary btn-pill filter-pill ${category === 'other' ? 'active' : ''}">Other</a>
      </div>

      <!-- Search inside this category -->
      <div class="input-container" style="max-width: 100%; margin-bottom: var(--spacing-xl);">
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="category-page-search-input" class="input-field" placeholder="Search within ${name.toLowerCase()}...">
      </div>

      <!-- Disease Cards Grid -->
      <div id="disease-cards-grid" class="home-grid" style="margin-top: 0;">
        <!-- Injected by JS -->
      </div>
    `;

    this.state.categoryFilter = category;
    this.filterCatalogCards();
    this.setupCategoryPageSearch();
  },

  setupCategoryPageSearch: function () {
    const input = document.getElementById('category-page-search-input');
    if (input) {
      input.addEventListener('input', Utils.debounce((e) => {
        this.filterCatalogCards(e.target.value);
      }, 150));
    }
  },

  // 3. DISEASE DETAIL PAGE VIEW (THE 11-SECTION TEMPLATE)
  renderDiseaseDetail: function (id) {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';

    if (!window.knowledgeBase) {
      mainContent.innerHTML = `<p>Loading knowledge base...</p>`;
      return;
    }

    const item = window.knowledgeBase.find(d => d.id === id);
    if (!item) {
      mainContent.innerHTML = `
        <div style="text-align: center; padding: var(--spacing-xxl) 0;">
          <h1>Condition Not Found</h1>
          <p>The medical condition you are looking for does not exist in our guide yet.</p>
          <a href="#/diseases" class="btn btn-primary" style="margin-top: var(--spacing-m);">Back to Catalog</a>
        </div>
      `;
      return;
    }

    // Resolve related conditions from IDs to link elements
    const relatedLinks = item.content.relatedConditions.map(relId => {
      const relItem = window.knowledgeBase.find(d => d.id === relId);
      if (relItem) {
        return `<a href="#/diseases/${relId}" class="btn btn-secondary btn-pill" style="margin-bottom: 4px;">${relItem.title}</a>`;
      }
      return '';
    }).join(' ');

    mainContent.innerHTML = `
      <div class="page-header" style="margin-bottom: var(--spacing-l);">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <a href="#/diseases">Diseases</a>
          <span class="breadcrumbs-separator">/</span>
          <span>${item.title}</span>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-m); flex-wrap: wrap;">
          <h1 style="margin-bottom: 0;">${item.title}</h1>
          <span class="badge badge-${item.category}">${item.category}</span>
        </div>
        <p style="font-size: 1.1rem; margin-top: var(--spacing-s); max-width: 900px; line-height: 1.6;">${item.summary}</p>
      </div>

      <div class="disease-detail-layout">
        <!-- Left Side: Main Educational Content -->
        <article class="card" style="padding: var(--spacing-xxl); transform: none; box-shadow: var(--shadow-resting); border-radius: var(--radius-large);">
          
          <!-- 1. Overview -->
          <section id="section-overview" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Overview</h2>
            <p>${item.content.overview}</p>
          </section>

          <!-- 2. Symptoms -->
          <section id="section-symptoms" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Symptoms</h2>
            <ul style="padding-left: var(--spacing-l); margin-bottom: var(--spacing-m); color: var(--color-text-secondary);">
              ${item.content.symptoms.map(sym => `<li style="margin-bottom: var(--spacing-xxs);">${sym}</li>`).join('')}
            </ul>
          </section>

          <!-- 3. Causes & Risk Factors -->
          <section id="section-causes" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Causes & Risk Factors</h2>
            <p style="margin-bottom: var(--spacing-s);">${item.content.causes}</p>
            <h4 style="margin-bottom: var(--spacing-xs); font-weight: 500;">Major Risk Factors:</h4>
            <ul style="padding-left: var(--spacing-l); color: var(--color-text-secondary);">
              ${item.content.riskFactors.map(risk => `<li style="margin-bottom: var(--spacing-xxs);">${risk}</li>`).join('')}
            </ul>
          </section>

          <!-- 4. Complications -->
          <section id="section-complications" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Complications</h2>
            <p>${item.content.complications}</p>
          </section>

          <!-- 5. Diagnosis -->
          <section id="section-diagnosis" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Diagnosis</h2>
            <p>${item.content.diagnosis}</p>
          </section>

          <!-- 6. Treatment & Medicines -->
          <section id="section-treatment" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Treatment & Medicines</h2>
            <p>${item.content.treatment}</p>
          </section>

          <!-- Cure & Management Plan Section -->
          <section id="section-cure" class="detail-section" style="margin-bottom: var(--spacing-xl); padding: var(--spacing-l); border-radius: var(--radius-large); background-color: ${item.cureStatus === 'Curable' ? 'var(--color-success-bg)' : 'var(--color-info-bg)'}; border: 1px solid ${item.cureStatus === 'Curable' ? 'rgba(16, 124, 65, 0.3)' : 'rgba(0, 120, 212, 0.3)'};">
            <div style="display: flex; align-items: center; gap: var(--spacing-s); margin-bottom: var(--spacing-s);">
              <span style="font-size: 1.5rem;">${item.cureStatus === 'Curable' ? '🟢' : '🔵'}</span>
              <div>
                <h3 style="margin-bottom: 0; font-weight: 600; color: ${item.cureStatus === 'Curable' ? 'var(--color-success)' : 'var(--color-brand)'};">
                  ${item.cureStatus === 'Curable' ? 'Curable Condition' : 'Chronic Management Plan'}
                </h3>
                <span style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase; font-weight: 600;">
                  ${item.cureStatus === 'Curable' ? 'This condition can be fully cured' : 'Long-term management required'}
                </span>
              </div>
            </div>
            <h4 style="margin-bottom: var(--spacing-xs); font-weight: 500; color: var(--color-text-primary);">Essential Steps to ${item.cureStatus === 'Curable' ? 'Cure' : 'Manage'}:</h4>
            <ol style="padding-left: var(--spacing-l); color: var(--color-text-secondary); line-height: 1.6;">
              ${item.stepsToCure.map(step => `<li style="margin-bottom: var(--spacing-xxs);">${step}</li>`).join('')}
            </ol>
          </section>

          <!-- 7. Home Care -->
          <section id="section-homecare" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Home Care</h2>
            <p>${item.content.homeCare}</p>
          </section>

          <!-- 8. Prevention -->
          <section id="section-prevention" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">Prevention</h2>
            <p>${item.content.prevention}</p>
          </section>

          <!-- 9. When to See a Doctor -->
          <section id="section-doctor" class="detail-section" style="margin-bottom: var(--spacing-xl);">
            <h2 style="border-bottom: 1px solid var(--color-border); padding-bottom: var(--spacing-xs); font-weight: 500;">When to See a Doctor</h2>
            <p>${item.content.whenToSeeDoctor}</p>
          </section>

          <!-- 10. Emergency Warning Signs (Red Highlight box) -->
          <section id="section-emergency" class="detail-section">
            <div class="emergency-signs-box">
              <h3 class="emergency-signs-title">
                <span>🚨</span> Red Flag Emergency Warning Signs
              </h3>
              <p style="color: var(--color-danger); font-weight: 500; margin-bottom: var(--spacing-s); font-size: 0.95rem;">
                If you or someone else develops any of the following symptoms, seek immediate emergency medical services (e.g., call 911 or 112):
              </p>
              <ul style="padding-left: var(--spacing-l); color: var(--color-text-primary);">
                ${item.content.emergencySigns.map(sign => `<li style="margin-bottom: var(--spacing-xs); font-weight: 500;">${sign}</li>`).join('')}
              </ul>
            </div>
          </section>
        </article>

        <!-- Right Side: Sidebar Navigation (Sticky) -->
        <aside class="sidebar">
          <div class="card" style="padding: var(--spacing-m); transform: none; box-shadow: var(--shadow-resting);">
            <h4 style="margin-bottom: var(--spacing-s); font-weight: 500; text-transform: uppercase; font-size: 0.8rem; color: var(--color-text-tertiary);">On This Page</h4>
            <ul class="sidebar-nav-list">
              <li class="sidebar-nav-item"><a href="#section-overview" class="sidebar-nav-link active">Overview</a></li>
              <li class="sidebar-nav-item"><a href="#section-symptoms" class="sidebar-nav-link">Symptoms</a></li>
              <li class="sidebar-nav-item"><a href="#section-causes" class="sidebar-nav-link">Causes & Risk Factors</a></li>
              <li class="sidebar-nav-item"><a href="#section-complications" class="sidebar-nav-link">Complications</a></li>
              <li class="sidebar-nav-item"><a href="#section-diagnosis" class="sidebar-nav-link">Diagnosis</a></li>
              <li class="sidebar-nav-item"><a href="#section-treatment" class="sidebar-nav-link">Treatment</a></li>
              <li class="sidebar-nav-item"><a href="#section-cure" class="sidebar-nav-link" style="color: var(--color-brand); font-weight: 500;">Cure & Management</a></li>
              <li class="sidebar-nav-item"><a href="#section-homecare" class="sidebar-nav-link">Home Care</a></li>
              <li class="sidebar-nav-item"><a href="#section-prevention" class="sidebar-nav-link">Prevention</a></li>
              <li class="sidebar-nav-item"><a href="#section-doctor" class="sidebar-nav-link">When to See Doctor</a></li>
              <li class="sidebar-nav-item"><a href="#section-emergency" class="sidebar-nav-link" style="color: var(--color-danger); font-weight: 500;">Emergency Signs</a></li>
            </ul>
          </div>

          <!-- Clinical Reference Card -->
          <div class="card" style="padding: var(--spacing-m); transform: none; box-shadow: var(--shadow-resting); border-color: rgba(16, 124, 65, 0.25); background-color: var(--color-surface-hover); margin-bottom: var(--spacing-m);">
            <h4 style="margin-bottom: var(--spacing-s); font-weight: 600; text-transform: uppercase; font-size: 0.8rem; color: var(--color-brand); display: flex; align-items: center; gap: 6px;">
              <span>🩺</span> Clinical Reference
            </h4>
            <div style="display: flex; flex-direction: column; gap: var(--spacing-s); font-size: 0.875rem;">
              <div>
                <strong style="color: var(--color-text-primary); display: block; margin-bottom: 4px;">Specialist to Consult:</strong>
                <span class="badge badge-chronic" style="text-transform: none; font-size: 0.8rem; font-weight: 500; display: inline-flex; gap: 4px; padding: 4px 10px;">
                  👨‍⚕️ ${item.specialist}
                </span>
              </div>
              <div>
                <strong style="color: var(--color-text-primary); display: block; margin-bottom: 4px;">Estimated Recovery:</strong>
                <span class="badge badge-other" style="text-transform: none; font-size: 0.8rem; font-weight: 500; display: inline-flex; gap: 4px; padding: 4px 10px;">
                  ⏱️ ${item.recoveryTime}
                </span>
              </div>
              <div>
                <strong style="color: var(--color-text-primary); display: block; margin-bottom: 6px;">Common Diagnostic Tests:</strong>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${item.diagnosticTests.map(test => `
                    <span class="badge badge-mental" style="text-transform: none; font-size: 0.775rem; font-weight: 500; padding: 4px 8px; border-radius: var(--radius-medium); white-space: normal; text-align: left; line-height: 1.3;">
                      🔬 ${test}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- 11. Related Conditions -->
          <div class="card" style="padding: var(--spacing-m); transform: none; box-shadow: var(--shadow-resting);">
            <h4 style="margin-bottom: var(--spacing-s); font-weight: 500; text-transform: uppercase; font-size: 0.8rem; color: var(--color-text-tertiary);">Related Conditions</h4>
            <div style="display: flex; flex-direction: column; gap: var(--spacing-xs);">
              ${relatedLinks || '<span style="font-size: 0.875rem; color: var(--color-text-tertiary);">No related conditions.</span>'}
            </div>
          </div>
          
          <!-- Quick Chat Prompt -->
          <div class="card" style="padding: var(--spacing-m); transform: none; background-color: var(--color-brand-light); border-color: rgba(0, 120, 212, 0.2); box-shadow: var(--shadow-resting);">
            <h4 style="margin-bottom: var(--spacing-xs); font-weight: 600; color: var(--color-brand); font-size: 0.9rem;">Ask MediGuide AI</h4>
            <p style="font-size: 0.8125rem; line-height: 1.4; color: var(--color-text-secondary);">Have questions about ${item.title}? Open the chatbot to ask now.</p>
            <button id="detail-ask-btn" class="btn btn-primary" style="width: 100%; height: 32px; font-size: 0.8rem; margin-top: var(--spacing-s);">Ask about ${item.title}</button>
          </div>
        </aside>
      </div>
    `;

    this.setupDetailSidebarScrollspy();
    this.setupDetailAskButton(item.title);
  },

  // Sidebar anchor links scrolling & active class tracking (Scrollspy)
  setupDetailSidebarScrollspy: function () {
    const links = document.querySelectorAll('.sidebar-nav-link');
    const sections = document.querySelectorAll('.detail-section');
    
    // Smooth scrolling to section anchors
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const offsetPosition = targetEl.getBoundingClientRect().top + window.scrollY - 84; // Account for navbar height + gap
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Simple scroll handler for highlighting active section in sidebar
    const onScroll = () => {
      let scrollPos = window.scrollY + 120; // offset to trigger active state earlier
      
      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
          links.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    // Cleanup event listener when navigating away
    const checkCleanup = () => {
      const decodedHash = decodeURIComponent(window.location.hash || '#/');
      if (!decodedHash.startsWith('#/diseases/')) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('hashchange', checkCleanup);
      }
    };
    window.addEventListener('hashchange', checkCleanup);
  },

  setupDetailAskButton: function (title) {
    const btn = document.getElementById('detail-ask-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        if (window.ChatbotUI) {
          window.ChatbotUI.openChatPanel();
          window.ChatbotUI.sendUserQuery(`Tell me more about ${title}`);
        }
      });
    }
  },

  // 4. FIRST AID EMERGENCIES VIEW
  renderFirstAid: function () {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';
    mainContent.innerHTML = `
      <div class="page-header">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <span>First Aid</span>
        </div>
        <h1>First Aid Emergency Guide</h1>
        <p>Immediate, step-by-step guidance for common life-threatening emergencies. Read and understand these procedures before an emergency happens.</p>
      </div>

      <div class="alert alert-danger" style="margin-bottom: var(--spacing-xl);">
        <span class="alert-danger-icon">⚠️</span>
        <div>
          <strong style="color: var(--color-danger);">ACT FAST:</strong> In any life-threatening situation, always call your local emergency services <strong>(911 in USA/Canada, 112 in Europe, 999 in UK)</strong> immediately. Do not wait for symptoms to worsen.
        </div>
      </div>

      <!-- First Aid Grid -->
      <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-xl);">
        
        <!-- CPR -->
        <div class="card" style="transform: none;">
          <h3 style="color: var(--color-danger); display: flex; align-items: center; gap: var(--spacing-xs); margin-bottom: var(--spacing-m); font-weight: 500;">
            <span>🫀</span> Cardiopulmonary Resuscitation (CPR)
          </h3>
          <p>CPR is performed when a person's breathing or heartbeat has stopped (unconsciousness with no normal breathing).</p>
          <ol style="padding-left: var(--spacing-l); color: var(--color-text-secondary); line-height: 1.6;">
            <li style="margin-bottom: var(--spacing-s);"><strong>Call for Help:</strong> Ensure the scene is safe, check for responsiveness, and call emergency services immediately. Get an AED (Automated External Defibrillator) if available.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Push Hard and Fast:</strong> Place the heel of one hand in the center of the chest, place your other hand over it, and interlace fingers. Compress the chest <strong>5 to 6 cm (2 inches)</strong> deep at a rate of <strong>100 to 120 compressions per minute</strong> (to the beat of the song "Stayin' Alive").</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Give Rescue Breaths:</strong> If trained, open the airway (head tilt, chin lift) and deliver 2 rescue breaths after every 30 chest compressions. If untrained, perform <strong>hands-only CPR</strong> (continuous compressions).</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Use AED:</strong> As soon as the AED arrives, turn it on and follow its spoken voice prompts. Continue CPR until medical personnel take over.</li>
          </ol>
        </div>

        <!-- Choking -->
        <div class="card" style="transform: none;">
          <h3 style="color: var(--color-warning); display: flex; align-items: center; gap: var(--spacing-xs); margin-bottom: var(--spacing-m); font-weight: 500;">
            <span>🗣️</span> Choking (Heimlich Maneuver)
          </h3>
          <p>For a conscious adult or child over 1 year old who is choking (unable to speak, cough, or breathe).</p>
          <ol style="padding-left: var(--spacing-l); color: var(--color-text-secondary); line-height: 1.6;">
            <li style="margin-bottom: var(--spacing-s);"><strong>Give 5 Back Blows:</strong> Stand behind the person, lean them forward, and deliver 5 firm blows between their shoulder blades with the heel of your hand.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Give 5 Abdominal Thrusts:</strong> If back blows fail, wrap your arms around their waist from behind. Make a fist with one hand, place it just above the navel, grab your fist with your other hand, and pull <strong>inward and upward</strong> quickly 5 times.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Alternate:</strong> Continue alternating 5 back blows and 5 abdominal thrusts until the object is expelled or the person becomes unconscious.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>If Unconscious:</strong> Lower them to the floor, call emergency services, and begin CPR. Check the mouth for the object during rescue breaths.</li>
          </ol>
        </div>

        <!-- Severe Bleeding -->
        <div class="card" style="transform: none;">
          <h3 style="display: flex; align-items: center; gap: var(--spacing-xs); margin-bottom: var(--spacing-m); font-weight: 500;">
            <span>🩸</span> Severe Bleeding
          </h3>
          <p>Controlling heavy external bleeding from wounds or lacerations.</p>
          <ol style="padding-left: var(--spacing-l); color: var(--color-text-secondary); line-height: 1.6;">
            <li style="margin-bottom: var(--spacing-s);"><strong>Apply Direct Pressure:</strong> Place a clean cloth, sterile dressing, or gloved hand directly over the wound and apply firm, continuous pressure.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Elevate the Wound:</strong> If possible, raise the bleeding limb above the level of the heart while keeping pressure on it.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Keep Pressed:</strong> Do not remove the cloth if it gets soaked; add another clean cloth on top and keep pressing. Removing cloths can disrupt forming blood clots.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Apply a Tourniquet:</strong> For severe, life-threatening limb bleeding that cannot be stopped by direct pressure, apply a commercial tourniquet 2-3 inches above the wound (never on a joint). Tighten until bleeding stops, and note the application time.</li>
          </ol>
        </div>

        <!-- Burns -->
        <div class="card" style="transform: none;">
          <h3 style="display: flex; align-items: center; gap: var(--spacing-xs); margin-bottom: var(--spacing-m); font-weight: 500;">
            <span>🔥</span> Burns (Thermal & Chemical)
          </h3>
          <p>Treating heat burns and chemical exposure.</p>
          <ol style="padding-left: var(--spacing-l); color: var(--color-text-secondary); line-height: 1.6;">
            <li style="margin-bottom: var(--spacing-s);"><strong>Cool the Burn:</strong> Immediately hold the burned area under <strong>cool, running tap water for 10 to 20 minutes</strong>. Do not use ice, ice water, butter, or ointments, which can damage the skin further.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Remove Constricting Items:</strong> Gently remove rings, bands, or tight clothing from the burned area before it starts to swell.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Cover Loosely:</strong> Wrap the burn loosely with a clean, sterile, non-stick bandage or plastic cling wrap to protect the skin from infection.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Do Not Pop Blisters:</strong> Fluid-filled blisters protect the skin from infection. If they break, clean the area gently and apply an antiseptic ointment.</li>
          </ol>
        </div>

        <!-- Poisoning -->
        <div class="card" style="transform: none;">
          <h3 style="display: flex; align-items: center; gap: var(--spacing-xs); margin-bottom: var(--spacing-m); font-weight: 500;">
            <span>🧪</span> Poisoning
          </h3>
          <p>Immediate steps if someone ingests or is exposed to toxic substances.</p>
          <ol style="padding-left: var(--spacing-l); color: var(--color-text-secondary); line-height: 1.6;">
            <li style="margin-bottom: var(--spacing-s);"><strong>Identify the Substance:</strong> Rapidly determine what was swallowed, inhaled, or touched, and approximately how much and when. Keep the packaging/bottle for reference.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Call Poison Control:</strong> Call your national Poison Help hotline immediately. Do not wait for symptoms to appear.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>Do NOT Induce Vomiting:</strong> Unless explicitly told to do so by a medical professional or poison control, do not force vomiting, as corrosive poisons can cause double damage to the esophagus.</li>
            <li style="margin-bottom: var(--spacing-s);"><strong>If on Skin or Eyes:</strong> Flush the affected area with large amounts of lukewarm water for at least 15-20 minutes.</li>
          </ol>
        </div>

      </div>
    `;
  },

  // 5. HEALTHY LIVING LIFESTYLE VIEW
  renderHealthyLiving: function () {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';
    mainContent.innerHTML = `
      <div class="page-header">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <span>Healthy Living</span>
        </div>
        <h1>Healthy Living Guide</h1>
        <p>Medically reviewed, actionable recommendations for maintaining physical wellness, mental balance, and preventative health.</p>
      </div>

      <div class="home-grid" style="margin-top: var(--spacing-l);">
        
        <!-- Diet -->
        <div class="card" style="transform: none;">
          <div style="font-size: 2.25rem; margin-bottom: var(--spacing-s);">🥗</div>
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">Nutrition & Diet</h3>
          <p>Eating a balanced diet is one of the most effective ways to prevent chronic diseases like Type 2 Diabetes and Hypertension.</p>
          <ul style="padding-left: var(--spacing-l); color: var(--color-text-secondary); font-size: 0.9rem;">
            <li style="margin-bottom: var(--spacing-xxs);">Focus on whole foods: vegetables, fruits, whole grains, and lean proteins.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Reduce intake of sodium (salt) to under 2,000 mg daily to protect blood pressure.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Minimize highly processed foods, refined sugars, and sugary beverages.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Stay hydrated by drinking at least 2 to 2.5 liters of water daily.</li>
          </ul>
        </div>

        <!-- Exercise -->
        <div class="card" style="transform: none;">
          <div style="font-size: 2.25rem; margin-bottom: var(--spacing-s);">🏃‍♂️</div>
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">Physical Activity</h3>
          <p>Regular movement strengthens the cardiovascular system, improves joint health, and helps regulate blood sugar.</p>
          <ul style="padding-left: var(--spacing-l); color: var(--color-text-secondary); font-size: 0.9rem;">
            <li style="margin-bottom: var(--spacing-xxs);">Aim for at least <strong>150 minutes</strong> of moderate aerobic exercise (like brisk walking or swimming) per week.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Incorporate muscle-strengthening activities at least 2 days per week.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Reduce sedentary time by standing up or walking for 5 minutes every hour.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Protect joints by warming up and using proper footwear.</li>
          </ul>
        </div>

        <!-- Sleep -->
        <div class="card" style="transform: none;">
          <div style="font-size: 2.25rem; margin-bottom: var(--spacing-s);">🛌</div>
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">Sleep Hygiene</h3>
          <p>Quality sleep is crucial for cellular repair, brain function, emotional regulation, and immune strength.</p>
          <ul style="padding-left: var(--spacing-l); color: var(--color-text-secondary); font-size: 0.9rem;">
            <li style="margin-bottom: var(--spacing-xxs);">Aim for <strong>7 to 9 hours</strong> of uninterrupted sleep per night.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Maintain a consistent sleep schedule (sleep and wake at the same time daily).</li>
            <li style="margin-bottom: var(--spacing-xxs);">Keep your bedroom cool, quiet, dark, and free of electronics.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Avoid screens, caffeine, and heavy meals for at least 1-2 hours before bed.</li>
          </ul>
        </div>

        <!-- Mental Wellness -->
        <div class="card" style="transform: none;">
          <div style="font-size: 2.25rem; margin-bottom: var(--spacing-s);">🧘‍♀️</div>
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">Mental & Emotional Wellness</h3>
          <p>Chronic stress triggers inflammation and elevates blood pressure. Actively managing mental health is vital.</p>
          <ul style="padding-left: var(--spacing-l); color: var(--color-text-secondary); font-size: 0.9rem;">
            <li style="margin-bottom: var(--spacing-xxs);">Practice daily mindfulness, meditation, or deep-breathing exercises.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Stay socially connected to friends, family, or community groups.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Learn to establish healthy boundaries to prevent chronic overwhelm.</li>
            <li style="margin-bottom: var(--spacing-xxs);">Seek professional counseling or therapy early if feelings of anxiety or depression persist.</li>
          </ul>
        </div>

      </div>
    `;
  },

  // 6. MEDICINES OVERVIEW VIEW
  renderMedicines: function () {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';
    mainContent.innerHTML = `
      <div class="page-header">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <span>Medicines</span>
        </div>
        <h1>Over-the-Counter (OTC) Medicines Guide</h1>
        <p>A general overview of common, non-prescription drug classes. This guide does not replace professional medical advice, prescription guidelines, or package insert instructions.</p>
      </div>

      <div class="alert alert-info">
        <span class="alert-info-icon">ℹ️</span>
        <div>
          <strong>Safety First:</strong> Always read the active ingredients and dosage instructions on the package. Never exceed the recommended daily limit, and be cautious of combining medications that contain the same active ingredients (e.g., combining different cold remedies containing paracetamol).
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-xl); margin-top: var(--spacing-xl);">
        
        <!-- Pain Relievers & Fever Reducers -->
        <div class="card" style="transform: none;">
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">💊 Pain Relievers & Fever Reducers (Analgesics / Antipyretics)</h3>
          <p>Used to treat headaches, muscle aches, toothaches, joint pain, and to lower high temperatures.</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-m); margin-top: var(--spacing-s);">
            <div>
              <strong style="color: var(--color-text-primary);">Paracetamol (Acetaminophen)</strong>
              <p style="font-size: 0.85rem; margin-top: 4px;">Gentle on the stomach. Lowers fever and relieves pain, but does not reduce inflammation. **Warning:** Excess dosage can cause severe liver damage. Do not exceed 4,000 mg per 24 hours.</p>
            </div>
            <div>
              <strong style="color: var(--color-text-primary);">NSAIDs (Ibuprofen, Naproxen, Aspirin)</strong>
              <p style="font-size: 0.85rem; margin-top: 4px;">Reduces pain, fever, and active inflammation. Can irritate the stomach lining; take with food. **Warning:** Avoid aspirin in children (due to Reye's syndrome) and NSAIDs in individuals with kidney issues or active dengue fever.</p>
            </div>
          </div>
        </div>

        <!-- Antihistamines -->
        <div class="card" style="transform: none;">
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">🤧 Antihistamines (Allergy Relief)</h3>
          <p>Used to relieve symptoms of allergic reactions, hay fever, hives, and cold symptoms like runny nose, sneezing, and watery eyes.</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-m); margin-top: var(--spacing-s);">
            <div>
              <strong style="color: var(--color-text-primary);">Sedating (1st Generation: Diphenhydramine)</strong>
              <p style="font-size: 0.85rem; margin-top: 4px;">Highly effective for severe allergies or itching, but causes significant drowsiness. Often used in nighttime sleep aids.</p>
            </div>
            <div>
              <strong style="color: var(--color-text-primary);">Non-Sedating (2nd Generation: Cetirizine, Loratadine)</strong>
              <p style="font-size: 0.85rem; margin-top: 4px;">Provide 24-hour allergy relief without causing drowsiness for most people. Preferred for daily management.</p>
            </div>
          </div>
        </div>

        <!-- Gastrointestinal Medicines -->
        <div class="card" style="transform: none;">
          <h3 style="margin-bottom: var(--spacing-s); font-weight: 500;">🧪 Antacids & Acid Reducers (GERD & Indigestion Relief)</h3>
          <p>Used to neutralize or reduce stomach acid, relieving heartburn, indigestion, and acid reflux symptoms.</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-m); margin-top: var(--spacing-s);">
            <div>
              <strong style="color: var(--color-text-primary);">Antacids (Calcium Carbonate, Magnesium Hydroxide)</strong>
              <p style="font-size: 0.85rem; margin-top: 4px;">Neutralize stomach acid instantly. Provide rapid, short-term relief (e.g., Tums, Milk of Magnesia). Use occasionally.</p>
            </div>
            <div>
              <strong style="color: var(--color-text-primary);">Acid Reducers (H2 Blockers like Famotidine)</strong>
              <p style="font-size: 0.85rem; margin-top: 4px;">Reduce acid production. Provide longer-lasting relief (up to 12 hours) but take longer to start working. Good for preventative use before meals.</p>
            </div>
          </div>
        </div>

      </div>
    `;
  },

  // 7. FAQ VIEW
  renderFAQ: function () {
    const mainContent = document.getElementById('main-content');
    mainContent.className = 'animate-slide-up';
    mainContent.innerHTML = `
      <div class="page-header">
        <div class="breadcrumbs">
          <a href="#/">Home</a>
          <span class="breadcrumbs-separator">/</span>
          <span>FAQ</span>
        </div>
        <h1>Frequently Asked Questions</h1>
        <p>Common questions about using the MediGuide information portal and setting up the AI RAG Chatbot.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: var(--spacing-m); max-width: 900px; margin-top: var(--spacing-l);">
        
        <div class="card" style="transform: none; padding: var(--spacing-l);">
          <h3 style="margin-bottom: var(--spacing-xs); font-weight: 500; color: var(--color-text-primary);">What is MediGuide?</h3>
          <p style="margin-bottom: 0;">MediGuide is a client-side medical educational portal combined with a Retrieval-Augmented Generation (RAG) chatbot. It provides high-quality, plain-language summaries of 100 common conditions and immediate first aid instructions.</p>
        </div>

        <div class="card" style="transform: none; padding: var(--spacing-l);">
          <h3 style="margin-bottom: var(--spacing-xs); font-weight: 500; color: var(--color-text-primary);">How does the RAG Chatbot work?</h3>
          <p style="margin-bottom: 0;">When you type a query, our client-side search engine processes it and finds the top 3 most relevant disease documents in our database. It packages these documents as context and passes them alongside your query to the Groq Llama 3.3 model. The AI is strictly instructed to only answer using this context, preventing hallucinations and ensuring medically sound, localized responses.</p>
        </div>

        <div class="card" style="transform: none; padding: var(--spacing-l);">
          <h3 style="margin-bottom: var(--spacing-xs); font-weight: 500; color: var(--color-text-primary);">How do I set up my Groq API Key?</h3>
          <p style="margin-bottom: var(--spacing-xs);">To chat with the AI, click the floating chat button at the bottom-right, then click the **Settings Gear Icon** ⚙️ at the top of the chat panel. Enter your personal Groq API key and click Save. Your key is stored safely in your browser's local storage and is never uploaded to any server other than Groq's official API endpoint.</p>
          <p style="margin-bottom: 0; font-size: 0.85rem; color: var(--color-brand); font-weight: 500;">Note: You can obtain an API key for free from the Groq Console (console.groq.com).</p>
        </div>

        <div class="card" style="transform: none; padding: var(--spacing-l);">
          <h3 style="margin-bottom: var(--spacing-xs); font-weight: 500; color: var(--color-text-primary);">Is my search or chat history private?</h3>
          <p style="margin-bottom: 0;">Yes. The entire portal runs 100% on your device. We have no servers, no databases, and no tracking scripts. Your search queries remain local. Your chat transcript is sent only to Groq via an HTTPS connection to generate responses. It is never stored on our side.</p>
        </div>

        <div class="card" style="transform: none; padding: var(--spacing-l);">
          <h3 style="margin-bottom: var(--spacing-xs); font-weight: 500; color: var(--color-text-primary);">Can the chatbot diagnose me?</h3>
          <p style="margin-bottom: 0; font-weight: 500; color: var(--color-danger);">No. MediGuide is for educational purposes only. It cannot diagnose illnesses, prescribe medications, or replace professional healthcare providers. In case of serious symptoms or medical emergencies, contact emergency services (911 / 112) immediately.</p>
        </div>

      </div>
    `;
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
