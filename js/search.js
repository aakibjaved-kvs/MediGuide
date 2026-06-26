/**
 * search.js - Client-side search engine for MediGuide.
 * Supports weighted indexing, category filtering, scoring, and text highlighting.
 */

const SearchEngine = {
  // Common stop words to filter out of token search matching
  STOP_WORDS: new Set([
    'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'arent', 'as', 'at', 
    'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'cant', 'cannot', 'could', 
    'couldnt', 'did', 'didnt', 'do', 'does', 'doesnt', 'doing', 'dont', 'down', 'during', 'each', 'few', 'for', 'from', 
    'further', 'had', 'hadnt', 'has', 'hasnt', 'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes', 'her', 'here', 
    'heres', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i', 'id', 'ill', 'im', 'ive', 'if', 'in', 
    'into', 'is', 'isnt', 'it', 'its', 'itself', 'lets', 'me', 'more', 'most', 'mustnt', 'my', 'myself', 'no', 'nor', 
    'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 
    'same', 'shant', 'she', 'shed', 'shell', 'shes', 'should', 'shouldnt', 'so', 'some', 'such', 'than', 'that', 'thats', 
    'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'theres', 'these', 'they', 'theyd', 'theyll', 
    'theyre', 'theyve', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasnt', 'we', 
    'wed', 'well', 'were', 'weve', 'werent', 'what', 'whats', 'when', 'whens', 'where', 'wheres', 'which', 'while', 
    'who', 'whos', 'whom', 'why', 'whys', 'with', 'wont', 'would', 'wouldnt', 'you', 'youd', 'youll', 'youre', 'youve', 
    'your', 'yours', 'yourself', 'yourselves'
  ]),

  /**
   * Performs search on the knowledge base.
   * @param {string} query - The search term.
   * @param {string} categoryFilter - Optional category filter (e.g., "infectious", "chronic").
   * @returns {Array} List of matched and scored results.
   */
  search: function (query, categoryFilter = '') {
    if (!window.knowledgeBase) return [];
    
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return [];

    const normalizedQuery = Utils.normalizeText(cleanQuery);

    const queryTokens = normalizedQuery.split(/\s+/)
      .filter(token => token.length > 1 && !SearchEngine.STOP_WORDS.has(token));
    if (queryTokens.length === 0) return [];

    const results = [];

    window.knowledgeBase.forEach(item => {
      // Apply category filter if specified
      if (categoryFilter && categoryFilter !== 'all' && item.category !== categoryFilter) {
        return;
      }

      let score = 0;
      let matchesTitle = false;
      const titleLower = item.title.toLowerCase();
      const normalizedTitle = Utils.normalizeText(item.title);
      
      // 1. Exact title match (Highest weight)
      if (titleLower === cleanQuery || normalizedTitle === normalizedQuery) {
        score += 100;
        matchesTitle = true;
      } 
      // 2. Partial title match
      else if (titleLower.includes(cleanQuery) || normalizedTitle.includes(normalizedQuery)) {
        score += 50;
        matchesTitle = true;
      }

      // 3. Token-based title match
      queryTokens.forEach(token => {
        if (titleLower.includes(token) || normalizedTitle.includes(token)) {
          score += 15;
          matchesTitle = true;
        }
      });

      // 4. Keyword matches
      item.keywords.forEach(keyword => {
        const kwLower = keyword.toLowerCase();
        const normalizedKw = Utils.normalizeText(keyword);
        if (kwLower === cleanQuery || normalizedKw === normalizedQuery) {
          score += 40;
        } else if (kwLower.includes(cleanQuery) || normalizedKw.includes(normalizedQuery)) {
          score += 20;
        }
        queryTokens.forEach(token => {
          if (kwLower.includes(token) || normalizedKw.includes(token)) {
            score += 8;
          }
        });
      });

      // 5. Summary match
      const summaryLower = item.summary.toLowerCase();
      if (summaryLower.includes(cleanQuery)) {
        score += 15;
      }
      queryTokens.forEach(token => {
        if (summaryLower.includes(token)) {
          score += 3;
        }
      });

      // 6. Content fields match (deep search)
      const content = item.content;
      let contentMatchCount = 0;
      
      // Search in overview
      if (content.overview.toLowerCase().includes(cleanQuery)) {
        score += 10;
        contentMatchCount++;
      }

      // Search in symptoms list
      content.symptoms.forEach(symptom => {
        if (symptom.toLowerCase().includes(cleanQuery)) {
          score += 5;
          contentMatchCount++;
        }
      });

      // Search in causes, treatment, prevention, emergency signs
      const textFields = ['causes', 'treatment', 'homeCare', 'prevention', 'whenToSeeDoctor'];
      textFields.forEach(field => {
        if (content[field] && content[field].toLowerCase().includes(cleanQuery)) {
          score += 4;
          contentMatchCount++;
        }
      });

      content.emergencySigns.forEach(sign => {
        if (sign.toLowerCase().includes(cleanQuery)) {
          score += 5;
          contentMatchCount++;
        }
      });

      // Add to results if we have a match
      if (score > 0) {
        results.push({
          item: item,
          score: score,
          matchesTitle: matchesTitle,
          matchCount: contentMatchCount
        });
      }
    });

    // Sort by score descending
    return results.sort((a, b) => b.score - a.score);
  },

  /**
   * Highlight matched query terms in a text string.
   * @param {string} text - The original text.
   * @param {string} query - The search query containing terms to highlight.
   * @returns {string} Safe HTML string with matched terms wrapped in <mark> tags.
   */
  highlightText: function (text, query) {
    if (!text || !query) return Utils.escapeHTML(text);

    // Escape HTML first to prevent XSS through query injection
    let escapedText = Utils.escapeHTML(text);
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return escapedText;

    // Split query into individual words, sort longest first to prevent sub-word highlighting issues
    const terms = cleanQuery.split(/\s+/)
      .filter(term => term.length > 1)
      .map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')) // escape regex chars
      .sort((a, b) => b.length - a.length);

    if (terms.length === 0) return escapedText;

    // Create regex matching any of the terms
    const pattern = `(${terms.join('|')})`;
    const regex = new RegExp(pattern, 'gi');

    // Temporary token list to avoid highlighting marks inside other marks
    let tokens = [];
    let counter = 0;

    // Perform replacement safely by replacing matches with unique placeholders
    let processed = escapedText.replace(regex, (match) => {
      const placeholder = `___MARK_TOKEN_${counter}___`;
      tokens.push({
        placeholder: placeholder,
        content: `<mark class="search-highlight">${match}</mark>`
      });
      counter++;
      return placeholder;
    });

    // Restore tokens
    tokens.forEach(token => {
      processed = processed.replace(token.placeholder, token.content);
    });

    return processed;
  }
};
