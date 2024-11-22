import React from "react";

const ChatbotComponent = ({ src }) => {
  return (
    <div style={styles.container}>
      <iframe
        title="Dialogflow Chatbot"
        width="350"
        height="430"
        allow="microphone;"
        src={src}
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
