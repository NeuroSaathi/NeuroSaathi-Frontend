// import React, { useState } from 'react';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import ChatSupport from './components/ChatSupport';
// import BookingSystem from './components/BookingSystem';
// import ResourceHub from './components/ResourceHub';
// import PeerSupport from './components/PeerSupport';
// import Assessment from './components/Assessment';
// import AdminPanel from './components/AdminPanel';
// import CareerGuidance from './components/CareerGuidance';
// import MoodTracker from './components/MoodTracker';
// import StreakBuilder from './components/StreakBuilder';
// import Login from './components/Login';

// function App() {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [user, setUser] = useState(null);
//   const [userType, setUserType] = useState('student'); // student, counselor, admin

//   if (!user) {
//     return <Login onLogin={setUser} setUserType={setUserType} />;
//   }

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard':
//         return <Dashboard userType={userType} />;
//       case 'chat':
//         return <ChatSupport />;
//       case 'booking':
//         return <BookingSystem userType={userType} />;
//       case 'resources':
//         return <ResourceHub />;
//       case 'peer-support':
//         return <PeerSupport userType={userType} />;
//       case 'assessment':
//         return <Assessment />;
//       case 'admin':
//         return userType === 'admin' ? <AdminPanel /> : <Dashboard userType={userType} />;
//       case 'career':
//         return <CareerGuidance />;
//       case 'mood':
//         return <MoodTracker />;
//       case 'streaks':
//         return <StreakBuilder />;
//       default:
//         return <Dashboard userType={userType} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
//       <Header 
//         activeTab={activeTab} 
//         setActiveTab={setActiveTab}
//         user={user}
//         userType={userType}
//         onLogout={() => setUser(null)}
//       />
//       <main className="pt-20">
//         {renderContent()}
//       </main>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
// Import Sidebar instead of Header
import Sidebar from './components/Sidebar';

import Dashboard from './components/Dashboard';
import ChatSupport from './components/ChatSupport';
import BookingSystem from './components/BookingSystem';
import ResourceHub from './components/ResourceHub';
import PeerSupport from './components/PeerSupport';
import Assessment from './components/Assessment';
import AdminPanel from './components/AdminPanel';
import CareerGuidance from './components/CareerGuidance';
import MoodTracker from './components/MoodTracker';
import StreakBuilder from './components/StreakBuilder';
import Login from './components/Login';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState('student'); // student, counselor, admin

  if (!user) {
    return <Login onLogin={setUser} setUserType={setUserType} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard userType={userType} />;
      case 'chat':
        return <ChatSupport />;
      case 'booking':
        return <BookingSystem userType={userType} />;
      case 'resources':
        return <ResourceHub />;
      case 'peer-support':
        return <PeerSupport userType={userType} />;
      case 'assessment':
        return <Assessment />;
      case 'admin':
        return userType === 'admin' ? <AdminPanel /> : <Dashboard userType={userType} />;
      case 'career':
        return <CareerGuidance />;
      case 'mood':
        return <MoodTracker />;
      case 'streaks':
        return <StreakBuilder />;
      default:
        return <Dashboard userType={userType} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex">
      {/* Sidebar fixed on the left */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        userType={userType}
        onLogout={() => setUser(null)}
      />

      {/* Main content with left margin */}
      <main className="flex-1 ml-64 p-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
