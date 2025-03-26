export interface ChatHistory {
  id: string;
  title: string;
  createdAt: Date;
  userId: string;
}

export type TimeGroup = 'Today' | 'Yesterday' | 'Previous 7 Days' | 'Previous 30 Days';

export type GroupedChats = Record<TimeGroup, ChatHistory[]>;

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  createdAt: Date;
}

export interface Chat {
  id: string;
  messages: Message[];
  title: string;
  createdAt: Date;
  userId: string;
} 