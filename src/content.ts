// Content script for Right-Click Gemini Nano
console.log("📄 Content script loaded on:", window.location.href);

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

  return true; // Keep message channel open for async response
});

// Test function to verify content script is working
function testContentScript() {
  console.log("🧪 Content script test function called");
  return "Content script is working!";
}

// Make test function available globally for debugging
(window as any).testContentScript = testContentScript;
