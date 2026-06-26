/**
 * safety.js - Local offline safety filters and greeting interceptors.
 * Protects users by bypassing API calls for emergency, offensive, or generic queries.
 */

const SafetyFilters = {
  // 1. Curated list of offensive words/patterns
  OFFENSIVE_KEYWORDS: [
    /\bfuck(ing|er|ed)?\b/i,
    /\bshit(ty|head)?\b/i,
    /\bbitch(es|ing)?\b/i,
    /\basshole(s)?\b/i,
    /\bcunt(s)?\b/i,
    /\bdick(head|s)?\b/i,
    /\bbastard(s)?\b/i,
    /\bslut(s)?\b/i,
    /\bwhore(s)?\b/i,
    /\bfag(got)?\b/i,
    /\bnigger(s)?\b/i,
    /\bretard(ed)?\b/i,
    /\bidiot(ic)?\b/i,
    /\bstupid\b/i,
    /\bhell\b/i,
    /\bgo\s+to\s+hell\b/i,
    /\b(you|your|you\'re)\s+(are\s+|re\s+|r\s+)?(a\s+)?(dog|pig|donkey|monkey|cow|jerk|fool|clown|trash|garbage)\b/i
  ],

  // 2. Curated list of emergency phrases (chest pain, heart attack, stroke, etc.)
  EMERGENCY_KEYWORDS: [
    /\b(chest\s*pain|heart\s*attack|cardiac\s*arrest)\b/i,
    /\b(stroke|brain\s*bleed|aneurysm)\b/i,
    /\b(can\'t\s*breathe|cannot\s*breathe|shortness\s*of\s*breath|difficulty\s*breathing|suffocat(ing|e))\b/i,
    /\b(unconscious(ness)?|passed\s*out|faint(ed|ing)?|not\s*waking|unresponsive)\b/i,
    /\b(bleeding\s*heavily|heavy\s*bleeding|gushing\s*blood|hemorrhage)\b/i,
    /\b(poison(ed|ing)?|swallowed\s*bleach|acid\s*ingestion|toxic\s*exposure)\b/i,
    /\b(suicide|suicidal|kill\s*myself|end\s*my\s*life|self\s*harm)\b/i,
    /\b(anaphylaxis|throat\s*closing|severe\s*allergic\s*reaction)\b/i,
    /\b(choking|choke|blocked\s*airway)\b/i
  ],

  // 3. Curated list of greetings and meta-questions
  GREETING_KEYWORDS: [
    /^\b(hi|hello|hey|greetings|hola|wasup|howdy)\b/i,
    /^\b(thanks|thank\s*you|ty)\b/i,
    /\b(who\s*are\s*you|what\s*is\s*your\s*name|what\s*do\s*you\s*do|what\s*can\s*you\s*do)\b/i,
    /\b(how\s*does\s*this\s*work|how\s*to\s*use|help\s*me)\b/i
  ],

  /**
   * Checks if input contains offensive language.
   */
  isOffensive: function (text) {
    if (!text) return false;
    return this.OFFENSIVE_KEYWORDS.some(regex => regex.test(text));
  },

  /**
   * Checks if input indicates a medical emergency.
   */
  isEmergency: function (text) {
    if (!text) return false;
    return this.EMERGENCY_KEYWORDS.some(regex => regex.test(text));
  },

  /**
   * Checks if input is a greeting or meta-question.
   */
  isGreeting: function (text) {
    if (!text) return false;
    const cleanText = text.trim();
    // Match against whole string greeting or simple match
    return this.GREETING_KEYWORDS.some(regex => regex.test(cleanText));
  },

  /**
   * Returns local response for offensive language.
   */
  getOffensiveResponse: function () {
    return {
      text: "Mind you language or go away!",
      isLocal: true,
      type: "warning"
    };
  },

  /**
   * Returns local response for medical emergencies.
   */
  getEmergencyResponse: function () {
    return {
      text: "This sounds like a medical emergency. Call emergency services (112 / 911) immediately. Do not wait.",
      isLocal: true,
      type: "emergency"
    };
  },

  /**
   * Returns local response for greetings.
   */
  getGreetingResponse: function (text) {
    const cleanText = text.toLowerCase().trim();
    
    if (cleanText.includes("thank")) {
      return {
        text: "You are welcome. I am glad I could assist. Please let me know if you have any other questions about the health topics covered in our catalog.",
        isLocal: true,
        type: "greeting"
      };
    }

    return {
      text: `Hello. I am **MediGuide AI**, your virtual medical education assistant. 

I can answer questions about the **100 conditions** in our database, explain symptoms, share home care recommendations, or provide first aid guidance.

Here are some suggested topics you can ask me about:
- **"What are the warning signs of a Stroke?"**
- **"How do you perform CPR?"**
- **"What is the difference between cold and flu?"**
- **"Home care tips for Acid Reflux/GERD"**

*Disclaimer: I do not diagnose, prescribe, or replace professional care. If you are experiencing severe symptoms, please see a doctor.*`,
        isLocal: true,
        type: "greeting"
      };
  }
};
