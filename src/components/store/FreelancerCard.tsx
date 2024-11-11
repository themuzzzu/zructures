import React from 'react';
import { MapPin, Star, Clock, Calendar } from 'lucide-react';

interface Service {
  name: string;
  price: string;
}

interface FreelancerCardProps {
  freelancer: {
    id: number;
    name: string;
    skill: string;
    image: string;
    rating: number;
    reviews: number;
    hourlyRate: string;
    location: string;
    availability: string;
    experience: string;
    services: Service[];
    verified: boolean;
  };
}

export default function FreelancerCard({ freelancer }: FreelancerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="p-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={freelancer.image}
              alt={freelancer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {freelancer.verified && (
              <div className="absolute -right-1 -bottom-1 bg-green-500 text-white p-1 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{freelancer.name}</h3>
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-sm">{freelancer.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({freelancer.reviews})</span>
              </div>
            </div>
            <p className="text-purple-600 font-medium">{freelancer.skill}</p>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{freelancer.location}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <Clock className="h-4 w-4 mr-1" />
              <span>{freelancer.experience} experience</span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{freelancer.availability}</span>
          </div>
          <div className="border-t pt-2">
            <p className="text-sm font-medium text-gray-600 mb-2">Services:</p>
            <div className="space-y-1">
              {freelancer.services.map((service, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{service.name}</span>
                  <span className="font-medium text-purple-600">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-purple-600 text-white py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
            Book Now
          </button>
          <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-full font-medium hover:bg-purple-50 transition-colors">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}