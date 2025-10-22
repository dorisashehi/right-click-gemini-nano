# 🧩 Right-Click Gemini Nano

AI-powered text processing using Chrome's built-in Gemini Nano model. Right-click any selected text to get AI-powered assistance.

## 🚀 Installation

### Development Installation

1. **Clone or download this repository**
2. **Install dependencies:** `npm install`
3. **Build the extension:** `npm run build:full`
4. **Open Chrome and go to** `chrome://extensions/`
5. **Enable "Developer mode"** (toggle in top right)
6. **Click "Load unpacked"** and select the `dist` folder
7. **Verify installation** - you should see "Right-Click Gemini Nano" in your extensions list

### Verification Steps

- ✅ Extension appears in Chrome's extension manager
- ✅ No errors in the extension list
- ✅ Console shows "Extension loaded" message (open DevTools F12)

## 📋 Current Status

**Milestone 1: Basic Extension Structure** ✅ COMPLETED

- Basic Chrome extension that loads without errors
- Simple background service worker
- Extension icon and branding

**Milestone 2: Project Setup with React + TypeScript** ✅ COMPLETED

- Modern development environment with React + TypeScript + Vite
- Tailwind CSS for styling
- React popup component with modern UI
- Content script integration
- Fast build system with Vite and npm scripts

## 🛠️ Technology Stack

- **Frontend/UI**: React.js + TypeScript
- **Extension Framework**: Chrome Extensions Manifest V3
- **Language**: TypeScript
- **AI APIs**: Chrome AI APIs (Prompt, Summarizer, Translator, Rewriter, Writer)
- **Build Tools**: Vite + TypeScript Compiler
- **Styling**: Tailwind CSS

## 📁 Project Structure

```
right-click-gemini-nano/
├── src/
│   ├── popup.tsx         # React popup component
│   ├── content.ts        # Content script
│   └── index.css         # Tailwind CSS styles
├── popup.html            # Popup HTML template
├── dist/                 # Built extension (generated)
├── manifest.json         # Extension configuration
├── background.js         # Service worker
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite build configuration
├── tailwind.config.js    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
├── icons/
│   └── icon.svg         # Extension icon
├── README.md            # This file
├── MILESTONE_PLAN.md    # Development roadmap
└── MILESTONE_2_TEST.md  # Testing instructions
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
