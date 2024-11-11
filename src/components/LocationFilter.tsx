import React from 'react';

interface LocationFilterProps {
  activeLocation: string;
  onLocationChange: (location: string) => void;
}

const locations = ['Local', 'District', 'State', 'National'];

export default function LocationFilter({ activeLocation, onLocationChange }: LocationFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex space-x-4">
      {locations.map((location) => (
        <button
          key={location}
          onClick={() => onLocationChange(location)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            activeLocation === location
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {location}
        </button>
      ))}
    </div>
  );
}