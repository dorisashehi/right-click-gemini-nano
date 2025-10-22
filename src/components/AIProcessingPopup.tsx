import React, { useState, useEffect } from "react";

interface AIProcessingPopupProps {
  action: string;
  text: string;
  onClose: () => void;
}

const AIProcessingPopup: React.FC<AIProcessingPopupProps> = ({
  action,
  text,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setIsVisible(true);
  }, []);

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

  const actionDescriptions: { [key: string]: string } = {
    summarize: "Create a concise summary of the selected text",
    explain: "Explain the content in simple terms",
    translate: "Translate the text to another language",
    improve: "Enhance the writing style and clarity",
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gemini-blue text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{actionEmojis[action] || "🤖"}</div>
              <div>
                <h2 className="text-lg font-semibold">
                  {actionNames[action] || action}
                </h2>
                <p className="text-sm opacity-90">
                  {actionDescriptions[action] || "Process the selected text"}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Selected Text */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Selected Text:
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 max-h-32 overflow-y-auto">
              <p className="text-sm text-gray-800 whitespace-pre-wrap">
                {text}
              </p>
            </div>
          </div>

          {/* Processing Status */}
          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gemini-blue"></div>
              <span className="text-gray-600">
                Processing with Gemini Nano...
              </span>
            </div>
          </div>

          {/* Placeholder for AI Response */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-800">
                AI Response
              </span>
            </div>
            <p className="text-sm text-blue-700">
              This is where the AI-generated response will appear. In the next
              milestone, we'll connect to Chrome's AI APIs to get real
              responses.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Close
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                // Placeholder for copy functionality
                navigator.clipboard.writeText(text);
                alert("Text copied to clipboard!");
              }}
            >
              Copy Text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIProcessingPopup;
