/**
 * chatbot.js - UI Controller and Logic for the MediGuide RAG Chatbot.
 * Handles resizing, messaging, streaming, idle states, toolbar events, and safety triggers.
 */

const ChatbotUI = {
  state: {
    isOpen: false,
    messages: [],
    isTyping: false,
    isGenerating: false,
    idleTimer: null,
    isResizing: false,
    startY: 0,
    startHeight: 0
  },

  // Initialize Chatbot UI and Events
  init: function () {
    this.registerDomElements();
    this.registerEventListeners();
    this.startIdleTracker();
    this.renderWelcomeState();
    
    // Check if an API key is already configured
    this.checkApiKeyConfig();
  },

  // Cache DOM elements
  registerDomElements: function () {
    this.elements = {
      triggerBtn: document.getElementById('chatbot-trigger-btn'),
      panel: document.getElementById('chatbot-panel'),
      closeBtn: document.getElementById('chat-close-btn'),
      settingsBtn: document.getElementById('chat-settings-btn'),
      settingsOverlay: document.getElementById('chat-settings-overlay'),
      keyInput: document.getElementById('groq-key-input'),
      saveKeyBtn: document.getElementById('settings-save-btn'),
      cancelKeyBtn: document.getElementById('settings-cancel-btn'),
      messagesArea: document.getElementById('chat-messages-area'),
      inputField: document.getElementById('chat-input-field'),
      sendBtn: document.getElementById('chat-send-btn'),
      resizeHandle: document.getElementById('chatbot-resize-handle'),
      clearBtn: document.getElementById('toolbar-clear-btn'),
      copyBtn: document.getElementById('toolbar-copy-btn'),
      downloadBtn: document.getElementById('toolbar-download-btn'),
      headerChatBtn: document.getElementById('header-chat-btn'),
      confirmOverlay: document.getElementById('chat-confirm-overlay'),
      confirmCancelBtn: document.getElementById('confirm-cancel-btn'),
      confirmClearBtn: document.getElementById('confirm-clear-btn')
    };
  },

  // Bind UI Events
  registerEventListeners: function () {
    const el = this.elements;

    // Toggle panel
    el.triggerBtn.addEventListener('click', () => this.toggleChatPanel());
    el.closeBtn.addEventListener('click', () => this.closeChatPanel());
    if (el.headerChatBtn) {
      el.headerChatBtn.addEventListener('click', () => this.openChatPanel());
    }

    // Toggle settings overlay
    el.settingsBtn.addEventListener('click', () => this.toggleSettingsOverlay());
    el.cancelKeyBtn.addEventListener('click', () => this.closeSettingsOverlay());
    el.saveKeyBtn.addEventListener('click', () => this.saveApiKey());

    // Send Message events
    el.sendBtn.addEventListener('click', () => this.handleSendMessage());
    el.inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSendMessage();
      }
    });

    // Auto-resize input textarea height based on content
    el.inputField.addEventListener('input', () => {
      el.inputField.style.height = 'auto';
      el.inputField.style.height = (el.inputField.scrollHeight) + 'px';
    });

    // Toolbar buttons
    el.clearBtn.addEventListener('click', () => this.clearChatHistory());
    el.copyBtn.addEventListener('click', () => this.copyLastResponse());
    el.downloadBtn.addEventListener('click', () => this.downloadTranscript());

    // Custom Confirmation Overlay buttons
    el.confirmCancelBtn.addEventListener('click', () => this.closeConfirmOverlay());
    el.confirmClearBtn.addEventListener('click', () => this.executeClearChat());

    // Resizing Panel (Desktop Only)
    el.resizeHandle.addEventListener('mousedown', (e) => this.startResizing(e));
    window.addEventListener('mousemove', (e) => this.doResizing(e));
    window.addEventListener('mouseup', () => this.stopResizing());

    // Keyboard Accessibility (ESC to close)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state.isOpen) {
        this.closeChatPanel();
      }
    });
  },

  // Toggles the visibility of the Chat Panel
  toggleChatPanel: function () {
    if (this.state.isOpen) {
      this.closeChatPanel();
    } else {
      this.openChatPanel();
    }
  },

  openChatPanel: function () {
    this.elements.panel.classList.add('open');
    this.state.isOpen = true;
    this.elements.triggerBtn.classList.remove('chatbot-pulse'); // remove pulse when active
    this.resetIdleTimer();
    this.elements.inputField.focus();
  },

  closeChatPanel: function () {
    this.elements.panel.classList.remove('open');
    this.state.isOpen = false;
    this.closeSettingsOverlay();
    this.startIdleTracker();
  },

  // Toggle API Key Settings Overlay
  toggleSettingsOverlay: function () {
    const overlay = this.elements.settingsOverlay;
    const isCurrentlyOpen = overlay.classList.contains('open');
    
    if (isCurrentlyOpen) {
      this.closeSettingsOverlay();
    } else {
      // Pre-fill existing key if set
      this.elements.keyInput.value = GroqClient.getApiKey();
      overlay.classList.add('open');
    }
  },

  closeSettingsOverlay: function () {
    this.elements.settingsOverlay.classList.remove('open');
  },

  saveApiKey: function () {
    const key = this.elements.keyInput.value;
    GroqClient.setApiKey(key);
    this.closeSettingsOverlay();
    this.checkApiKeyConfig();
    this.addSystemMessage("API key saved. You can now chat with the RAG assistant.");
  },

  checkApiKeyConfig: function () {
    const key = GroqClient.getApiKey();
    if (!key) {
      this.elements.settingsBtn.style.color = "var(--color-danger)"; // red warning color on gear
    } else {
      this.elements.settingsBtn.style.color = "var(--color-text-secondary)";
    }
  },

  // Desktop drag-to-resize logic
  startResizing: function (e) {
    e.preventDefault();
    this.state.isResizing = true;
    this.state.startY = e.clientY;
    this.state.startHeight = parseInt(document.defaultView.getComputedStyle(this.elements.panel).height, 10);
    document.body.style.cursor = 'ns-resize';
  },

  doResizing: function (e) {
    if (!this.state.isResizing) return;
    // Calculate new height (drag up increases height, so subtract delta)
    const deltaY = e.clientY - this.state.startY;
    const newHeight = this.state.startHeight - deltaY;
    
    // Bounds check (min 350px, max viewport - 120px)
    const minHeight = 350;
    const maxHeight = window.innerHeight - 120;

    if (newHeight >= minHeight && newHeight <= maxHeight) {
      this.elements.panel.style.height = `${newHeight}px`;
    }
  },

  stopResizing: function () {
    if (this.state.isResizing) {
      this.state.isResizing = false;
      document.body.style.cursor = 'default';
    }
  },

  // Idle tracker: pulse floating button if user is idle for > 30 seconds
  startIdleTracker: function () {
    this.resetIdleTimer();
    const triggerReset = () => this.resetIdleTimer();
    
    // Reset timer on any user interaction
    const events = ['mousemove', 'keydown', 'click', 'touchstart'];
    events.forEach(event => window.addEventListener(event, triggerReset));

    // Cleanup events when chatbot is open to save cycles
    this.idleCleanup = () => {
      events.forEach(event => window.removeEventListener(event, triggerReset));
    };
  },

  resetIdleTimer: function () {
    clearTimeout(this.state.idleTimer);
    
    // Don't pulse if chatbot is already open
    if (this.state.isOpen) return;

    this.elements.triggerBtn.classList.remove('chatbot-pulse');
    
    this.state.idleTimer = setTimeout(() => {
      if (!this.state.isOpen) {
        this.elements.triggerBtn.classList.add('chatbot-pulse');
      }
    }, 30000); // 30 seconds
  },

  // Render initial welcome state with suggested questions
  renderWelcomeState: function () {
    this.elements.messagesArea.innerHTML = `
      <div class="chat-bubble-container assistant">
        <div class="chat-bubble-avatar">MG</div>
        <div class="chat-bubble">
          <p>Hello! I am <strong>MediGuide AI</strong>, your personal medical education assistant.</p>
          <p>I can retrieve accurate, plain-language details from our database of 100 conditions and first aid guides to answer your questions.</p>
        </div>
      </div>
      
      <div id="chat-suggestions-container" class="chat-suggestions-wrapper">
        <p style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--color-text-tertiary); margin-bottom: 2px;">Suggested Questions:</p>
        <button class="chat-suggestion-pill">What are the symptoms of Type 2 Diabetes?</button>
        <button class="chat-suggestion-pill">What should I do if someone is Choking?</button>
        <button class="chat-suggestion-pill">How is Malaria prevented?</button>
        <button class="chat-suggestion-pill">Home care recommendations for Acid Reflux</button>
      </div>
    `;

    this.setupSuggestedQuestionsListeners();
  },

  setupSuggestedQuestionsListeners: function () {
    const pills = this.elements.messagesArea.querySelectorAll('.chat-suggestion-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.textContent;
        this.sendUserQuery(query);
      });
    });
  },

  // Programmatically trigger sending a user question (useful from external pages)
  sendUserQuery: function (query) {
    this.elements.inputField.value = query;
    this.handleSendMessage();
  },

  // Handle message sending flow
  handleSendMessage: async function () {
    if (this.state.isGenerating) return; // Prevent double submission/overlap

    const input = this.elements.inputField;
    const text = input.value.trim();
    if (!text) return;

    this.state.isGenerating = true;
    this.setChatInputsDisabled(true);

    // Reset input field height and content
    input.value = '';
    input.style.height = 'auto';

    // Remove suggested questions if they are still visible
    const suggestions = document.getElementById('chat-suggestions-container');
    if (suggestions) {
      suggestions.remove();
    }

    // 1. Add User message to state & DOM
    this.addMessage('user', text);
    
    // 2. Perform local offline safety & greeting checks (Step 11)
    
    // A. Offensive language check
    if (SafetyFilters.isOffensive(text)) {
      this.showTypingIndicator();
      setTimeout(() => {
        this.hideTypingIndicator();
        const response = SafetyFilters.getOffensiveResponse();
        this.addMessage('assistant', response.text, response.type);
        this.state.isGenerating = false;
        this.setChatInputsDisabled(false);
      }, 600);
      return;
    }

    // B. Emergency Phrase Trigger (Immediate high-priority override)
    if (SafetyFilters.isEmergency(text)) {
      this.showTypingIndicator();
      setTimeout(() => {
        this.hideTypingIndicator();
        const response = SafetyFilters.getEmergencyResponse();
        this.addMessage('assistant', response.text, response.type);
        this.state.isGenerating = false;
        this.setChatInputsDisabled(false);
      }, 300);
      return;
    }

    // C. Local Greetings / Meta-questions bypass
    if (SafetyFilters.isGreeting(text)) {
      this.showTypingIndicator();
      setTimeout(() => {
        this.hideTypingIndicator();
        const response = SafetyFilters.getGreetingResponse(text);
        this.addMessage('assistant', response.text, response.type);
        this.state.isGenerating = false;
        this.setChatInputsDisabled(false);
      }, 500);
      return;
    }

    // 3. Perform RAG & query Groq API (External Call)
    this.showTypingIndicator();

    // Retrieve context from RAG engine
    const ragResult = RAGEngine.retrieveContext(text);
    
    // Prepare temporary streaming chat bubble
    const streamContainer = this.createEmptyAssistantBubble();
    const bubbleTextContainer = streamContainer.querySelector('.chat-bubble');
    
    let fullResponseText = "";

    // Load last 6 turns for conversation memory
    const history = this.state.messages.slice(-6);

    try {
      // Call Groq API Streaming client
      await GroqClient.streamCompletion({
        query: text,
        context: ragResult.contextString,
        history: history,
        onChunk: (chunk) => {
          this.hideTypingIndicator();
          fullResponseText += chunk;
          // Parse markdown continuously as it grows to ensure premium user experience
          bubbleTextContainer.innerHTML = Utils.parseMarkdown(fullResponseText);
          this.scrollToBottom();
        },
        onComplete: (fullText) => {
          this.hideTypingIndicator();
          const trimmed = fullText.trim();
          if (!trimmed) {
            streamContainer.remove();
            this.addMessage('assistant', "I don't have information on that right now. Please consult a healthcare professional or try a different question.", 'normal');
            this.state.isGenerating = false;
            this.setChatInputsDisabled(false);
            return;
          }
          // Remove temp class since streaming is complete
          streamContainer.classList.remove('temp-stream-bubble');
          // Final parse of the completed stream content
          bubbleTextContainer.innerHTML = Utils.parseMarkdown(fullText);
          // Record completed message into history state
          this.state.messages.push({
            sender: 'assistant',
            text: fullText,
            timestamp: new Date(),
            type: 'normal'
          });
          this.state.isGenerating = false;
          this.setChatInputsDisabled(false);
          this.scrollToBottom();
        },
        onError: (errorMsg) => {
          this.hideTypingIndicator();
          streamContainer.remove(); // Remove temporary streaming bubble
          this.addMessage('assistant', `⚠️ **Connection Error:** ${errorMsg}`, 'warning');
          this.state.isGenerating = false;
          this.setChatInputsDisabled(false);
        }
      });
    } catch (e) {
      console.error("Error during chatbot API call:", e);
      this.hideTypingIndicator();
      if (streamContainer) {
        streamContainer.remove();
      }
      this.addMessage('assistant', `⚠️ **Application Error:** ${e.message}`, 'warning');
      this.state.isGenerating = false;
      this.setChatInputsDisabled(false);
    }
  },

  // Adds a message to the internal history array and renders it to the screen
  addMessage: function (sender, text, type = 'normal') {
    const timestamp = new Date();
    
    // Save to state
    this.state.messages.push({
      sender,
      text,
      timestamp,
      type
    });

    const msgHtml = this.createMessageHtml(sender, text, type, timestamp);
    this.elements.messagesArea.insertAdjacentHTML('beforeend', msgHtml);
    this.scrollToBottom();
  },

  addSystemMessage: function (text) {
    const html = `
      <div style="text-align: center; font-size: 0.75rem; color: var(--color-text-tertiary); padding: var(--spacing-xxs) 0; animation: fadeIn 0.3s;">
        ℹ️ ${Utils.escapeHTML(text)}
      </div>
    `;
    this.elements.messagesArea.insertAdjacentHTML('beforeend', html);
    this.scrollToBottom();
  },

  // HTML template generator for message bubbles
  createMessageHtml: function (sender, text, type, timestamp) {
    const isUser = sender === 'user';
    const formattedText = isUser ? Utils.escapeHTML(text) : Utils.parseMarkdown(text);
    const timeStr = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Bubble classes depending on type (danger for emergency, warning for offensive language)
    let bubbleClass = '';
    if (type === 'emergency') bubbleClass = 'emergency';
    if (type === 'warning') bubbleClass = 'warning';

    if (isUser) {
      return `
        <div class="chat-bubble-container user">
          <div style="display: flex; flex-direction: column;">
            <div class="chat-bubble ${bubbleClass}">${formattedText}</div>
            <span class="chat-timestamp">${timeStr}</span>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="chat-bubble-container assistant">
          <div class="chat-bubble-avatar">MG</div>
          <div style="display: flex; flex-direction: column;">
            <div class="chat-bubble ${bubbleClass}">${formattedText}</div>
            <span class="chat-timestamp">${timeStr}</span>
          </div>
        </div>
      `;
    }
  },

  // Instantiates a blank bubble placeholder in the DOM for tokens to stream into
  createEmptyAssistantBubble: function () {
    const html = `
      <div class="chat-bubble-container assistant temp-stream-bubble">
        <div class="chat-bubble-avatar">MG</div>
        <div style="display: flex; flex-direction: column;">
          <div class="chat-bubble"></div>
          <span class="chat-timestamp">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    `;
    this.elements.messagesArea.insertAdjacentHTML('beforeend', html);
    this.scrollToBottom();
    return this.elements.messagesArea.lastElementChild;
  },

  // Shows the premium animated typing dots
  showTypingIndicator: function () {
    if (this.state.isTyping) return;
    this.state.isTyping = true;
    
    const html = `
      <div id="chat-typing-indicator" class="typing-indicator-container">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    this.elements.messagesArea.insertAdjacentHTML('beforeend', html);
    this.scrollToBottom();
  },

  hideTypingIndicator: function () {
    const indicator = document.getElementById('chat-typing-indicator');
    if (indicator) {
      indicator.remove();
      this.state.isTyping = false;
    }
  },

  // Enable/Disable chat inputs and pills during generation
  setChatInputsDisabled: function (disabled) {
    const el = this.elements;
    el.inputField.disabled = disabled;
    el.sendBtn.disabled = disabled;
    
    // Disable suggested question pills
    const pills = this.elements.messagesArea.querySelectorAll('.chat-suggestion-pill');
    pills.forEach(pill => {
      pill.disabled = disabled;
      if (disabled) {
        pill.style.pointerEvents = 'none';
        pill.style.opacity = '0.6';
      } else {
        pill.style.pointerEvents = 'auto';
        pill.style.opacity = '1';
      }
    });

    if (disabled) {
      el.sendBtn.style.opacity = '0.5';
      el.sendBtn.style.cursor = 'not-allowed';
      el.inputField.style.opacity = '0.7';
    } else {
      el.sendBtn.style.opacity = '1';
      el.sendBtn.style.cursor = 'pointer';
      el.inputField.style.opacity = '1';
      el.inputField.focus();
    }
  },

  // Scrolls message view to bottom smoothly
  scrollToBottom: function () {
    const area = this.elements.messagesArea;
    area.scrollTo({
      top: area.scrollHeight,
      behavior: 'smooth'
    });
  },

  // Toolbar Actions
  clearChatHistory: function () {
    // Open custom confirmation overlay
    this.elements.confirmOverlay.classList.add('open');
  },

  closeConfirmOverlay: function () {
    this.elements.confirmOverlay.classList.remove('open');
  },

  executeClearChat: function () {
    this.state.messages = [];
    this.renderWelcomeState();
    this.closeConfirmOverlay();
    this.addSystemMessage("Conversation cleared.");
  },

  copyLastResponse: function () {
    // Find the last assistant message
    const assistantMsgs = this.state.messages.filter(m => m.sender === 'assistant');
    if (assistantMsgs.length === 0) {
      this.addSystemMessage("No responses to copy yet.");
      return;
    }
    const lastMsg = assistantMsgs[assistantMsgs.length - 1].text;
    Utils.copyToClipboard(lastMsg)
      .then(() => this.addSystemMessage("Last response copied to clipboard."))
      .catch(() => this.addSystemMessage("Failed to copy response."));
  },

  downloadTranscript: function () {
    if (this.state.messages.length === 0) {
      this.addSystemMessage("Cannot download empty transcript.");
      return;
    }
    Utils.downloadTranscript(this.state.messages);
  }
};

// Initialize Chatbot UI
document.addEventListener('DOMContentLoaded', () => {
  ChatbotUI.init();
  // Assign to window for global access
  window.ChatbotUI = ChatbotUI;
});
