import React from 'react';
import { MapPin, Users } from 'lucide-react';

interface ProfileProps {
  user: {
    name: string;
    handle: string;
    avatar: string;
    bio: string;
    location: string;
    following: number;
    followers: number;
  };
}

export default function ProfileSection({ user }: ProfileProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      {/* Cover Image */}
      <div className="h-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-t-lg"></div>

      {/* Profile Info */}
      <div className="px-4 pb-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full border-4 border-white absolute -top-10"
          />
        </div>

        <div className="mt-12">
          <h2 className="font-bold text-xl">{user.name}</h2>
          <p className="text-gray-500">{user.handle}</p>
        </div>

        <p className="mt-3 text-gray-700">{user.bio}</p>

        <div className="mt-4 flex items-center text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{user.location}</span>
        </div>

        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-gray-500" />
            <span className="font-semibold">{user.following}</span>
            <span className="ml-1 text-gray-500">Following</span>
          </div>
          <div>
            <span className="font-semibold">{user.followers}</span>
            <span className="ml-1 text-gray-500">Followers</span>
          </div>
        </div>

        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
          Edit Profile
        </button>
      </div>
    </div>
  );
}