import { Message as MessageType } from '../types/types';

interface MessageProps {
  message: MessageType;
}

export const Message = ({ message }: MessageProps) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] p-2 rounded mb-2 ${isUser ? 'bg-gray-200' : 'bg-white border'}`}>
        {message.content}
      </div>
    </div>
  );
}; 