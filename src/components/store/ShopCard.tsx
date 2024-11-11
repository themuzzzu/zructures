import React from 'react';

interface ShopCardProps {
  shop: {
    id: number;
    name: string;
    type: string;
    image: string;
    rating: number;
    reviews: number;
    location: string;
    isOpen: boolean;
  };
}

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="relative">
        <img src={shop.image} alt={shop.name} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            shop.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {shop.isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{shop.name}</h3>
        <p className="text-purple-600 text-sm font-medium">{shop.type}</p>
        <p className="text-gray-500 text-sm">{shop.location}</p>
        <div className="mt-2 flex items-center">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(shop.rating))}
            {'☆'.repeat(5 - Math.floor(shop.rating))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({shop.reviews})</span>
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
          Visit Store
        </button>
      </div>
    </div>
  );
}