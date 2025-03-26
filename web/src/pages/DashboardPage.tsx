import React, { useEffect, useState } from "react";
import { ChatHistory, GroupedChats } from "../types/types";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [groupedChats, setGroupedChats] = useState<GroupedChats>({
    'Today': [],
    'Yesterday': [],
    'Previous 7 Days': [],
    'Previous 30 Days': []
  });

  // TODO: Fetch actual chat history from your backend
  useEffect(() => {
    // Mock data for now
    const mockChats: ChatHistory[] = [
      { id: '1', title: 'useAuth Best Practices', createdAt: new Date(), userId: '1' },
      { id: '2', title: 'React Router DOM Routing', createdAt: new Date(), userId: '1' },
      { id: '3', title: 'Google OAuth Integration', createdAt: new Date(Date.now() - 86400000), userId: '1' }, // Yesterday
      { id: '4', title: 'Custom Fields Supabase', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' },
      { id: '5', title: 'Custom Fields Supabase 2', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' }, // 3 days ago
      { id: '6', title: 'Custom Fields Supabase 3', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' },
      { id: '7', title: 'Custom Fields Supabase 4', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' },
      { id: '8', title: 'Custom Fields Supabase 5', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' },
      { id: '9', title: 'Custom Fields Supabase 6', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' },
      { id: '10', title: 'Custom Fields Supabase 7', createdAt: new Date(Date.now() - 86400000 * 3), userId: '1' },
    ];

    // Group chats by time period
    const grouped: GroupedChats = {
      'Today': mockChats.filter(chat => isToday(chat.createdAt)),
      'Yesterday': mockChats.filter(chat => isYesterday(chat.createdAt)),
      'Previous 7 Days': mockChats.filter(chat => isWithinLast7Days(chat.createdAt)),
      'Previous 30 Days': mockChats.filter(chat => isWithinLast30Days(chat.createdAt))
    };

    setGroupedChats(grouped);
  }, []);

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl font-semibold mb-6">Chat History</h1>
        
        {Object.entries(groupedChats).map(([timeGroup, chats]) => (
          chats && chats.length > 0 && (
            <div key={timeGroup} className="mb-6">
              <h2 className="text-sm text-gray-600 mb-2">{timeGroup}</h2>
              <div className="space-y-1">
                {chats.map((chat) => (
                  <Link
                    key={chat.id}
                    to={`/chat/${chat.id}`}
                    className="block p-3 border rounded hover:bg-gray-50"
                  >
                    {chat.title}
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

// Helper functions to categorize dates
const isToday = (date: Date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const isYesterday = (date: Date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.toDateString() === yesterday.toDateString();
};

const isWithinLast7Days = (date: Date) => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  return date > sevenDaysAgo && !isToday(date) && !isYesterday(date);
};

const isWithinLast30Days = (date: Date) => {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  return date > thirtyDaysAgo && !isWithinLast7Days(date) && !isToday(date) && !isYesterday(date);
};

export default DashboardPage;
