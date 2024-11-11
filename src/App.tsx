import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import FuturesSection from './components/FuturesSection';
import VideoSection from './components/VideoSection';
import StoreSection from './components/StoreSection';
import CommunitiesSection from './components/CommunitiesSection';
import ProfileSection from './components/ProfileSection';
import NewZructModal from './components/NewZructModal';
import { Bell, Home, Video, Store, Users, Briefcase } from 'lucide-react';
import { currentUser } from './data/sampleData';

const navigation = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'Futures', icon: Briefcase, href: '#futures' },
  { name: 'Videos', icon: Video, href: '#videos' },
  { name: 'Store', icon: Store, href: '#store' },
  { name: 'Communities', icon: Users, href: '#communities' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isNewZructModalOpen, setIsNewZructModalOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'futures':
        return <FuturesSection />;
      case 'videos':
        return <VideoSection />;
      case 'store':
        return <StoreSection />;
      case 'communities':
        return <CommunitiesSection />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        navigation={navigation}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onNewZruct={() => setIsNewZructModalOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-4 mt-16">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Sidebar />
          </div>

          <div className="col-span-6">
            {renderSection()}
          </div>

          <div className="col-span-3">
            <ProfileSection user={currentUser} />
          </div>
        </div>
      </main>

      <NewZructModal
        isOpen={isNewZructModalOpen}
        onClose={() => setIsNewZructModalOpen(false)}
      />
    </div>
  );
}