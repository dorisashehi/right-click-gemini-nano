// Basic background script for Right-Click Gemini Nano
console.log("🚀 Right-Click Gemini Nano extension loaded!");
console.log("📅 Timestamp:", new Date().toISOString());

// This will be expanded in later milestones
chrome.runtime.onInstalled.addListener((details) => {
  console.log("✅ Extension installed successfully");
  console.log("📋 Installation reason:", details.reason);
  console.log("🔢 Previous version:", details.previousVersion);
});

// Add a simple test to verify the script is running
chrome.runtime.onStartup.addListener(() => {
  console.log("🔄 Extension started up");
});

// Test message passing
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("📨 Message received:", message);
  sendResponse({ status: "received" });
});
