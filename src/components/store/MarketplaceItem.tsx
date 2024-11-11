import React from 'react';

interface MarketplaceItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    seller: string;
    location: string;
    rating: number;
    reviews: number;
  };
}

export default function MarketplaceItem({ item }: MarketplaceItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <span className="text-purple-600 font-bold">{item.price}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{item.seller}</p>
        <p className="text-gray-500 text-sm">{item.location}</p>
        <div className="mt-2 flex items-center">
          <div className="flex text-yellow-400">
            {'★'.repeat(Math.floor(item.rating))}
            {'☆'.repeat(5 - Math.floor(item.rating))}
          </div>
          <span className="ml-2 text-sm text-gray-500">({item.reviews})</span>
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}