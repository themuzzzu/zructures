import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import type { Zruct } from '../types';

interface ZructCardProps {
  zruct: Zruct;
}

export default function ZructCard({ zruct }: ZructCardProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      {/* Zruct Header */}
      <div className="p-4 flex items-start justify-between">
        <div className="flex space-x-3">
          <img
            src={zruct.author.avatar}
            alt={zruct.author.name}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold">{zruct.author.name}</h3>
              <span className="text-gray-500">{zruct.author.handle}</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500">{zruct.timestamp}</span>
            </div>
            <p className="text-gray-500 text-sm">{zruct.location}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Zruct Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 whitespace-pre-wrap">{zruct.content}</p>
      </div>

      {/* Zruct Image */}
      {zruct.image && (
        <div className="pb-3">
          <img
            src={zruct.image}
            alt="Post content"
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Zruct Actions */}
      <div className="border-t px-4 py-3 flex items-center justify-between">
        <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="h-5 w-5" />
          <span>{zruct.likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
          <MessageCircle className="h-5 w-5" />
          <span>{zruct.comments}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
          <Share2 className="h-5 w-5" />
          <span>{zruct.shares}</span>
        </button>
      </div>
    </div>
  );
}