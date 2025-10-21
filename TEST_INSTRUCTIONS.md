# 🧪 Milestone 1 Testing Instructions

## ✅ Verification Checklist

### 1. Load Extension in Chrome

- [ ] Open Chrome browser
- [ ] Navigate to `chrome://extensions/`
- [ ] Enable "Developer mode" (toggle in top right corner)
- [ ] Click "Load unpacked"
- [ ] Select the `right-click-gemini-nano` folder
- [ ] Verify "Right-Click Gemini Nano" appears in the extensions list

### 2. Check Extension Details

- [ ] Extension shows version "1.0.0"
- [ ] Description reads: "AI-powered text processing using Chrome's built-in Gemini Nano model"
- [ ] Extension icon is visible (blue circle with AI brain icon)
- [ ] No error messages in the extension list

### 3. Verify Background Script

- [ ] Go to `chrome://extensions/`
- [ ] Find "Right-Click Gemini Nano" extension
- [ ] Click on "Service Worker" link (next to your extension)
- [ ] This opens DevTools for the background script
- [ ] Go to Console tab in those DevTools
- [ ] Look for message: "🚀 Right-Click Gemini Nano extension loaded!"
- [ ] Look for message: "✅ Extension installed successfully"
- [ ] Look for timestamp and installation details

### 4. Test Extension Persistence

- [ ] Reload the extension (click the reload button in extensions page)
- [ ] Check console again for the same messages
- [ ] Extension should remain loaded after browser restart

## 🎯 Success Criteria

**Milestone 1 is complete when:**

- ✅ Extension loads without errors
- ✅ Appears in Chrome's extension manager
- ✅ Console shows proper loading messages
- ✅ Extension icon is visible
- ✅ No JavaScript errors in console

## 🚨 Troubleshooting

**If extension doesn't load:**

1. Check `manifest.json` syntax (should be valid JSON)
2. Verify all files are in correct locations
3. Check Chrome's extension console for specific errors
4. Try refreshing the extensions page

**If console messages don't appear:**

1. Make sure DevTools Console is open
2. Try reloading the extension
3. Check if background script is running (look for "Service Worker" in extensions page)

## 🎉 Next Steps

Once Milestone 1 is verified, proceed to **Milestone 2: Project Setup with React + TypeScript**
