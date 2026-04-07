
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Heart,
  MessageSquare,
  Calendar,
  BookOpen,
  Users,
  ClipboardList,
  Settings,
  LogOut,
  Briefcase,
  TrendingUp,
  Target,
} from 'lucide-react';

interface SidebarProps {
  user: any;
  userType: string;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userType, onLogout }) => {
  let menuItems: { id: string; label: string; icon: any; path: string }[] = [];

  if (userType === 'student') {
    // 🔹 Student gets all tabs
    menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Heart, path: '/dashboard' },
      { id: 'chat', label: 'AI Support', icon: MessageSquare, path: '/chat' },
      { id: 'mood', label: 'Mood Tracker', icon: TrendingUp, path: '/mood' },
      { id: 'booking', label: 'Book Session', icon: Calendar, path: '/booking' },
      { id: 'resources', label: 'Resources', icon: BookOpen, path: '/resources' },
      { id: 'career', label: 'Career Guide', icon: Briefcase, path: '/career' },
      { id: 'peer-support', label: 'Peer Support', icon: Users, path: '/peer-support' },
      { id: 'assessment', label: 'Assessment', icon: ClipboardList, path: '/assessment' },
      { id: 'streaks', label: 'Streaks', icon: Target, path: '/streaks' },
    ];
  } else if (userType === 'counselor') {
    // 🔹 Counselor only 3 tabs
    menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Heart, path: '/dashboard' },
      { id: 'resources', label: 'Resources', icon: BookOpen, path: '/resources' },
      { id: 'booking', label: 'Book Session', icon: Calendar, path: '/booking' },
    ];
  } else if (userType === 'admin') {
    // 🔹 Admin only dashboard + admin panel
    menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Heart, path: '/dashboard' },
      { id: 'admin', label: 'Admin Panel', icon: Settings, path: '/admin' },
    ];
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white/95 backdrop-blur-sm border-r border-blue-100 z-50 flex flex-col">
      {/* Logo */}
      <div className="flex items-center space-x-2 px-4 h-16 border-b border-blue-100">
        <Heart className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-900">NeuroSaathi</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex w-full items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout at the bottom */}
      <div className="px-4 py-4 border-t border-blue-100">
        <button
          onClick={onLogout}
          className="flex w-full items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

