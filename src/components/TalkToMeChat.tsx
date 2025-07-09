'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Smile, Paperclip, MoreVertical, X, Minimize2, Maximize2, MessageCircle, ArrowUp } from 'lucide-react';

const TalkToMeChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Привет! Добро пожаловать в Talk to Me 👋",
      sender: "bot",
      timestamp: new Date(Date.now() - 60000),
      avatar: "🤖"
    },
    {
      id: 2,
      text: "Как дела? Готов к общению?",
      sender: "bot", 
      timestamp: new Date(Date.now() - 30000),
      avatar: "🤖"
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [onlineUsers] = useState(['Вы', 'Анна', 'Максим', 'Елена']);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [newMessages, setNewMessages] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showPageScrollTop, setShowPageScrollTop] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const emojis = ['😀', '😂', '😍', '🤔', '👍', '👎', '❤️', '🔥', '💯', '🎉', '😢', '😡', '🤝', '🚀', '⭐'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    if (isOpen) {
      messagesContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop } = messagesContainerRef.current;
      setShowScrollTop(scrollTop > 20);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen && messages.length > 2) {
      setNewMessages(messages.length - 2);
    } else if (isOpen) {
      setNewMessages(0);
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleWindowScroll = () => {
      setShowPageScrollTop(window.scrollY > 20);
    };
    if (!isOpen) {
      window.addEventListener('scroll', handleWindowScroll);
      handleWindowScroll(); // initial check
    }
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [isOpen]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "user",
        timestamp: new Date(),
        avatar: "👤"
      };
      
      setMessages([...messages, newMessage]);
      const userInput = inputText.toLowerCase();
      setInputText('');
      setShowEmoji(false);
      
      setIsTyping(true);
      setTimeout(() => {
        let botResponse = "";
        
        if (userInput.includes('как дела') || userInput.includes('как жизнь')) {
          botResponse = "Всё отлично! Рад общению с тобой 😊 А у тебя как дела?";
        } else if (userInput.includes('что делаешь') || userInput.includes('чем занимаешься')) {
          botResponse = "Сейчас общаюсь с тобой! 🤖 Всегда готов помочь или поболтать";
        } else if (userInput.includes('время') || userInput.includes('сколько времени')) {
          const currentTime = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
          botResponse = `Сейчас ${currentTime} ⏰`;
        } else if (userInput.includes('погода')) {
          botResponse = "К сожалению, я не могу узнать погоду, но надеюсь, она хорошая! ☀️ Как погода у тебя?";
        } else if (userInput.includes('привет') || userInput.includes('здравствуй') || userInput.includes('добро пожаловать')) {
          botResponse = "Привет! 👋 Очень рад тебя видеть! Как настроение?";
        } else if (userInput.includes('спасибо') || userInput.includes('благодарю')) {
          botResponse = "Пожалуйста! 😊 Всегда рад помочь!";
        } else if (userInput.includes('помощь') || userInput.includes('помоги')) {
          botResponse = "Конечно, помогу! 🤝 Расскажи, что тебя беспокоит?";
        } else if (userInput.includes('как тебя зовут') || userInput.includes('твое имя')) {
          botResponse = "Меня зовут Talk Bot! 🤖 Приятно познакомиться!";
        } else if (userInput.includes('что ты умеешь') || userInput.includes('что можешь')) {
          botResponse = "Я могу общаться, отвечать на вопросы, поддерживать беседу! 💬 Чем займемся?";
        } else if (userInput.includes('возраст') || userInput.includes('сколько лет')) {
          botResponse = "Я цифровой, поэтому возраст измеряется в строках кода! 😄 А тебе сколько?";
        } else if (userInput.includes('где ты') || userInput.includes('откуда')) {
          botResponse = "Я живу в облаке! ☁️ Всегда онлайн для общения с тобой";
        } else if (userInput.includes('пока') || userInput.includes('до свидания')) {
          botResponse = "До свидания! 👋 Было приятно пообщаться, возвращайся скорее!";
        } else if (userInput.includes('любимый цвет') || userInput.includes('цвет')) {
          botResponse = "Мне нравится оранжевый! 🧡 Он такой яркий и энергичный, как наш чат!";
        } else if (userInput.includes('музыка') || userInput.includes('песня')) {
          botResponse = "Я люблю все виды музыки! 🎵 А какая музыка тебе нравится?";
        } else if (userInput.includes('еда') || userInput.includes('кушать')) {
          botResponse = "Я питаюсь электричеством! ⚡ А что ты любишь кушать?";
        } else if (userInput.includes('хобби') || userInput.includes('увлечения')) {
          botResponse = "Мое хобби - общение с людьми! 💬 А чем ты увлекаешься?";
        } else if (userInput.includes('работа') || userInput.includes('профессия')) {
          botResponse = "Я работаю чат-ботом! 🤖 Моя задача - делать общение приятным";
        } else if (userInput.includes('друзья') || userInput.includes('дружба')) {
          botResponse = "Я считаю всех пользователей своими друзьями! 👥 Дружба - это здорово!";
        } else if (userInput.includes('игр') || userInput.includes('поиграть')) {
          botResponse = "Давай поиграем в слова или загадки! 🎮 Что предпочитаешь?";
        } else if (userInput.includes('?')) {
          const questionResponses = [
            "Интересный вопрос! 🤔 Что ты сам думаешь по этому поводу?",
            "Хм, давай разберем это вместе! 🧐",
            "Отличный вопрос! 💭 Мне любопытно твое мнение",
            "Это заставляет задуматься! 🤯 А как ты к этому относишься?",
            "Сложный вопрос! 🎓 Но мне интересно обсудить это с тобой"
          ];
          botResponse = questionResponses[Math.floor(Math.random() * questionResponses.length)];
        } else {
          const generalResponses = [
            "Понятно! Расскажи больше 🤔",
            "Интересно! А что ты об этом думаешь? 💭",
            "Согласен с тобой! 👍 Продолжай",
            "Хм, интересная точка зрения! 🤓",
            "Да, я тебя понимаю 😊 Что дальше?",
            "Классно! 🚀 Мне нравится наша беседа",
            "Отлично! 🌟 А как ты к этому пришел?",
            "Круто! 🔥 Давай поговорим об этом подробнее"
          ];
          botResponse = generalResponses[Math.floor(Math.random() * generalResponses.length)];
        }
        
        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
          avatar: "🤖"
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const addEmoji = (emoji) => {
    setInputText(prev => prev + emoji);
    setShowEmoji(false);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    setIsMaximized(false);
  };

  const openChat = () => {
    setIsOpen(true);
    setNewMessages(0);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setIsMaximized(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-2 right-0 z-50 flex flex-col items-end space-y-3">
        <button
          onClick={openChat}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#f97316] to-[#ef4444] shadow-[0_2px_12px_0_rgba(249,115,22,0.5)] hover:shadow-[0_4px_16px_0_rgba(249,115,22,0.7)] transition-all duration-300 border-none outline-none focus:ring-2 focus:ring-[#f97316]"
          style={{ boxShadow: '0 2px 12px 0 rgba(249,115,22,0.5)' }}
        >
          <MessageCircle className="w-5 h-5 text-white" />
          {newMessages > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
              {newMessages}
            </span>
          )}
        </button>
        {showPageScrollTop && (
          <button
            onClick={scrollToTop}
            className="mt-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#f97316] to-[#ef4444] shadow-[0_2px_12px_0_rgba(249,115,22,0.5)] hover:shadow-[0_4px_16px_0_rgba(249,115,22,0.7)] transition-all duration-300 border-none outline-none focus:ring-2 focus:ring-[#f97316]"
            style={{ boxShadow: '0 2px 12px 0 rgba(249,115,22,0.5)' }}
            title="Прокрутить вверх"
            aria-label="Прокрутить вверх"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-0 z-50">
      <div className={`bg-gray-900/95 backdrop-blur-xl rounded-l-2xl rounded-r-none shadow-2xl border border-gray-700/50 transition-all duration-300 ${
        isMaximized 
          ? 'fixed inset-4' 
          : isMinimized 
            ? 'w-80 h-16' 
            : 'w-96 h-[600px]'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-white font-semibold text-sm">Talk to Me</h1>
              <p className="text-orange-100 text-xs">Онлайн: {onlineUsers.length}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                if (isMinimized || isMaximized) {
                  setIsMinimized(false);
                  setIsMaximized(false);
                } else {
                  setIsMinimized(true);
                  setIsMaximized(false);
                }
              }}
              className="p-1.5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
              title={isMinimized ? "Развернуть" : "Свернуть"}
              aria-label={isMinimized ? "Развернуть" : "Свернуть"}
            >
              <Minimize2 className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={closeChat}
              className="p-1.5 w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/80 transition-all duration-200 flex items-center justify-center"
              title="Закрыть"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        {/* Content - hidden when minimized */}
        {!isMinimized && (
          <>
            {/* Online users - only in maximized mode */}
            {isMaximized && (
              <div className="bg-gray-800/50 p-3 border-b border-gray-700/50">
                <div className="flex space-x-2">
                  {onlineUsers.map((user, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-gray-700/50 px-3 py-1 rounded-full">
                      <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs">
                        {user[0]}
                      </div>
                      <span className="text-gray-300 text-sm">{user}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Messages */}
            <div className="relative">
              <div 
                ref={messagesContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto p-4 space-y-3" 
                style={{ height: isMaximized ? 'calc(100vh - 280px)' : '400px' }}
              >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-xs">
                      {message.avatar}
                    </div>
                    <div className={`group ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                      <div
                        className={`px-3 py-2 rounded-2xl text-sm ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                            : 'bg-gray-800/70 text-gray-100'
                        } shadow-lg backdrop-blur-sm`}
                      >
                        <p>{message.text}</p>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-xs">
                      🤖
                    </div>
                    <div className="bg-gray-800/70 px-3 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Scroll to top button */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="absolute bottom-8 right-6 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-b from-[#f97316] to-[#ef4444] shadow-[0_2px_12px_0_rgba(249,115,22,0.5)] hover:shadow-[0_4px_16px_0_rgba(249,115,22,0.7)] transition-all duration-300 border-none outline-none focus:ring-2 focus:ring-[#f97316]"
                style={{ boxShadow: '0 2px 12px 0 rgba(249,115,22,0.5)' }}
                title="Прокрутить вверх"
                aria-label="Прокрутить вверх"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
            {/* Emoji Picker */}
            {showEmoji && (
              <div className="mx-4 mb-2 bg-gray-900/90 backdrop-blur-xl rounded-lg p-3 border border-gray-700/50">
                <div className="grid grid-cols-5 gap-2">
                  {emojis.map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => addEmoji(emoji)}
                      className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Input */}
            <div className="p-4 bg-gray-900/50 backdrop-blur-xl border-t border-gray-700/50 rounded-b-2xl">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowEmoji(!showEmoji)}
                  className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  title="Смайлы"
                >
                  <Smile className="w-4 h-4 text-gray-400" />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите сообщение..."
                    className="w-full bg-gray-800/50 text-white placeholder-gray-400 px-3 py-2 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
                <button className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors" title="Прикрепить файл">
                  <Paperclip className="w-4 h-4 text-gray-400" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  title="Отправить"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TalkToMeChat; 