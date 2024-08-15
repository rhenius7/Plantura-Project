import React from "react";

const ChatbotComponent = () => {
  return (
    <div style={styles.container}>
      <iframe
        title="Dialogflow Chatbot"
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/8d423b83-e863-4dac-a4b1-7ee2d87b745a"
        style={styles.iframe}
      ></iframe>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "50%", 
    right: "0", 
    transform: "translateY(-50%)", 
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff", 
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)", 
    borderRadius: "8px",
  },
  iframe: {
    border: "none",
    borderRadius: "8px",
  },
};

export default ChatbotComponent;
