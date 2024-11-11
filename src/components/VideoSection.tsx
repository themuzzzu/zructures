import React, { useState } from 'react';
import { Video, GraduationCap, Film } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Starting a Local Business in India',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=225',
    author: 'Entrepreneurship Hub',
    views: '15K',
    type: 'education'
  },
  {
    id: 2,
    title: 'Digital Marketing for Small Businesses',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400&h=225',
    author: 'Digital Skills Academy',
    views: '8.5K',
    type: 'education'
  },
  {
    id: 3,
    title: 'Street Food Stories: Mumbai Edition',
    thumbnail: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400&h=225',
    author: 'Food & Culture',
    views: '25K',
    type: 'entertainment'
  }
];

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'education' | 'entertainment'>('all');

  const filteredVideos = videos.filter(
    (video) => activeTab === 'all' || video.type === activeTab
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Video className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold">Videos</h2>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-full flex items-center space-x-1 ${
              activeTab === 'education'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>Education</span>
          </button>
          <button
            onClick={() => setActiveTab('entertainment')}
            className={`px-4 py-2 rounded-full flex items-center space-x-1 ${
              activeTab === 'entertainment'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Film className="h-4 w-4" />
            <span>Entertainment</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{video.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{video.author}</span>
                <span>{video.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}