import { useState, useEffect } from "react";

interface SelectedTextState {
  text: string;
  action: string;
  isPopupOpen: boolean;
}

export const useSelectedText = () => {
  const [state, setState] = useState<SelectedTextState>({
    text: "",
    action: "",
    isPopupOpen: false,
  });

  // Listen for popup state changes from the content script
  useEffect(() => {
    const geminiNanoPopup = (window as any).geminiNanoPopup;

    if (!geminiNanoPopup) {
      console.log("⚠️ Gemini Nano popup not available yet");
      return;
    }

    // Get initial state
    const initialState = geminiNanoPopup.getState();
    setState({
      text: initialState.text || "",
      action: initialState.action || "",
      isPopupOpen: initialState.isOpen || false,
    });

    // Subscribe to state changes
    const unsubscribe = geminiNanoPopup.subscribe((newState: any) => {
      console.log("🔄 Popup state updated:", newState);
      setState({
        text: newState.text || "",
        action: newState.action || "",
        isPopupOpen: newState.isOpen || false,
      });
    });

    return unsubscribe;
  }, []);

  const closePopup = () => {
    const geminiNanoPopup = (window as any).geminiNanoPopup;
    if (geminiNanoPopup) {
      geminiNanoPopup.closePopup();
    }
  };

  const openPopup = (text: string, action: string) => {
    const geminiNanoPopup = (window as any).geminiNanoPopup;
    if (geminiNanoPopup) {
      geminiNanoPopup.updatePopupState({
        isOpen: true,
        text,
        action,
      });
    }
  };

  return {
    selectedText: state.text,
    action: state.action,
    isPopupOpen: state.isPopupOpen,
    closePopup,
    openPopup,
  };
};
