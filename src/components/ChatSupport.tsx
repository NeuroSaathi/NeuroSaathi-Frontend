import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertTriangle, Heart, Phone } from 'lucide-react';

const ChatSupport: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI mental health support assistant. I\'m here to listen and provide guidance. How are you feeling today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [riskLevel, setRiskLevel] = useState('low'); // low, medium, high
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const analyzeMessage = (message: string) => {
    const highRiskKeywords = ['suicide', 'kill myself', 'end it all', 'not worth living', 'hurt myself'];
    const mediumRiskKeywords = ['depressed', 'hopeless', 'can\'t cope', 'overwhelming', 'panic'];
    
    const lowerMessage = message.toLowerCase();
    
    if (highRiskKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return 'high';
    } else if (mediumRiskKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return 'medium';
    }
    return 'low';
  };

  const generateResponse = (userMessage: string, risk: string) => {
    if (risk === 'high') {
      return {
        content: "I'm very concerned about what you've shared. Please know that you're not alone, and your life has value. I strongly encourage you to reach out to a counselor immediately. Would you like me to help you book an urgent session or connect you with emergency support?",
        showEmergency: true
      };
    } else if (risk === 'medium') {
      return {
        content: "I hear that you're going through a difficult time. Your feelings are valid, and it's important to address them. Here are some coping strategies that might help: deep breathing, grounding exercises, or talking to someone you trust. Would you like to explore these techniques or book a session with a counselor?",
        showEmergency: false
      };
    } else {
      const responses = [
        "Thank you for sharing that with me. It sounds like you're being thoughtful about your mental health, which is really positive. Can you tell me more about what's on your mind?",
        "I appreciate you opening up. Self-awareness is an important step in maintaining good mental health. What would you like to focus on today?",
        "That's a great question. Mental wellness is a journey, and it's normal to have ups and downs. How can I support you right now?"
      ];
      return {
        content: responses[Math.floor(Math.random() * responses.length)],
        showEmergency: false
      };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Analyze risk level
    const risk = analyzeMessage(input);
    setRiskLevel(risk);

    // Simulate bot response
    setTimeout(() => {
      const response = generateResponse(input, risk);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: response.content,
        timestamp: new Date(),
        showEmergency: response.showEmergency
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getRiskLevelColor = () => {
    switch (riskLevel) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-green-600 bg-green-50';
    }
  };

  const getRiskLevelText = () => {
    switch (riskLevel) {
      case 'high': return 'High Priority - Immediate Support Needed';
      case 'medium': return 'Medium Priority - Professional Guidance Recommended';
      default: return 'Low Priority - General Support';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">AI Mental Health Support</h2>
                <p className="text-blue-100 text-sm">Confidential • Available 24/7</p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskLevelColor()}`}>
              {getRiskLevelText()}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-md lg:max-w-lg ${message.type === 'user' ? 'order-1' : ''}`}>
                <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' ? 'bg-blue-600' : 'bg-green-100'
                  }`}>
                    {message.type === 'user' ? 
                      <User className="h-4 w-4 text-white" /> : 
                      <Bot className="h-4 w-4 text-green-600" />
                    }
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 opacity-70`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>

                {/* Emergency Actions */}
                {message.showEmergency && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-semibold text-red-800">Immediate Support Options</span>
                    </div>
                    <div className="space-y-2">
                      <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Call Emergency Helpline</span>
                      </button>
                      <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                        <Heart className="h-4 w-4" />
                        <span>Book Urgent Counselor Session</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-green-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Share what's on your mind... (Your conversation is confidential)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Send</span>
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            This AI assistant provides general support. For emergencies, please contact professional help immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;