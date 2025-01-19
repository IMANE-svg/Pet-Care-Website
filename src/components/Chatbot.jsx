import  { useState } from "react";
import "./Chatbot.css";
import care from "../assets/care.png";
import health from "../assets/health.png";

import illnes from "../assets/illnes.png"



// Sample articles
const articles = [
  {
    title: "How to Care for Your Pets",
    content:
      "Provide your pets with a clean environment, regular meals, and plenty of love and exercise. Don't forget annual vet checkups!",
    image: care,
  },
  {
    title: "Recognizing Common Pet Illnesses",
    content:
      "Look out for unusual behaviors such as lack of appetite, lethargy, or abnormal discharge. Contact a vet immediately if symptoms persist.",
    image: illnes,
  },
  {
    title: "Tips for Keeping Pets Healthy",
    content:
      "Feed a balanced diet, ensure your pet gets daily exercise, and keep vaccinations up to date to prevent diseases.",
    image: health,
  },
];

// Chatbot component
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages([...messages, { sender: "user", text: userMessage }]);
      // Simulated chatbot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
        { sender: "bot", text: "Thank you for your question! A vet will respond soon." },
      ]);
      setUserMessage("");
    }
  };

  return (
    <div className="chatbot-page">
        
      <h1>Pet Health Guide</h1>

      {/* Articles Section */}
      <div className="articles">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <img src={article.image} alt={article.title} className="article-image" />
            <div>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chatbot Section */}
      <div className="chatbot">
        <h2>Pet Health Chatbot</h2>
        <div className="chatbox">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask your question..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;