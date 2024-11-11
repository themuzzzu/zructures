import React, { useState } from 'react';
import { X, Image as ImageIcon, MapPin } from 'lucide-react';

interface NewZructModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewZructModal({ isOpen, onClose }: NewZructModalProps) {
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle zruct creation
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Create New Zruct</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening in your business?"
            className="w-full h-32 p-3 border rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />

          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
            >
              <ImageIcon className="h-5 w-5" />
              <span>Add Image</span>
            </button>

            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-purple-600" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Add location"
                className="border-b focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}