import { Button } from "antd";
import React, { useState } from "react";

const ReviewCard = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "John", message: "Hey there!" },
    { id: 2, sender: "You", message: "Hi John! How are you?" },
    { id: 3, sender: "John", message: "I'm good, thanks! How about you?" },
    // Add more messages as needed
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleSendMessage = () => {
    // Simulate sending the message to the server
    const newMessageObj = {
      id: messages.length + 1,
      sender: "You", // You're sending the message
      message: newMessage,
    };

    setMessages([...messages, newMessageObj]);
    setSentMessages([...sentMessages, newMessageObj]);
    setNewMessage("");
  };

  const renderConversation = () => {
    const conversation = [];
    let currentSender = null;

    messages.forEach((message) => {
      if (currentSender !== message.sender) {
        // Start a new conversation section for a new sender
        currentSender = message.sender;
        conversation.push(
          <div key={message.sender} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              {message.sender}'s Conversation
            </h3>
          </div>
        );
      }

      conversation.push(
        <div
          key={message.id}
          className={`mb-2 ${
            selectedMessage?.id === message.id ? "bg-blue-100" : ""
          }`}
        >
          <span className="font-bold">{message.sender}:</span> {message.message}
        </div>
      );
    });

    return conversation;
  };
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-semibold mb-4">Inbox</h2>
          <ul>
            {messages.map((message) => (
              <li
                key={message.id}
                className={`cursor-pointer p-2 mb-2 rounded-md ${
                  selectedMessage?.id === message.id ? "bg-blue-200" : ""
                }`}
                onClick={() => handleSelectMessage(message)}
              >
                {message.sender}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">Message</h2>
          {selectedMessage ? (
            <div>
              <p className="font-bold">{selectedMessage.sender}</p>
              <p>{selectedMessage.message}</p>
            </div>
          ) : (
            <p>Select a message from the inbox.</p>
          )}

          {/* Conversation Section */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Conversation</h3>
            {renderConversation()}
          </div>

          {/* Fixed Footer for Send Message Section */}
          <div className="p-4 bg-gray-200">
            <div className="flex items-center">
              <textarea
                rows="3"
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-md resize-none mr-2"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>

              <Button
                onClick={handleSendMessage}
                type="primary"
                className="bg-primary text-white font-sans font-xl font-semibold hover:bg-white"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
