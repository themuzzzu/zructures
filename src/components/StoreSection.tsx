import React, { useState } from 'react';
import { Store, Search, Filter, ShoppingBag, Briefcase, StoreIcon, Calendar } from 'lucide-react';
import MarketplaceItem from './store/MarketplaceItem';
import FreelancerCard from './store/FreelancerCard';
import ShopCard from './store/ShopCard';
import AppointmentCard from './store/AppointmentCard';
import { marketplaceItems, freelancers, shops, appointments } from './store/StoreData';

type SubSection = 'marketplace' | 'skills' | 'shops' | 'appointments';

export default function StoreSection() {
  const [activeTab, setActiveTab] = useState<SubSection>('marketplace');
  const [searchQuery, setSearchQuery] = useState('');

  const renderMarketplace = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {marketplaceItems.map((item) => (
        <MarketplaceItem key={item.id} item={item} />
      ))}
    </div>
  );

  const renderSkills = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {freelancers.map((freelancer) => (
        <FreelancerCard key={freelancer.id} freelancer={freelancer} />
      ))}
    </div>
  );

  const renderShops = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );

  const renderAppointments = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {appointments.map((provider) => (
        <AppointmentCard key={provider.id} provider={provider} />
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Store className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold">Store</h2>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('marketplace')}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              activeTab === 'marketplace'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Marketplace</span>
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              activeTab === 'skills'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Skills</span>
          </button>
          <button
            onClick={() => setActiveTab('shops')}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              activeTab === 'shops'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <StoreIcon className="h-4 w-4" />
            <span>Shops</span>
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              activeTab === 'appointments'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Appointments</span>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${activeTab}...`}
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Filter className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {activeTab === 'marketplace' && renderMarketplace()}
      {activeTab === 'skills' && renderSkills()}
      {activeTab === 'shops' && renderShops()}
      {activeTab === 'appointments' && renderAppointments()}
    </div>
  );
}