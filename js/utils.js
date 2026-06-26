/**
 * utils.js - General utility functions for MediGuide.
 */

const Utils = {
  /**
   * Debounce a function call to prevent excessive executions.
   */
  debounce: function (func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  },

  /**
   * Escape HTML special characters to prevent XSS.
   */
  escapeHTML: function (str) {
    if (!str) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, function (m) { return map[m]; });
  },

  /**
   * Simple, secure Markdown parser for rendering chatbot responses.
   * Focuses on bold, italics, paragraphs, and list items. No code blocks or arbitrary HTML.
   */
  parseMarkdown: function (md) {
    if (!md) return '';
    
    // First, escape HTML to ensure safety
    let html = this.escapeHTML(md);

    // Replace headers (###, ##, #)
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

    // Replace bold (**text**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace italics (*text*)
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Handle horizontal rule (---)
    html = html.replace(/^---$/gm, '<hr class="chat-hr">');

    // Handle tables, lists, and plain text lines
    let lines = html.split('\n');
    let outputLines = [];
    let inList = false;
    let inTable = false;
    let tableRows = [];

    const flushTable = () => {
      if (tableRows.length === 0) return;
      let tableHTML = '<div class="chat-table-container"><table class="chat-table">';
      let hasHeader = false;
      let tbodyOpen = false;

      tableRows.forEach(row => {
        // Split cells and trim whitespace
        let cells = row.split('|').map(c => c.trim());
        // Remove empty elements caused by leading/trailing outer pipes
        if (cells[0] === '') cells.shift();
        if (cells[cells.length - 1] === '') cells.pop();

        // Check if this is a separator row (like |---|---| or |:---|:---|)
        const isSeparator = cells.every(cell => cell.match(/^[:\s\-]+$/));
        if (isSeparator) {
          hasHeader = true;
          return;
        }

        if (!hasHeader && tableRows.indexOf(row) === 0) {
          tableHTML += '<thead><tr>' + cells.map(c => `<th>${c}</th>`).join('') + '</tr></thead>';
          hasHeader = true;
        } else {
          if (!tbodyOpen) {
            tableHTML += '<tbody>';
            tbodyOpen = true;
          }
          tableHTML += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
        }
      });

      if (tbodyOpen) {
        tableHTML += '</tbody>';
      }
      tableHTML += '</table></div>';
      outputLines.push(tableHTML);
      tableRows = [];
      inTable = false;
    };

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let trimmed = line.trim();

      // Check if it's a table row
      if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 1) {
        if (inList) {
          outputLines.push('</ul>');
          inList = false;
        }
        inTable = true;
        tableRows.push(trimmed);
      } else {
        if (inTable) {
          flushTable();
        }

        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          if (!inList) {
            outputLines.push('<ul class="chat-list">');
            inList = true;
          }
          let content = trimmed.substring(2);
          outputLines.push(`<li>${content}</li>`);
        } else {
          if (inList) {
            outputLines.push('</ul>');
            inList = false;
          }
          outputLines.push(line);
        }
      }
    }

    if (inTable) {
      flushTable();
    }
    if (inList) {
      outputLines.push('</ul>');
    }

    html = outputLines.join('\n');

    // Convert double newlines into paragraphs, skipping inside existing block elements
    let paragraphs = html.split(/\n{2,}/g);
    html = paragraphs.map(para => {
      let trimmed = para.trim();
      if (!trimmed) return '';
      
      // If it starts with an HTML block element, return it as-is
      if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<li') || trimmed.startsWith('<hr') || trimmed.startsWith('<div class="chat-table-container"')) {
        return trimmed;
      }
      return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
    }).join('');

    return html;
  },

  /**
   * Generates a text file transcript of a conversation and downloads it.
   */
  downloadTranscript: function (messages) {
    if (!messages || messages.length === 0) return;
    
    let text = `==================================================\n`;
    text += `       MEDIGUIDE CHAT CONVERSATION TRANSCRIPT      \n`;
    text += `       Generated: ${new Date().toLocaleString()}   \n`;
    text += `==================================================\n\n`;

    messages.forEach(msg => {
      const sender = msg.sender === 'user' ? 'USER' : 'MEDIGUIDE ASSISTANT';
      const time = msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : '';
      text += `[${time}] ${sender}:\n`;
      text += `${msg.text}\n`;
      text += `--------------------------------------------------\n\n`;
    });

    text += `Disclaimer: The information provided in this transcript is for educational purposes only.\n`;
    text += `It does not constitute medical advice, diagnosis, or treatment. Always consult a healthcare professional.\n`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mediguide_transcript_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  /**
   * Helper to copy text to clipboard.
   */
  copyToClipboard: function (text) {
    return navigator.clipboard.writeText(text);
  },

  /**
   * Normalizes a text string for search comparison by converting to lowercase,
   * replacing hyphens/slashes with spaces, stripping other punctuation, and condensing spaces.
   */
  normalizeText: function (str) {
    if (!str) return '';
    return str.toLowerCase()
              .replace(/[-\/]/g, ' ')            // Replace hyphens and forward slashes with spaces
              .replace(/[^a-z0-9\s]/g, '')       // Strip all other punctuation/special characters
              .replace(/\s+/g, ' ')              // Collapse multiple spaces into one
              .trim();
  }
};
