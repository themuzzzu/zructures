import React from 'react';
import { Calendar, Clock, MapPin, Star } from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AppointmentCardProps {
  provider: {
    id: number;
    name: string;
    type: string;
    image: string;
    rating: number;
    reviews: number;
    location: string;
    price: string;
    nextAvailable: string;
    timeSlots: TimeSlot[];
    category: string;
    verified: boolean;
  };
}

export default function AppointmentCard({ provider }: AppointmentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {provider.verified && (
              <div className="absolute -right-1 -bottom-1 bg-green-500 text-white p-1 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{provider.name}</h3>
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">{provider.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({provider.reviews})</span>
              </div>
            </div>
            <p className="text-purple-600 font-medium">{provider.type}</p>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{provider.location}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <Clock className="h-4 w-4 mr-1" />
              <span>Next available: {provider.nextAvailable}</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Available Slots</span>
            <span className="text-sm text-purple-600">{provider.price}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {provider.timeSlots.map((slot, index) => (
              <button
                key={index}
                disabled={!slot.available}
                className={`py-2 px-3 rounded-lg text-sm font-medium ${
                  slot.available
                    ? 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}