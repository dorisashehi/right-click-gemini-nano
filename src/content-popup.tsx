import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TextDisplay from "./components/TextDisplay";

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

// Create a container for the React popup
const createPopupContainer = () => {
  const container = document.createElement("div");
  container.id = "gemini-nano-popup-container";
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2147483647;
  `;
  document.body.appendChild(container);
  return container;
};

// Initialize React popup
const initializePopup = () => {
  let container = document.getElementById("gemini-nano-popup-container");

  if (!container) {
    container = createPopupContainer();
  }

  const root = createRoot(container);
  root.render(<TextDisplay />);

  console.log("✅ React popup initialized");
};

// Global state for the popup
let popupState = {
  isOpen: false,
  action: "",
  text: "",
  listeners: [] as Array<(state: any) => void>,
};

// Function to update popup state and notify listeners
const updatePopupState = (newState: any) => {
  popupState = { ...popupState, ...newState };
  popupState.listeners.forEach((listener) => listener(popupState));
};

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

    // Update the popup state
    updatePopupState({
      isOpen: true,
      action: message.action,
      text: message.text,
    });

    sendResponse({ status: "AI action received" });
  }

  return true; // Keep message channel open for async response
});

// Export functions for the React component to use
(window as any).geminiNanoPopup = {
  getState: () => popupState,
  subscribe: (listener: (state: any) => void) => {
    popupState.listeners.push(listener);
    return () => {
      popupState.listeners = popupState.listeners.filter((l) => l !== listener);
    };
  },
  closePopup: () => {
    updatePopupState({ isOpen: false });
  },
  updatePopupState: updatePopupState,
};

// Initialize the popup when the script loads
initializePopup();

// Test function to verify content script is working
function testContentScript() {
  console.log("🧪 Content script test function called");
  return "Content script is working!";
}

// Test function to manually trigger popup
function testPopup() {
  console.log("🧪 Testing popup manually");
  updatePopupState({
    isOpen: true,
    action: "summarize",
    text: "This is a test text to see if the popup works correctly.",
  });
  return "Popup test triggered!";
}

// Make test functions available globally for debugging
(window as any).testContentScript = testContentScript;
(window as any).testPopup = testPopup;
