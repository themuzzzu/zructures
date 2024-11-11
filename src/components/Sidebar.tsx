import React from 'react';
import { Search, TrendingUp } from 'lucide-react';
import { trendingTopics } from '../data/sampleData';

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="खोजें Zructers..."
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Trending Topics */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <h2 className="font-semibold text-lg">ट्रेंडिंग टॉपिक्स</h2>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div key={topic.id} className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  {topic.topic}
                </a>
                <span className="text-sm text-gray-500">{topic.posts} posts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}