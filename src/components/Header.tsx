/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Heart, MessageSquare, Calendar, BookOpen, Users, ClipboardList, Settings, LogOut, Briefcase, TrendingUp, Target } from 'lucide-react';

{/* <div className="text-sm text-gray-600 hidden sm:block">
              Welcome, {user?.name || 'User'}
</div>
<span className="text-sm text-gray-500 hidden sm:inline">J&K Student Wellness</span> */}


interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: any;
  userType: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, user, userType, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Heart, show: true },
    { id: 'chat', label: 'AI Support', icon: MessageSquare, show: true },
    { id: 'mood', label: 'Mood Tracker', icon: TrendingUp, show: userType !== 'admin' },
    { id: 'booking', label: 'Book Session', icon: Calendar, show: true },
    { id: 'resources', label: 'Resources', icon: BookOpen, show: true },
    { id: 'career', label: 'Career Guide', icon: Briefcase, show: userType !== 'admin' },
    { id: 'peer-support', label: 'Peer Support', icon: Users, show: userType !== 'admin' },
    { id: 'assessment', label: 'Assessment', icon: ClipboardList, show: userType !== 'admin' },
    { id: 'streaks', label: 'Streaks', icon: Target, show: userType !== 'admin' },
    { id: 'admin', label: 'Admin Panel', icon: Settings, show: userType === 'admin' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">NeuroSaathi</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {menuItems.filter(item => item.show).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center space-x-3">
            
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex space-x-1 overflow-x-auto">
            {menuItems.filter(item => item.show).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;