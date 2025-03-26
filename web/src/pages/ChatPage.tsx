import { useEffect, useRef, useState } from 'react';
import { Message as MessageType } from '../types/types';
import { Message } from '../components/Message';
import { ChatInput } from '../components/ChatInput';
import { v4 as uuidv4 } from 'uuid';

const ChatPage = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: MessageType = {
      id: uuidv4(),
      content,
      role: 'user',
      createdAt: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // TODO: Add API call to get assistant's response
    // For now, just echo back
    const assistantMessage: MessageType = {
      id: uuidv4(),
      content: `You said: ${content}`,
      role: 'assistant',
      createdAt: new Date()
    };
    setTimeout(() => {
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1 min-h-0">
        <div className="h-full overflow-y-auto">
          <div className="p-4">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 w-full">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;