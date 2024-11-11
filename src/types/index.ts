export interface User {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  following: number;
  followers: number;
}

export interface Zruct {
  id: number;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  location: string;
}

export interface TrendingTopic {
  id: number;
  topic: string;
  posts: string;
}