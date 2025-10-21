# 🧩 Right-Click Gemini Nano

AI-powered text processing using Chrome's built-in Gemini Nano model. Right-click any selected text to get AI-powered assistance.

## 🚀 Installation

### Development Installation

1. **Clone or download this repository**
2. **Open Chrome and go to** `chrome://extensions/`
3. **Enable "Developer mode"** (toggle in top right)
4. **Click "Load unpacked"** and select the `right-click-gemini-nano` folder
5. **Verify installation** - you should see "Right-Click Gemini Nano" in your extensions list

### Verification Steps

- ✅ Extension appears in Chrome's extension manager
- ✅ No errors in the extension list
- ✅ Console shows "Extension loaded" message (open DevTools F12)

## 📋 Current Status

**Milestone 1: Basic Extension Structure** ✅ COMPLETED

- Basic Chrome extension that loads without errors
- Simple background service worker
- Extension icon and branding

## 🛠️ Technology Stack

- **Frontend/UI**: React.js + TypeScript
- **Extension Framework**: Chrome Extensions Manifest V3
- **Language**: TypeScript
- **AI APIs**: Chrome AI APIs (Prompt, Summarizer, Translator, Rewriter, Writer)
- **Build Tools**: Webpack + TypeScript Compiler
- **Styling**: Tailwind CSS

## 📁 Project Structure

```
right-click-gemini-nano/
├── manifest.json          # Extension configuration
├── background.js          # Service worker
├── icons/
│   └── icon.svg          # Extension icon
├── README.md             # This file
└── MILESTONE_PLAN.md     # Development roadmap
```

## 🎯 Next Steps

See `MILESTONE_PLAN.md` for the complete development roadmap.

**Next Milestone**: Set up React + TypeScript + Webpack development environment.

## 📝 Development Notes

This extension is being built incrementally with small, verifiable milestones. Each milestone builds on the previous one and can be tested immediately.

## 🔧 Troubleshooting

If the extension doesn't load:

1. Check that all files are in the correct location
2. Ensure `manifest.json` is valid JSON
3. Check Chrome's extension console for errors
4. Try reloading the extension in `chrome://extensions/`
# right-click-gemini-nano
