# MediGuide — Medical Information Portal & RAG Chatbot

MediGuide is a premium, client-side medical information portal and AI-powered RAG (Retrieval-Augmented Generation) chatbot. Built using **Microsoft Fluent 2 design principles** and a **Windows 11-inspired aesthetic**, it provides high-quality, plain-language summaries of common medical conditions and immediate first aid instructions. 

The application runs 100% on the client side (HTML, CSS, Vanilla JavaScript). It features a local, weighted search engine and a client-side RAG pipeline that communicates directly with the Groq API to stream context-aware answers safely and anonymously.

---

## Key Features

- **Fluent Green & Glassmorphism:** Sleek mint and moss-green acrylic panels, responsive grids, Segoe UI typography, and subtle micro-animations.
- **Single Page Application (SPA):** Hash-based routing preserves active chatbot sessions and application state across page changes.
- **Client-Side RAG Engine:** Locally scores queries, selects the top 3 matching documents, and compresses them under a strict 1,200 token limit.
- **Groq API Streaming:** Streams completions token-by-token in real time using Server-Sent Events (SSE).
- **Cure & Management Plans:** Highlights whether a condition is Curable or requires Chronic Management, with clear, step-by-step action plans.
- **Offline Safety Guardrails:** Uses local regex matching to intercept toxic inputs, trigger red-alert emergency notifications, and handle greetings instantly without hitting the API.
- **40 Core Health Conditions:** Rich, educational summaries covering infectious, digestive, chronic, mental, skin, and miscellaneous conditions.
- **100% Private:** No backend, no cookies, no tracking. All computations and transcripts stay local to your browser.

---

## Getting Started

### 1. Run Locally
Since MediGuide is a static client-side application, you can run it simply by opening `index.html` directly in any modern web browser or using a local static file server.

To run with a live server:
1. Open a terminal in the project directory.
2. Run a simple HTTP server (e.g., Python, Node, or VS Code Live Server):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node (npx)
   npx serve .
   ```
3. Open `http://localhost:8000` (or the provided port) in your browser.

### 2. Configure Your Groq API Key
To use the AI Chat Assistant:
1. Open the Chat Panel by clicking the floating chat icon 💬 at the bottom-right of the window.
2. Click the **Settings Gear Icon** ⚙️ at the top-right of the chat header.
3. Paste your personal **Groq API Key** (starts with `gsk_`).
   - *Note: You can generate a key for free in the [Groq Console](https://console.groq.com/).*
4. Click **Save Key**. The key is stored securely in your browser's `localStorage` and is never sent to any third-party server except Groq's official API endpoint.

---

## How to Extend the Knowledge Base

The database of conditions is stored in `js/knowledgeBase.js`. To add a new disease, append a new object to the `knowledgeBase` array following the strict schema below.

### Disease Schema Template

```javascript
{
  id: "unique-slug-id",
  title: "Display Title of Condition",
  category: "infectious" | "chronic" | "digestive" | "mental" | "skin" | "other",
  keywords: ["list", "of", "search", "synonyms", "for", "matching"],
  summary: "A 1–2 sentence description shown in catalog cards and search results.",
  content: {
    overview: "A 2-3 sentence introductory summary explaining the condition.",
    symptoms: [
      "Symptom bullet point 1",
      "Symptom bullet point 2",
      "Symptom bullet point 3"
    ],
    causes: "Paragraph explaining the physiological causes and transmission vectors.",
    riskFactors: [
      "Risk factor bullet point 1",
      "Risk factor bullet point 2"
    ],
    complications: "Paragraph detailing the risks and complications if left untreated.",
    diagnosis: "Paragraph describing how clinical tests and doctors confirm the condition.",
    treatment: "Paragraph summarizing approved treatments, therapies, and OTC drugs (no dosages).",
    homeCare: "Paragraph explaining medically accepted supportive care routines.",
    prevention: "Paragraph detailing preventative practices, vaccinations, or lifestyles.",
    whenToSeeDoctor: "Paragraph defining when to schedule a clinical appointment.",
    emergencySigns: [
      "RED FLAG EMERGENCY WARNING SIGN 1 (Call 911/112 immediately)",
      "RED FLAG EMERGENCY WARNING SIGN 2"
    ],
    relatedConditions: ["other-disease-id-1", "other-disease-id-2"] // must match existing IDs in the array
  }
}
```

### Worked Example

To add **Gout** (a form of inflammatory arthritis), append this block to the array in [knowledgeBase.js](file:///c:/Users/Aaqib/Desktop/Training/MediGuide/js/knowledgeBase.js):

```javascript
{
  id: "gout",
  title: "Gout",
  category: "chronic",
  keywords: ["gout", "uric acid", "joint pain", "big toe", "arthritis flare"],
  summary: "A painful form of inflammatory arthritis characterized by sudden, severe attacks of joint pain, swelling, and redness.",
  content: {
    overview: "Gout is a common and complex form of arthritis that can affect anyone. It is characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in one or more joints, most often in the big toe.",
    symptoms: [
      "Intense joint pain, usually peaking within the first 12 to 24 hours",
      "Lingering discomfort and stiffness in the joint lasting from a few days to a few weeks",
      "Inflammation, swelling, and extreme redness around the affected joint",
      "Limited range of motion in the joint as the condition progresses"
    ],
    causes: "Gout is caused by the accumulation of urate crystals in the joint, which triggers intense inflammation. These crystals form when you have high levels of uric acid in your blood, which the body produces when breaking down purines found naturally in the body and certain foods.",
    riskFactors: [
      "Diet rich in red meat, shellfish, and sugary sodas",
      "Frequent alcohol consumption, particularly beer",
      "Obesity and high blood pressure",
      "Family history of gout",
      "Certain medications, such as thiazide diuretics"
    ],
    complications: "If left untreated, recurrent gout attacks can lead to progressive joint damage, the formation of hard nodules under the skin called tophi, and an increased risk of kidney stones due to uric acid accumulation.",
    diagnosis: "Gout is diagnosed by analyzing joint fluid under a microscope to detect urate crystals. Doctors may also perform blood tests to measure uric acid levels, or use ultrasound imaging to detect crystal deposits in joints.",
    treatment: "Treatment focuses on managing acute flare-ups and lowering uric acid levels to prevent future attacks. Doctors prescribe medications like colchicine, NSAIDs, or corticosteroids for acute pain, and long-term drugs like allopurinol to lower uric acid.",
    homeCare: "During an attack, rest and elevate the affected joint. Apply ice packs wrapped in towels for 15-20 minutes at a time to reduce swelling. Avoid pressure from blankets or clothing on the tender joint, and drink plenty of water.",
    prevention: "Limit consumption of high-purine foods like red meat and seafood. Avoid sugary drinks and limit alcohol intake. Maintain a healthy body weight and stay well-hydrated throughout the day.",
    whenToSeeDoctor: "Schedule a doctor's visit if you experience sudden, severe joint pain, particularly if it is accompanied by a fever or the joint feels hot to the touch, indicating a potential infection.",
    emergencySigns: [
      "An extremely painful, swollen joint accompanied by a high fever and chills, which may indicate joint sepsis.",
      "Inability to move the limb at all or sudden deformity in the joint."
    ],
    relatedConditions: ["arthritis", "obesity", "hypertension"]
  }
}
```

---

## How to Customize Safety Filters

Safety rules and offline intercepts are handled in `js/safety.js`.

### Adding New Offensive Words
To add a new word to the profanity filter, append a regular expression pattern to the `OFFENSIVE_KEYWORDS` array:
```javascript
OFFENSIVE_KEYWORDS: [
  // Existing patterns...
  /\b(new-offensive-word|alternative-slur)\b/i
]
```

### Adding New Emergency Phrases
If you want to intercept specific phrases and immediately show a red emergency alert, add a regex pattern to the `EMERGENCY_KEYWORDS` array:
```javascript
EMERGENCY_KEYWORDS: [
  // Existing patterns...
  /\b(chest\s*tightness|crushing\s*headache|numbness\s*in\s*arm)\b/i
]
```

---

## Deployment

Since MediGuide is a 100% static application, it can be hosted for free on any static provider in under a minute.

### Option A: Netlify (Drag-and-Drop)
1. Build the folder or simply collect the project directory.
2. Go to [app.netlify.com](https://app.netlify.com).
3. Drag and drop the root folder (`MediGuide`) into the Netlify dropzone.
4. Your site is live instantly.

### Option B: GitHub Pages
1. Push the project code to a public GitHub repository.
2. Go to the repository **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder, then click **Save**.

### Option C: Vercel CLI
1. Install Vercel CLI: `npm install -g vercel`.
2. Run `vercel` in the project root directory and follow the prompts.

---

## Known Limitations

- **Client-Side Storage:** API keys are stored in `localStorage`. If you clear your browser's site data, you will need to re-enter your key.
- **Token Estimation:** Token usage is estimated locally based on character counts (1 token ≈ 4 characters). Under rare circumstances, very dense text might slightly differ from Groq's tokenization.
- **Model Availability:** Streaming relies on direct browser-to-Groq CORS requests. If your network blocks Groq or if you hit API rate limits, the chatbot will display a connection warning.
- **Safety Boundaries:** Local keyword matches are highly effective but rely on exact pattern matches. Advanced, nuanced prompts that attempt to bypass safety constraints are governed by the LLM system prompt, which strictly forbids diagnosing or ignoring rules.
