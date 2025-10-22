import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

interface PopupProps {}

const Popup: React.FC<PopupProps> = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gemini-light to-white">
      {/* Header */}
      <div className="bg-gemini-blue text-white p-4 rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gemini-blue"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Right-Click Gemini Nano</h1>
            <p className="text-sm opacity-90">AI-powered text processing</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 space-y-4">
        {/* Welcome Message */}
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Welcome! 🎉
          </h2>
          <p className="text-gray-600 text-sm">
            This extension is now set up with React + TypeScript + Tailwind CSS.
          </p>
        </div>

        {/* Instructions */}
        <div className="card">
          <h3 className="font-medium text-gray-900 mb-2">How to use:</h3>
          <ol className="text-sm text-gray-600 space-y-1">
            <li>1. Select any text on a webpage</li>
            <li>2. Right-click to see AI options</li>
            <li>3. Choose your preferred AI action</li>
            <li>4. Get instant AI-powered results</li>
          </ol>
        </div>

        {/* Status */}
        <div className="card">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Extension is ready</span>
          </div>
        </div>

        {/* Features Coming Soon */}
        <div className="card">
          <h3 className="font-medium text-gray-900 mb-2">
            Features coming soon:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Text summarization</li>
            <li>• Explain like I'm 5</li>
            <li>• Translation</li>
            <li>• Writing improvement</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 border-t">
        <p className="text-xs text-gray-500 text-center">
          Milestone 2: React + TypeScript Setup ✅
        </p>
      </div>
    </div>
  );
};

// Render the popup
const container = document.getElementById("popup-root");
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
} else {
  console.error("Popup root element not found");
}
