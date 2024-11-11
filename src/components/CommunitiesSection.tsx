import React, { useState } from 'react';
import { Users, Search, MessageSquare, UserPlus } from 'lucide-react';

const communities = [
  {
    id: 1,
    name: 'Tech Entrepreneurs India',
    members: '2.5K',
    description: 'A community for tech startup founders and entrepreneurs across India.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=300',
    topics: ['Startups', 'Technology', 'Innovation']
  },
  {
    id: 2,
    name: 'Local Business Network',
    members: '1.8K',
    description: 'Connect with local business owners, share experiences, and grow together.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400&h=300',
    topics: ['Business', 'Networking', 'Growth']
  },
  {
    id: 3,
    name: 'Digital Marketing Pros',
    members: '3.2K',
    description: 'Learn and share digital marketing strategies for the Indian market.',
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=400&h=300',
    topics: ['Marketing', 'Social Media', 'SEO']
  }
];

const discussions = [
  {
    id: 1,
    title: 'How to scale your local business online?',
    author: 'Amit Patel',
    replies: 24,
    community: 'Local Business Network'
  },
  {
    id: 2,
    title: 'Best practices for social media marketing in 2024',
    author: 'Priya Singh',
    replies: 18,
    community: 'Digital Marketing Pros'
  }
];

export default function CommunitiesSection() {
  const [activeTab, setActiveTab] = useState<'communities' | 'discussions'>('communities');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold">Communities</h2>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('communities')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'communities'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Communities
          </button>
          <button
            onClick={() => setActiveTab('discussions')}
            className={`px-4 py-2 rounded-full ${
              activeTab === 'discussions'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Discussions
          </button>
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search communities or discussions..."
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {activeTab === 'communities' ? (
        <div className="grid grid-cols-1 gap-6">
          {communities.map((community) => (
            <div key={community.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{community.name}</h3>
                  <p className="text-sm">{community.members} members</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {community.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <UserPlus className="h-5 w-5" />
                  <span>Join Community</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{discussion.title}</h3>
                  <p className="text-sm text-gray-500">
                    Posted by {discussion.author} in {discussion.community}
                  </p>
                </div>
                <div className="flex items-center text-gray-500">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{discussion.replies}</span>
                </div>
              </div>
              <button className="mt-4 text-purple-600 font-medium hover:text-purple-700">
                Join Discussion →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}