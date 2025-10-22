# 🧪 Milestone 3 Testing Instructions

## ✅ Verification Checklist

### 1. Build the Extension

- [ ] Run `npm run build:full` in the terminal
- [ ] Verify no build errors
- [ ] Check that `dist/` folder is created with all files

### 2. Load Extension in Chrome

- [ ] Go to `chrome://extensions/`
- [ ] Enable "Developer mode" (toggle in top right)
- [ ] Click "Load unpacked" and select the `dist` folder
- [ ] **OR** reload the existing extension (click reload button)

### 3. Test Context Menu Creation

- [ ] Go to `chrome://extensions/`
- [ ] Find your extension
- [ ] Click "Service Worker" link
- [ ] In Console tab, should see:
  - "🚀 Right-Click Gemini Nano extension loaded!"
  - "✅ Extension installed successfully"
  - "🧹 Removed existing context menu items"
  - "✅ Created context menu item: 📝 Summarize"
  - "✅ Created context menu item: 💡 Explain like I'm 5"
  - "✅ Created context menu item: 🌐 Translate"
  - "✅ Created context menu item: ✨ Improve writing"

### 4. Test Context Menu Appearance

- [ ] Go to any website (e.g., google.com, wikipedia.org)
- [ ] Select some text on the page
- [ ] Right-click on the selected text
- [ ] Should see context menu with 4 AI options:
  - 📝 Summarize
  - 💡 Explain like I'm 5
  - 🌐 Translate
  - ✨ Improve writing

### 5. Test Context Menu Actions

- [ ] Select text and right-click
- [ ] Click on "📝 Summarize"
- [ ] Should see blue notification in top-right corner showing:

  - "📝 Summarize"
  - Preview of selected text
  - Notification disappears after 3 seconds

- [ ] Test other menu items:
  - [ ] "💡 Explain like I'm 5" → "💡 Explain like I'm 5"
  - [ ] "🌐 Translate" → "🌐 Translate"
  - [ ] "✨ Improve writing" → "✨ Improve writing"

### 6. Test Console Logging

- [ ] Open DevTools Console (F12) on any webpage
- [ ] Should see: "📄 Content script loaded on: [URL]"
- [ ] Should see: "✅ Content script ready message sent"
- [ ] Select text and use context menu
- [ ] Should see logs:
  - "🖱️ Context menu clicked: [object]"
  - "📝 Selected text: [your text]"
  - "🤖 AI Action: [action] for text: [your text]"
  - "📨 Content script received message: [object]"
  - "🤖 AI Action triggered: [action]"

### 7. Test Error Handling

- [ ] If you see "⚠️ Could not send message to content script" - this is normal
- [ ] The notification should still appear even with this message
- [ ] This happens when the content script isn't fully loaded yet
- [ ] The error is handled gracefully and doesn't break functionality

### 8. Test Context Menu Only Appears with Selection

- [ ] Right-click on empty space (no text selected)
- [ ] Context menu should NOT show AI options
- [ ] Select text and right-click
- [ ] AI options should appear

## 🎯 Success Criteria

**Milestone 3 is complete when:**

- ✅ Context menu appears when text is selected
- ✅ Context menu shows 4 AI options with icons
- ✅ Clicking menu items shows notifications
- ✅ Console logs show proper message flow
- ✅ Context menu only appears with text selection
- ✅ All TypeScript code compiles without errors

## 🚨 Troubleshooting

**If context menu doesn't appear:**

1. Check that extension is enabled in `chrome://extensions/`
2. Reload the extension (click reload button)
3. Check Service Worker console for errors
4. Try refreshing the webpage

**If menu items don't work:**

1. Check DevTools Console for JavaScript errors
2. Verify content script is loaded (should see "📄 Content script loaded on: [URL]")
3. Check that text is actually selected before right-clicking

**If notifications don't appear:**

1. Check if website blocks notifications
2. Try on a different website
3. Check Console for errors in content script

## 🎉 Next Steps

Once Milestone 3 is verified, proceed to **Milestone 4: Text Capture & React Popup**

## 📁 Expected File Structure After Build

```
dist/
├── manifest.json
├── background.js        # Now includes context menu logic
├── content.js          # Now includes notification system
├── popup.html
├── popup.js
├── assets/
│   └── popup.css
└── icons/
    └── icon.svg
```
