// Content script for Right-Click Gemini Nano
console.log("📄 Content script loaded on:", window.location.href);

// Send a ready message to the background script
chrome.runtime.sendMessage({ type: "CONTENT_SCRIPT_READY" }, (response) => {
  if (chrome.runtime.lastError) {
    console.log(
      "⚠️ Could not send ready message:",
      chrome.runtime.lastError.message
    );
  } else {
    console.log("✅ Content script ready message sent");
  }
});

// This will be expanded in later milestones
// For now, just log that the content script is working

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📨 Content script received message:", message);

  if (message.type === "GET_SELECTED_TEXT") {
    const selectedText = window.getSelection()?.toString() || "";
    console.log("📝 Selected text:", selectedText);
    sendResponse({ text: selectedText });
  }

  if (message.type === "AI_ACTION_TRIGGERED") {
    console.log("🤖 AI Action triggered:", message.action);
    console.log("📝 Text to process:", message.text);

    // For now, just show a simple notification
    // In the next milestone, this will open a popup with AI processing
    showAIActionNotification(message.action, message.text);

    sendResponse({ status: "AI action received" });
  }

  return true; // Keep message channel open for async response
});

// Show a simple notification for AI actions (placeholder)
function showAIActionNotification(action: string, text: string) {
  // Create a simple notification element
  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4285F4;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: system-ui, sans-serif;
    font-size: 14px;
    max-width: 300px;
    word-wrap: break-word;
  `;

  const actionEmojis: { [key: string]: string } = {
    summarize: "📝",
    explain: "💡",
    translate: "🌐",
    improve: "✨",
  };

  const actionNames: { [key: string]: string } = {
    summarize: "Summarize",
    explain: "Explain like I'm 5",
    translate: "Translate",
    improve: "Improve writing",
  };

  notification.innerHTML = `
    <div style="font-weight: 600; margin-bottom: 4px;">
      ${actionEmojis[action] || "🤖"} ${actionNames[action] || action}
    </div>
    <div style="font-size: 12px; opacity: 0.9;">
      "${text.substring(0, 100)}${text.length > 100 ? "..." : ""}"
    </div>
  `;

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Test function to verify content script is working
function testContentScript() {
  console.log("🧪 Content script test function called");
  return "Content script is working!";
}

// Make test function available globally for debugging
(window as any).testContentScript = testContentScript;
