import React from 'react';
import { Briefcase, Book, LineChart, Wallet, Award, FolderGit2 } from 'lucide-react';

const futuresCards = [
  {
    title: 'Vision Check',
    icon: Book,
    description: 'Explore colleges, exams, and skill-building courses',
    color: 'bg-blue-500'
  },
  {
    title: 'Reality Check',
    icon: LineChart,
    description: 'Industry insights and career path guidance',
    color: 'bg-green-500'
  },
  {
    title: 'Financial Planning',
    icon: Wallet,
    description: 'Track expenses and plan your future',
    color: 'bg-yellow-500'
  },
  {
    title: 'Skill Roadmap',
    icon: Award,
    description: 'Build your career with targeted skills',
    color: 'bg-purple-500'
  },
  {
    title: 'Project Portfolio',
    icon: FolderGit2,
    description: 'Showcase your work and achievements',
    color: 'bg-pink-500'
  }
];

export default function FuturesSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Briefcase className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold">Futures Hub</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {futuresCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`${card.color} p-4 text-white`}>
              <card.icon className="h-8 w-8" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
              <button className="mt-4 text-purple-600 font-medium hover:text-purple-700">
                Explore →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}