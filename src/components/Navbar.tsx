import React from 'react';
import { Bell } from 'lucide-react';

interface NavProps {
  navigation: {
    name: string;
    icon: React.ElementType;
    href: string;
  }[];
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNewZruct: () => void;
}

export default function Navbar({ navigation, activeSection, setActiveSection, onNewZruct }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-purple-600 text-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">Zructers</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.name.toLowerCase())}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors ${
                  activeSection === item.name.toLowerCase() ? 'bg-purple-700' : ''
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-purple-700 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button
              onClick={onNewZruct}
              className="bg-white text-purple-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              New Zruct
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}