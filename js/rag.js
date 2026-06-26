/**
 * rag.js - Retrieval-Augmented Generation retrieval and context assembly layer.
 * Queries the client-side search engine and structures context blocks for Groq.
 */

const RAGEngine = {
  /**
   * Retrieves the top 3 most relevant articles and builds a compressed context block.
   * @param {string} query - The user's message.
   * @returns {Object} An object containing the context block string and the list of retrieved articles.
   */
  retrieveContext: function (query) {
    // 1. Query the search engine (returns sorted list by relevance score)
    const searchResults = SearchEngine.search(query);
    
    // 2. Select top 3 articles
    const topMatches = searchResults.slice(0, 3).map(res => res.item);
    
    if (topMatches.length === 0) {
      return {
        contextString: "No relevant articles found in the database.",
        retrievedArticles: []
      };
    }

    // 3. Compress and build structured context block (ensuring <= 1200 tokens)
    // We estimate tokens as: 1 token ≈ 4 characters or 0.75 words.
    // 1200 tokens ≈ 4800 characters. We will target a safe limit of ~4500 characters.
    let contextParts = [];
    let currentLength = 0;
    const MAX_CHARACTER_LIMIT = 4500;

    for (const article of topMatches) {
      // Create a structured representation of the article
      let articleBlock = `[DISEASE: ${article.title}]\n`;
      articleBlock += `Category: ${article.category}\n`;
      articleBlock += `Cure/Management Status: ${article.cureStatus}\n`;
      articleBlock += `Specialist to Consult: ${article.specialist}\n`;
      articleBlock += `Estimated Recovery Time: ${article.recoveryTime}\n`;
      articleBlock += `Recommended Diagnostic Tests:\n${article.diagnosticTests.map(t => `- ${t}`).join('\n')}\n`;
      articleBlock += `Steps to Cure/Manage:\n${article.stepsToCure.map(s => `- ${s}`).join('\n')}\n`;
      articleBlock += `Overview: ${article.content.overview}\n`;
      articleBlock += `Symptoms:\n${article.content.symptoms.map(s => `- ${s}`).join('\n')}\n`;
      articleBlock += `Causes: ${article.content.causes}\n`;
      
      if (article.content.treatment) {
        articleBlock += `Treatment: ${article.content.treatment}\n`;
      }
      if (article.content.homeCare) {
        articleBlock += `Home Care: ${article.content.homeCare}\n`;
      }
      if (article.content.prevention) {
        articleBlock += `Prevention: ${article.content.prevention}\n`;
      }
      if (article.content.whenToSeeDoctor) {
        articleBlock += `When to See Doctor: ${article.content.whenToSeeDoctor}\n`;
      }
      if (article.content.emergencySigns) {
        articleBlock += `Emergency Warning Signs:\n${article.content.emergencySigns.map(e => `- ${e}`).join('\n')}\n`;
      }
      
      articleBlock += `Related Conditions: ${article.content.relatedConditions.join(', ')}\n`;
      articleBlock += `--------------------------------------------------\n\n`;

      // Check if adding this article exceeds our character budget
      if (currentLength + articleBlock.length > MAX_CHARACTER_LIMIT) {
        // If we already have at least one article, we can stop
        if (contextParts.length > 0) {
          break;
        } 
        // If even the first article exceeds the limit, we compress it by only taking core fields
        else {
          let compressedBlock = `[DISEASE: ${article.title}]\n`;
          compressedBlock += `Cure/Management Status: ${article.cureStatus}\n`;
          compressedBlock += `Specialist to Consult: ${article.specialist}\n`;
          compressedBlock += `Estimated Recovery Time: ${article.recoveryTime}\n`;
          compressedBlock += `Recommended Diagnostic Tests:\n${article.diagnosticTests.map(t => `- ${t}`).join('\n')}\n`;
          compressedBlock += `Steps to Cure/Manage:\n${article.stepsToCure.map(s => `- ${s}`).join('\n')}\n`;
          compressedBlock += `Overview: ${article.content.overview}\n`;
          compressedBlock += `Symptoms:\n${article.content.symptoms.map(s => `- ${s}`).join('\n')}\n`;
          if (article.content.treatment) compressedBlock += `Treatment: ${article.content.treatment}\n`;
          if (article.content.emergencySigns) {
            compressedBlock += `Emergency Warning Signs:\n${article.content.emergencySigns.map(e => `- ${e}`).join('\n')}\n`;
          }
          compressedBlock += `--------------------------------------------------\n\n`;
          contextParts.push(compressedBlock);
          break;
        }
      }

      contextParts.push(articleBlock);
      currentLength += articleBlock.length;
    }

    const contextString = contextParts.join('');

    return {
      contextString: contextString,
      retrievedArticles: topMatches
    };
  }
};
