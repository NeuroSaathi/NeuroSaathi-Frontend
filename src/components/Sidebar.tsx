// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react';
// import {
//   Heart,
//   MessageSquare,
//   Calendar,
//   BookOpen,
//   Users,
//   ClipboardList,
//   Settings,
//   LogOut,
//   Briefcase,
//   TrendingUp,
//   Target,
// } from 'lucide-react';

// interface SidebarProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
//   user: any;
//   userType: string;
//   onLogout: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({
//   activeTab,
//   setActiveTab,
//   user,
//   userType,
//   onLogout,
// }) => {
//   const menuItems = [
//     { id: 'dashboard', label: 'Dashboard', icon: Heart, show: true },
//     { id: 'chat', label: 'AI Support', icon: MessageSquare, show: true },
//     { id: 'mood', label: 'Mood Tracker', icon: TrendingUp, show: userType !== 'admin' },
//     { id: 'booking', label: 'Book Session', icon: Calendar, show: true },
//     { id: 'resources', label: 'Resources', icon: BookOpen, show: true },
//     { id: 'career', label: 'Career Guide', icon: Briefcase, show: userType !== 'admin' },
//     { id: 'peer-support', label: 'Peer Support', icon: Users, show: userType !== 'admin' },
//     { id: 'assessment', label: 'Assessment', icon: ClipboardList, show: userType !== 'admin' },
//     { id: 'streaks', label: 'Streaks', icon: Target, show: userType !== 'admin' },
//     { id: 'admin', label: 'Admin Panel', icon: Settings, show: userType === 'admin' },
//   ];

//   return (
//     <aside className="fixed top-0 left-0 h-screen w-64 bg-white/95 backdrop-blur-sm border-r border-blue-100 z-50 flex flex-col">
//       {/* Logo */}
//       <div className="flex items-center space-x-2 px-4 h-16 border-b border-blue-100">
//         <Heart className="h-8 w-8 text-blue-600" />
//         <span className="text-xl font-bold text-gray-900">NeuroSaathi</span>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
//         {menuItems
//           .filter((item) => item.show)
//           .map((item) => {
//             const Icon = item.icon;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`flex w-full items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   activeTab === item.id
//                     ? 'bg-blue-100 text-blue-700'
//                     : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
//                 }`}
//               >
//                 <Icon className="h-4 w-4" />
//                 <span>{item.label}</span>
//               </button>
//             );
//           })}
//       </nav>

//       {/* Logout at the bottom */}
//       <div className="px-4 py-4 border-t border-blue-100">
//         <button
//           onClick={onLogout}
//           className="flex w-full items-center space-x-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
//         >
//           <LogOut className="h-4 w-4" />
//           <span className="hidden sm:inline">Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
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
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: any;
  userType: string;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  user,
  userType,
  onLogout,
}) => {
  let menuItems: { id: string; label: string; icon: any }[] = [];

  if (userType === 'student') {
    // 🔹 Student gets all tabs
    menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Heart },
      { id: 'chat', label: 'AI Support', icon: MessageSquare },
      { id: 'mood', label: 'Mood Tracker', icon: TrendingUp },
      { id: 'booking', label: 'Book Session', icon: Calendar },
      { id: 'resources', label: 'Resources', icon: BookOpen },
      { id: 'career', label: 'Career Guide', icon: Briefcase },
      { id: 'peer-support', label: 'Peer Support', icon: Users },
      { id: 'assessment', label: 'Assessment', icon: ClipboardList },
      { id: 'streaks', label: 'Streaks', icon: Target },
    ];
  } else if (userType === 'counselor') {
    // 🔹 Counselor only 3 tabs
    menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Heart },
      { id: 'resources', label: 'Resources', icon: BookOpen },
      { id: 'booking', label: 'Book Session', icon: Calendar },
    ];
  } else if (userType === 'admin') {
    // 🔹 Admin only dashboard + admin panel
    menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Heart },
      { id: 'admin', label: 'Admin Panel', icon: Settings },
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
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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

