import React from "react";
import { useSelectedText } from "../hooks/useSelectedText";
import AIProcessingPopup from "./AIProcessingPopup";

const TextDisplay: React.FC = () => {
  const { selectedText, action, isPopupOpen, closePopup } = useSelectedText();

  return (
    <>
      {isPopupOpen && (
        <AIProcessingPopup
          action={action}
          text={selectedText}
          onClose={closePopup}
        />
      )}
    </>
  );
};

export default TextDisplay;
