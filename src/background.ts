// Background script for Right-Click Gemini Nano
console.log("🚀 Right-Click Gemini Nano extension loaded!");
console.log("📅 Timestamp:", new Date().toISOString());

// Context menu items configuration
const contextMenuItems = [
  {
    id: "summarize",
    title: "📝 Summarize",
    contexts: ["selection"] as chrome.contextMenus.ContextType[],
  },
  {
    id: "explain",
    title: "💡 Explain like I'm 5",
    contexts: ["selection"] as chrome.contextMenus.ContextType[],
  },
  {
    id: "translate",
    title: "🌐 Translate",
    contexts: ["selection"] as chrome.contextMenus.ContextType[],
  },
  {
    id: "improve",
    title: "✨ Improve writing",
    contexts: ["selection"] as chrome.contextMenus.ContextType[],
  },
];

// Create context menu when extension is installed
chrome.runtime.onInstalled.addListener((details) => {
  console.log("✅ Extension installed successfully");
  console.log("📋 Installation reason:", details.reason);
  console.log("🔢 Previous version:", details.previousVersion);

  // Remove existing context menu items
  chrome.contextMenus.removeAll(() => {
    console.log("🧹 Removed existing context menu items");

    // Create new context menu items
    contextMenuItems.forEach((item) => {
      chrome.contextMenus.create(
        {
          id: item.id,
          title: item.title,
          contexts: item.contexts,
        },
        () => {
          console.log(`✅ Created context menu item: ${item.title}`);
        }
      );
    });
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("🖱️ Context menu clicked:", info);

  if (!info.selectionText) {
    console.log("❌ No text selected");
    return;
  }

  const selectedText = info.selectionText.trim();
  console.log("📝 Selected text:", selectedText);

  // Handle different menu actions
  switch (info.menuItemId) {
    case "summarize":
      console.log("📝 Summarize action triggered");
      handleAIAction("summarize", selectedText, tab);
      break;

    case "explain":
      console.log("💡 Explain action triggered");
      handleAIAction("explain", selectedText, tab);
      break;

    case "translate":
      console.log("🌐 Translate action triggered");
      handleAIAction("translate", selectedText, tab);
      break;

    case "improve":
      console.log("✨ Improve writing action triggered");
      handleAIAction("improve", selectedText, tab);
      break;

    default:
      console.log("❓ Unknown menu item:", info.menuItemId);
  }
});

// Handle AI actions (placeholder for now)
function handleAIAction(
  action: string,
  text: string,
  tab: chrome.tabs.Tab | undefined
) {
  console.log(`🤖 AI Action: ${action} for text: "${text}"`);

  // For now, just show an alert with the action
  // In the next milestone, this will connect to Chrome AI APIs
  if (tab?.id) {
    chrome.tabs.sendMessage(
      tab.id,
      {
        type: "AI_ACTION_TRIGGERED",
        action: action,
        text: text,
      },
      (response) => {
        if (chrome.runtime.lastError) {
          console.log(
            "⚠️ Could not send message to content script:",
            chrome.runtime.lastError.message
          );
          console.log(
            "💡 This is normal - content script may not be loaded on this page yet"
          );
          // The notification will still work because the content script is loaded via manifest
        } else {
          console.log("📨 Response from content script:", response);
        }
      }
    );
  }
}

// Add a simple test to verify the script is running
chrome.runtime.onStartup.addListener(() => {
  console.log("🔄 Extension started up");
});

// Test message passing
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📨 Message received:", message);

  if (message.type === "CONTENT_SCRIPT_READY") {
    console.log("✅ Content script is ready on tab:", sender.tab?.id);
    sendResponse({ status: "ready acknowledged" });
  } else {
    sendResponse({ status: "received" });
  }
});
